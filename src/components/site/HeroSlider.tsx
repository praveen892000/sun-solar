"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { formatInr, SUBSIDY } from "@/lib/company";

export type HeroSlide = {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

const AUTO_MS = 6500;

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const slide = slides[index] ?? slides[0];

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(index + 1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [index, paused, count, go]);

  if (!slide) return null;

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured solar solutions"
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-center transition-transform duration-[6500ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(105deg,rgb(11_31_58/0.94)_0%,rgb(11_31_58/0.78)_40%,rgb(11_31_58/0.35)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent"
      />

      <div className="container-site relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-28 lg:justify-center lg:pb-28">
        <div key={slide.id} className="max-w-3xl">
          <p className="eyebrow anim-rise text-solar">{slide.eyebrow}</p>
          <h1 className="anim-rise anim-rise-d1 mt-4 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[1.02] text-white">
            {slide.title}
          </h1>
          <p className="anim-rise anim-rise-d2 mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            {slide.body}
          </p>
          <div className="anim-rise anim-rise-d3 mt-9 flex flex-wrap gap-3">
            <Link href={slide.cta.href} className="btn btn-primary">
              {slide.cta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/contact#enquire" className="btn btn-outline-light">
              Free site survey
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-6">
          <p className="text-sm text-white/65">
            PM Surya Ghar subsidy up to{" "}
            <span className="font-semibold text-solar">
              {formatInr(SUBSIDY.cap)}
            </span>
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-navy"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-navy"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
            >
              <ChevronRight className="size-5" />
            </button>
            <div className="ml-2 flex gap-2" role="tablist" aria-label="Slides">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-solar"
                      : "w-2.5 bg-white/35 hover:bg-white/60"
                  }`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Autoplay progress */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 origin-left bg-solar/90"
          key={`bar-${index}-${paused}`}
          style={{
            animation: paused
              ? "none"
              : `progress ${AUTO_MS}ms linear forwards`,
            transformOrigin: "left center",
          }}
        />
      </div>
    </section>
  );
}
