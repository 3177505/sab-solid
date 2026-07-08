'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'

const MOBILE_BREAKPOINT = 780

type WhyItem = {
  title: string
  body?: string
}

type UiWhySliderProps = {
  items: WhyItem[]
}

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function UiWhySlider({ items }: UiWhySliderProps) {
  const totalItems = items.length
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null)
  const [swiperKey, setSwiperKey] = useState(() => Date.now())
  const [isHovered, setIsHovered] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  const slidesVisible = isMobile ? 1 : 2
  const lastIndex = Math.max(0, totalItems - slidesVisible)
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < lastIndex

  useEffect(() => {
    setCurrentIndex(0)
    setSwiperKey(Date.now())
  }, [items])

  useEffect(() => {
    if (swiperInstance) {
      window.setTimeout(() => swiperInstance.slideTo(0, 0), 0)
    }
  }, [swiperInstance])

  const handlePrev = useCallback(() => {
    if (!canGoPrev || !swiperInstance) return
    swiperInstance.slidePrev()
  }, [canGoPrev, swiperInstance])

  const handleNext = useCallback(() => {
    if (!canGoNext || !swiperInstance) return
    swiperInstance.slideNext()
  }, [canGoNext, swiperInstance])

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouseX(event.clientX - rect.left)
  }

  const containerWidth = containerRef.current?.clientWidth ?? 0
  const isLeftSide = isHovered && containerWidth ? mouseX < containerWidth / 2 : false
  const showLeftArrow =
    (isMobile && canGoPrev) || (isHovered && isLeftSide && canGoPrev && totalItems > 1)
  const showRightArrow =
    (isMobile && canGoNext) || (isHovered && !isLeftSide && canGoNext && totalItems > 1)

  if (totalItems === 0) return null

  return (
    <div
      className="uiHp__cardSliderWrap"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={onMouseMove}
    >
      {showLeftArrow ? (
        <button
          type="button"
          className="uiHp__cardSlider__arrow uiHp__cardSlider__arrow--left"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            handlePrev()
          }}
          aria-label="Předchozí karta"
        >
          <ChevronIcon />
        </button>
      ) : null}

      {showRightArrow ? (
        <button
          type="button"
          className="uiHp__cardSlider__arrow uiHp__cardSlider__arrow--right"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            handleNext()
          }}
          aria-label="Další karta"
        >
          <ChevronIcon />
        </button>
      ) : null}

      <Swiper
        key={swiperKey}
        className="uiHp__cardSlider"
        slidesPerView="auto"
        spaceBetween={16}
        initialSlide={0}
        speed={600}
        loop={false}
        grabCursor
        touchEventsTarget="container"
        breakpoints={{
          0: { spaceBetween: 12 },
          781: { spaceBetween: 16 },
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper)
          swiper.slideTo(0, 0)
        }}
        onRealIndexChange={(swiper) => setCurrentIndex(swiper.realIndex)}
      >
        {items.map((item) => (
          <SwiperSlide key={item.title} className="uiHp__cardSlider__slide">
            <article className="uiHp__card uiHp__card--flat">
              <h3 className="uiHp__h3">{item.title}</h3>
              {item.body ? <p className="uiHp__body">{item.body}</p> : null}
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {totalItems > 1 ? (
        <div className="uiHp__cardSlider__dots" role="tablist" aria-label="Proč SAB Finance">
          {Array.from({ length: lastIndex + 1 }).map((_, index) => {
            const isActive = index === currentIndex
            return (
              <button
                key={`why-dot-${index}`}
                type="button"
                className={`uiHp__cardSlider__dot${isActive ? ' is-active' : ''}`}
                aria-label={`Karta ${index + 1}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  swiperInstance?.slideTo(index)
                }}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
