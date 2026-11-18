"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SnapSlide = {
  id: string;
  image: string;
  title: string;
  meta?: string;
  href?: string;
};

export function SnapSlider({
  slides,
  label = "Gallery",
}: {
  slides: SnapSlide[];
  label?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 420);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-muted">{label}</p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Scroll previous"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-azure hover:text-azure"
            onClick={() => scrollBy(-1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll next"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-azure hover:text-azure"
            onClick={() => scrollBy(1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="slider-track flex gap-4 overflow-x-auto pb-2">
        {slides.map((slide) => {
          const inner = (
            <>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 360px"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-navy">{slide.title}</h3>
                {slide.meta ? (
                  <p className="mt-1 text-sm text-muted">{slide.meta}</p>
                ) : null}
              </div>
            </>
          );

          return (
            <article
              key={slide.id}
              className="slider-slide group w-[min(82vw,22rem)] shrink-0 overflow-hidden rounded-2xl border border-line bg-white"
            >
              {slide.href ? (
                <Link href={slide.href} className="block">
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
