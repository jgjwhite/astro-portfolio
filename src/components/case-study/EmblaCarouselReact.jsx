import React, { useRef, useEffect, useState } from 'react';
import EmblaCarousel from 'embla-carousel';

const GRAY300 = '#d1d5db';
const BLACK = '#111';

/**
 * @param {{ slides: Array<{ imgSrc: string; imgSrcMobile?: string; imgAlt: string }> }} props
 */
export default function EmblaCarouselReact({ slides }) {
  const viewportRef = useRef(null);
  const emblaRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (viewportRef.current) {
      emblaRef.current = EmblaCarousel(viewportRef.current, {
        loop: true,
        align: 'start',
        skipSnaps: false,
      });
      const embla = emblaRef.current;
      const onSelect = () => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
      };
      embla.on('select', onSelect);
      onSelect();
    }
    return () => {
      if (emblaRef.current) {
        emblaRef.current.destroy();
      }
    };
  }, []);

  const scrollPrev = () => emblaRef.current && emblaRef.current.scrollPrev();
  const scrollNext = () => emblaRef.current && emblaRef.current.scrollNext();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((slide, idx) => (
            <div
              className={`embla__slide${idx === slides.length - 1 ? ' embla__slide--last' : ''}`}
              key={idx}
            >
              <picture>
                {slide.imgSrcMobile && (
                  <source srcSet={slide.imgSrcMobile} media="(max-width: 639px)" />
                )}
                <img src={slide.imgSrc} alt={slide.imgAlt} />
              </picture>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__footer flex items-center justify-between mt-4">
        <div className="embla__controls flex gap-2">
          <button type="button" className="embla__chevron-btn" onClick={scrollPrev} aria-label="Previous slide">
            <svg className="embla__chevron" viewBox="0 0 32 32" width="24" height="24" fill="none">
              <path d="M19 22 L13 16 19 10" fill="none" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" className="embla__chevron-btn" onClick={scrollNext} aria-label="Next slide">
            <svg className="embla__chevron" viewBox="0 0 32 32" width="24" height="24" fill="none">
              <path d="M13 10 L19 16 13 22" fill="none" stroke={BLACK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="embla__dots flex gap-2 ml-4">
          {slides.map((_, idx) => (
            <svg key={idx} width="16" height="16" viewBox="0 0 16 16">
              <circle
                cx="8"
                cy="8"
                r="6"
                fill="none"
                stroke={idx === selectedIndex ? BLACK : GRAY300}
                strokeWidth="2"
              />
            </svg>
          ))}
        </div>
      </div>
      <style>{`
        .embla { max-width: 100%; margin: 0 auto; }
        .embla__viewport { overflow: hidden; width: 100%; }
        .embla__container { display: flex; gap: 24px; margin-left: 24px; margin-right: 24px; }
        .embla__slide { position: relative; flex: 0 0 100%; aspect-ratio: 16 / 9; max-width: 1200px; background: #f3f3f3; display: flex; align-items: center; justify-content: center; border: 1.5px solid #e5e7eb; border-radius: 12px; }
        .embla__slide--last { margin-right: 24px; }
        .embla__slide img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; }
        .embla__chevron-btn { width: 44px; height: 44px; border-radius: 50%; background: #fff; border: 2px solid ${GRAY300}; display: flex; align-items: center; justify-content: center; transition: background 0.2s, border-color 0.2s; cursor: pointer; box-shadow: 0 1px 2px rgba(0,0,0,0.04); padding: 0; }
        .embla__chevron-btn:hover { border-color: #b0b6be; }
        .embla__chevron { display: block; }
        @media (max-width: 639px) {
          .embla__slide { aspect-ratio: 1 / 1; }
        }
      `}</style>
    </div>
  );
} 