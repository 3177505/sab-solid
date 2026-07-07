#!/usr/bin/env node
/**
 * Stáhne všechny obrázky z homepage sab.cz
 * Spuštění: node scripts/export-sab-homepage-images.mjs
 */

import * as cheerio from 'cheerio'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import crypto from 'crypto'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUT_DIR = path.join(ROOT, 'public/sab-export/homepage')
const OUT_JSON = path.join(ROOT, 'content/sab-export/homepage-images.json')
const BASE = 'https://www.sab.cz'
const PAGE_URL = `${BASE}/`

const IMAGE_EXT = /\.(svg|webp|png|jpg|jpeg|gif|ico)(\?|$)/i

function resolveUrl(src, pageUrl = PAGE_URL) {
  if (!src || src.startsWith('data:')) return null
  const clean = src.replace(/^['"]|['"]$/g, '').trim()
  if (!clean) return null
  if (clean.startsWith('//')) return `https:${clean}`
  if (clean.startsWith('http')) return clean
  if (clean.startsWith('/')) return `${BASE}${clean}`
  try {
    return new URL(clean, pageUrl).href
  } catch {
    return null
  }
}

function slugFromUrl(url) {
  const u = new URL(url)
  let name = path.basename(u.pathname) || 'asset'
  if (!path.extname(name)) {
    const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 8)
    name = `${name}-${hash}.bin`
  }
  return name.replace(/[^a-zA-Z0-9._-]/g, '-')
}

function extractUrlsFromHtml(html) {
  const $ = cheerio.load(html)
  const found = new Map()

  const add = (url, source, alt = null) => {
    const absolute = resolveUrl(url)
    if (!absolute || !IMAGE_EXT.test(absolute)) return
    if (absolute.includes('googletagmanager') || absolute.includes('recaptcha')) return
    if (!found.has(absolute)) {
      found.set(absolute, { url: absolute, source, alt })
    }
  }

  $('img[src]').each((_, el) => {
    add($(el).attr('src'), 'img', $(el).attr('alt') || null)
  })

  $('link[href]').each((_, el) => {
    const rel = ($(el).attr('rel') || '').toLowerCase()
    const href = $(el).attr('href')
    if (rel.includes('icon') || IMAGE_EXT.test(href || '')) {
      add(href, 'link')
    }
  })

  $('source[srcset], img[srcset]').each((_, el) => {
    const srcset = $(el).attr('srcset') || ''
    for (const part of srcset.split(',')) {
      const url = part.trim().split(/\s+/)[0]
      add(url, 'srcset')
    }
  })

  $('[style*="url("]').each((_, el) => {
    const style = $(el).attr('style') || ''
    for (const match of style.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)) {
      add(match[1], 'inline-style')
    }
  })

  // url() anywhere in HTML (CSS in style blocks, bundled refs)
  for (const match of html.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)) {
    add(match[1], 'css-url')
  }

  // bare paths in HTML
  for (const match of html.matchAll(/(?:src|href)=["']([^"']+\.(?:svg|webp|png|jpg|jpeg|gif|ico)[^"']*)["']/gi)) {
    add(match[1], 'attribute')
  }

  return [...found.values()]
}

async function downloadImage(url, seen) {
  if (seen.has(url)) return seen.get(url)

  const filename = slugFromUrl(url)
  const localPath = `/sab-export/homepage/${filename}`
  const diskPath = path.join(OUT_DIR, filename)

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'sab-solid-export/1.0 (research)' },
    })
    if (!res.ok) {
      const entry = { url, local: null, filename, error: `HTTP ${res.status}` }
      seen.set(url, entry)
      return entry
    }
    const buf = Buffer.from(await res.arrayBuffer())
    await fs.writeFile(diskPath, buf)
    const entry = { url, local: localPath, filename, bytes: buf.length }
    seen.set(url, entry)
    return entry
  } catch (err) {
    const entry = { url, local: null, filename, error: String(err) }
    seen.set(url, entry)
    return entry
  }
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })
  await fs.mkdir(path.dirname(OUT_JSON), { recursive: true })

  console.log(`Fetching ${PAGE_URL}...`)
  const res = await fetch(PAGE_URL, {
    headers: { 'User-Agent': 'sab-solid-export/1.0 (research)' },
  })
  const html = await res.text()

  const images = extractUrlsFromHtml(html)
  console.log(`Found ${images.length} image URLs`)

  const seen = new Map()
  const manifest = []

  for (const img of images) {
    const result = await downloadImage(img.url, seen)
    manifest.push({ ...img, ...result })
    process.stdout.write(result.error ? 'x' : '.')
  }
  console.log('')

  const ok = manifest.filter((m) => m.local)
  const failed = manifest.filter((m) => m.error)

  const output = {
    source: PAGE_URL,
    exportedAt: new Date().toISOString(),
    count: manifest.length,
    downloaded: ok.length,
    failed: failed.length,
    images: manifest,
  }

  await fs.writeFile(OUT_JSON, JSON.stringify(output, null, 2), 'utf8')
  console.log(`Downloaded ${ok.length}/${manifest.length} → ${OUT_DIR}`)
  console.log(`Manifest → ${OUT_JSON}`)
  if (failed.length) {
    console.log('Failed:', failed.map((f) => f.url).join('\n  '))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
