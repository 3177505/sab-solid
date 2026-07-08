'use client'

import { useEffect, useId, useRef, useState } from 'react'

type LiquidGradientProps = {
  className?: string
}

type BlobTone = 'g1' | 'g2' | 'g3' | 'g4' | 'g5'
type BlobAnimation = 'vertical' | 'circle' | 'horizontal'

type BlobConfig = {
  tone: BlobTone
  animation: BlobAnimation
  top: number
  left: number
  width: number
  height: number
  originX: number
  originY: number
  duration: number
  delay: number
  reverse: boolean
  opacity: number
}

const BLOB_TONES: BlobTone[] = ['g1', 'g2', 'g3', 'g4', 'g5']
const BLOB_ANIMATIONS: BlobAnimation[] = ['vertical', 'circle', 'horizontal', 'circle', 'horizontal']

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function randOffCenter(min: number, max: number) {
  const mid = (min + max) / 2
  const gap = (max - min) * 0.12

  if (Math.random() > 0.5) {
    return rand(min, mid - gap)
  }

  return rand(mid + gap, max)
}

function createBlobs(): BlobConfig[] {
  return BLOB_TONES.map((tone, index) => ({
    tone,
    animation: BLOB_ANIMATIONS[index],
    top: randOffCenter(-48, 52),
    left: randOffCenter(-58, 62),
    width: rand(58, index === 4 ? 165 : 138),
    height: rand(54, index === 4 ? 155 : 132),
    originX: rand(8, 92),
    originY: rand(6, 94),
    duration: rand(20, 46),
    delay: rand(0, 14),
    reverse: Math.random() > 0.4,
    opacity: rand(0.55, 0.85),
  }))
}

export default function LiquidGradient({ className = '' }: LiquidGradientProps) {
  const filterId = `liquid-goo-${useId().replace(/:/g, '')}`
  const interactiveRef = useRef<HTMLDivElement>(null)
  const [blobs, setBlobs] = useState<BlobConfig[] | null>(null)

  useEffect(() => {
    setBlobs(createBlobs())
  }, [])

  useEffect(() => {
    const interBubble = interactiveRef.current
    if (!interBubble) return

    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0
    let raf = 0
    let active = true

    const move = () => {
      if (!active) return

      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
      raf = requestAnimationFrame(move)
    }

    const onMouseMove = (event: MouseEvent) => {
      tgX = event.clientX
      tgY = event.clientY
    }

    raf = requestAnimationFrame(move)
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      active = false
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className={`liquidGradient ${className}`.trim()} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" className="liquidGradient__svg" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className="liquidGradient__container"
        style={{ filter: `url(#${filterId}) blur(40px)` }}
      >
        {blobs?.map((blob) => (
          <div
            key={blob.tone}
            className={`liquidGradient__blob liquidGradient__blob--${blob.tone} liquidGradient__blob--${blob.animation}`}
            style={{
              top: `${blob.top}%`,
              left: `${blob.left}%`,
              width: `${blob.width}%`,
              height: `${blob.height}%`,
              opacity: blob.opacity,
              transformOrigin: `${blob.originX}% ${blob.originY}%`,
              animationDuration: `${blob.duration}s`,
              animationDelay: `${blob.delay}s`,
              animationDirection: blob.reverse ? 'reverse' : 'normal',
            }}
          />
        ))}
        <div ref={interactiveRef} className="liquidGradient__blob liquidGradient__blob--interactive" />
      </div>
    </div>
  )
}
