'use client'

import { useEffect, useId, useRef, useState } from 'react'

type LiquidGradientProps = {
  className?: string
}

type BlobTone =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'grey-mid'
  | 'grey-light'
  | 'grey-lighter'

type BlobConfig = {
  tone: BlobTone
  top: number
  left: number
  width: number
  height: number
  driftX: number
  driftY: number
  rotate: number
  duration: number
  delay: number
  reverse: boolean
}

const BLOB_TONES: BlobTone[] = [
  'primary',
  'secondary',
  'tertiary',
  'grey-mid',
  'grey-light',
]

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function createBlobs(): BlobConfig[] {
  return BLOB_TONES.map((tone) => ({
    tone,
    top: rand(-28, 52),
    left: rand(-32, 58),
    width: rand(105, 155),
    height: rand(95, 140),
    driftX: rand(22, 38),
    driftY: rand(18, 32),
    rotate: rand(8, 22),
    duration: rand(24, 38),
    delay: rand(0, 6),
    reverse: Math.random() > 0.5,
  }))
}

export default function LiquidGradient({ className = '' }: LiquidGradientProps) {
  const filterId = `liquid-goo-${useId().replace(/:/g, '')}`
  const interactiveRef = useRef<HTMLDivElement>(null)
  const hasActivatedRef = useRef(false)
  const curRef = useRef({ x: -9999, y: -9999 })
  const tgRef = useRef({ x: -9999, y: -9999 })
  const [interactiveActive, setInteractiveActive] = useState(false)
  const [blobs, setBlobs] = useState<BlobConfig[] | null>(null)

  useEffect(() => {
    setBlobs(createBlobs())
  }, [])

  useEffect(() => {
    const interBubble = interactiveRef.current
    if (!interBubble) return

    let raf = 0
    let active = true

    const setTarget = (x: number, y: number) => {
      tgRef.current.x = x
      tgRef.current.y = y
    }

    const onPointerMove = (event: PointerEvent) => {
      setInteractiveActive(true)
      setTarget(event.clientX, event.clientY)

      if (!hasActivatedRef.current) {
        hasActivatedRef.current = true
        curRef.current.x = event.clientX
        curRef.current.y = event.clientY
      }
    }

    const move = () => {
      if (!active) return

      curRef.current.x += (tgRef.current.x - curRef.current.x) / 22
      curRef.current.y += (tgRef.current.y - curRef.current.y) / 22
      interBubble.style.transform = `translate3d(${Math.round(curRef.current.x)}px, ${Math.round(curRef.current.y)}px, 0)`
      raf = requestAnimationFrame(move)
    }

    raf = requestAnimationFrame(move)
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      active = false
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  return (
    <div className={`liquidGradient ${className}`.trim()} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" className="liquidGradient__svg" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className="liquidGradient__container"
        style={{ filter: `url(#${filterId}) blur(68px)` }}
      >
        {blobs?.map((blob) => (
          <div
            key={blob.tone}
            className={`liquidGradient__blob liquidGradient__blob--${blob.tone}`}
            style={{
              top: `${blob.top}%`,
              left: `${blob.left}%`,
              width: `${blob.width}%`,
              height: `${blob.height}%`,
              animationDuration: `${blob.duration}s`,
              animationDelay: `${blob.delay}s`,
              animationDirection: blob.reverse ? 'reverse' : 'normal',
              ['--drift-x' as string]: `${blob.driftX}vw`,
              ['--drift-y' as string]: `${blob.driftY}vh`,
              ['--drift-rotate' as string]: `${blob.rotate}deg`,
            }}
          />
        ))}
        <div
          ref={interactiveRef}
          className={`liquidGradient__blob liquidGradient__blob--interactive${interactiveActive ? ' is-active' : ''}`}
        />
      </div>
    </div>
  )
}
