#!/usr/bin/env node
/**
 * Export texty a obrázky ze sab.cz do content/sab-export/
 * Spuštění: node scripts/export-sab-site.mjs
 */

import * as cheerio from 'cheerio'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import crypto from 'crypto'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT_JSON = path.join(ROOT, 'content/sab-export/site-content.json')
const OUT_IMAGES_DIR = path.join(ROOT, 'public/sab-export/images')
const BASE = 'https://www.sab.cz'

const PAGES = [
  { id: 'homepage', url: '/' },
  { id: 'pro-klienty', url: '/pro-klienty' },
  { id: 'o-nas', url: '/o-nas' },
  { id: 'pro-investory', url: '/pro-investory' },
  { id: 'kontakty', url: '/kontakty' },
  { id: 'ke-stazeni', url: '/ke-stazeni' },
  { id: 'kariera', url: '/kariera' },
]

function resolveUrl(src, pageUrl) {
  if (!src || src.startsWith('data:')) return null
  if (src.startsWith('//')) return `https:${src}`
  if (src.startsWith('http')) return src.split('?')[0] + (src.includes('?') ? '?' + src.split('?').slice(1).join('?') : '')
  if (src.startsWith('/')) return `${BASE}${src}`
  try {
    return new URL(src, pageUrl).href
  } catch {
    return null
  }
}

function cleanText(text) {
  return text.replace(/\s+/g, ' ').trim()
}

function slugFromUrl(url) {
  const u = new URL(url)
  let name = path.basename(u.pathname) || 'root'
  name = name.replace(/[^a-zA-Z0-9._-]/g, '-')
  const ext = path.extname(name)
  if (!ext) {
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 8)
    name = `${name}-${hash}`
  }
  return name
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'sab-solid-export/1.0 (research)' },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  return res.text()
}

function extractPage(html, pageUrl, pageId) {
  const $ = cheerio.load(html)

  const title = cleanText($('title').first().text())
  const metaDescription = cleanText($('meta[name="description"]').attr('content') || '')

  const headings = []
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    const text = cleanText($(el).text())
    if (text) headings.push({ level: el.tagName.toLowerCase(), text })
  })

  const paragraphs = []
  $('p').each((_, el) => {
    const text = cleanText($(el).text())
    if (text && text.length > 1) paragraphs.push(text)
  })

  const listItems = []
  $('li').each((_, el) => {
    const text = cleanText($(el).text())
    if (text && text.length > 1) listItems.push(text)
  })

  const links = []
  $('a[href]').each((_, el) => {
    const text = cleanText($(el).text())
    const href = $(el).attr('href')
    if (!href) return
    const absolute = resolveUrl(href, pageUrl)
    if (text || absolute) {
      links.push({ text: text || null, href, absolute })
    }
  })

  const buttons = []
  $('button').each((_, el) => {
    const text = cleanText($(el).text())
    if (text) buttons.push(text)
  })

  const images = []
  $('img[src]').each((_, el) => {
    const src = $(el).attr('src')
    const alt = cleanText($(el).attr('alt') || '')
    const absolute = resolveUrl(src, pageUrl)
    if (absolute && !absolute.includes('googletagmanager') && !absolute.includes('recaptcha')) {
      images.push({ src, absolute, alt: alt || null })
    }
  })

  // Background images in inline styles
  $('[style*="background"]').each((_, el) => {
    const style = $(el).attr('style') || ''
    const match = style.match(/url\(['"]?([^'")]+)['"]?\)/)
    if (match) {
      const absolute = resolveUrl(match[1], pageUrl)
      if (absolute) images.push({ src: match[1], absolute, alt: null, type: 'background' })
    }
  })

  const navItems = []
  $('nav a, header a').each((_, el) => {
    const text = cleanText($(el).text())
    const href = $(el).attr('href')
    if (text && href && text.length < 80) {
      navItems.push({ text, href, absolute: resolveUrl(href, pageUrl) })
    }
  })

  const blockquotes = []
  $('blockquote').each((_, el) => {
    const text = cleanText($(el).text())
    if (text) blockquotes.push(text)
  })

  // Stats / numbers often in specific elements
  const strongTexts = []
  $('strong, b').each((_, el) => {
    const text = cleanText($(el).text())
    if (text) strongTexts.push(text)
  })

  return {
    id: pageId,
    url: pageUrl,
    fetchedAt: new Date().toISOString(),
    meta: { title, description: metaDescription },
    headings,
    paragraphs,
    listItems,
    links,
    buttons,
    images,
    navigation: navItems,
    blockquotes,
    emphasis: [...new Set(strongTexts)],
  }
}

async function downloadImage(imageUrl, seen) {
  if (seen.has(imageUrl)) return seen.get(imageUrl)

  const filename = slugFromUrl(imageUrl)
  const localPath = `/sab-export/images/${filename}`
  const diskPath = path.join(OUT_IMAGES_DIR, filename)

  try {
    const res = await fetch(imageUrl, {
      headers: { 'User-Agent': 'sab-solid-export/1.0 (research)' },
    })
    if (!res.ok) {
      seen.set(imageUrl, { url: imageUrl, local: null, error: `HTTP ${res.status}` })
      return seen.get(imageUrl)
    }
    const buf = Buffer.from(await res.arrayBuffer())
    await fs.writeFile(diskPath, buf)
    const entry = { url: imageUrl, local: localPath, filename, bytes: buf.length }
    seen.set(imageUrl, entry)
    return entry
  } catch (err) {
    const entry = { url: imageUrl, local: null, error: String(err) }
    seen.set(imageUrl, entry)
    return entry
  }
}

async function main() {
  await fs.mkdir(OUT_IMAGES_DIR, { recursive: true })
  await fs.mkdir(path.dirname(OUT_JSON), { recursive: true })

  const pages = []
  const allImages = new Map()

  for (const { id, url } of PAGES) {
    const pageUrl = `${BASE}${url}`
    console.log(`Fetching ${pageUrl}...`)
    try {
      const html = await fetchHtml(pageUrl)
      const data = extractPage(html, pageUrl, id)
      pages.push(data)
      for (const img of data.images) {
        if (img.absolute && !allImages.has(img.absolute)) {
          allImages.set(img.absolute, img)
        }
      }
    } catch (err) {
      console.error(`  Failed: ${err.message}`)
      pages.push({ id, url: pageUrl, error: String(err) })
    }
  }

  console.log(`Downloading ${allImages.size} images...`)
  const imageManifest = {}
  const seenDownloads = new Map()

  for (const [url] of allImages) {
    const result = await downloadImage(url, seenDownloads)
    imageManifest[url] = result
    process.stdout.write('.')
  }
  console.log('')

  // Attach local paths to page images
  for (const page of pages) {
    if (!page.images) continue
    page.images = page.images.map((img) => ({
      ...img,
      local: imageManifest[img.absolute]?.local ?? null,
      downloadError: imageManifest[img.absolute]?.error ?? null,
    }))
  }

  const exportData = {
    source: BASE,
    exportedAt: new Date().toISOString(),
    pages,
    images: Object.values(imageManifest),
    imageCount: Object.keys(imageManifest).length,
    pageCount: pages.length,
  }

  await fs.writeFile(OUT_JSON, JSON.stringify(exportData, null, 2), 'utf8')
  console.log(`Written ${OUT_JSON}`)
  console.log(`Images in ${OUT_IMAGES_DIR}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
