"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TestimonialItem } from "@/lib/site-content";

export function TestimonialSlider({ items }: { items: TestimonialItem[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const item = items[index];

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      7000,
    );
    return () => window.clearInterval(id);
  }, [count]);

  if (!item) return null;

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-navy px-6 py-10 text-white sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-solar/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-azure/30 blur-3xl"
      />

      <figure key={item.id} className="relative anim-rise">
        <p className="eyebrow !text-solar">Customer story</p>
        <blockquote className="mt-5 font-display text-[clamp(1.35rem,2.8vw,2rem)] leading-snug text-white">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-8">
          <span className="block font-semibold">{item.name}</span>
          {item.role ? (
            <span className="text-sm text-white/65">{item.role}</span>
          ) : null}
        </figcaption>
      </figure>

      <div className="relative mt-10 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {items.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-solar" : "w-2 bg-white/30"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white hover:text-navy"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white hover:text-navy"
            onClick={() => setIndex((i) => (i + 1) % count)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
