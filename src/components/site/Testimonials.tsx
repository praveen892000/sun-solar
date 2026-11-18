import type { TestimonialItem } from "@/lib/site-content";

/** Large editorial quotes — open layout, no card chrome. */
export function Testimonials({ items }: { items: TestimonialItem[] }) {
  if (items.length === 0) return null;
  const [lead, ...rest] = items;

  return (
    <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
      <figure>
        <span
          aria-hidden="true"
          className="font-display text-7xl leading-none text-sun"
        >
          &ldquo;
        </span>
        <blockquote className="-mt-6 font-display text-[clamp(1.45rem,2.6vw,2.1rem)] leading-snug tracking-tight text-ink">
          {lead.quote}
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-4">
          <span className="h-px w-10 bg-sun" aria-hidden="true" />
          <span>
            <span className="block font-semibold text-ink">{lead.name}</span>
            {lead.role ? (
              <span className="text-sm text-muted">{lead.role}</span>
            ) : null}
          </span>
        </figcaption>
      </figure>

      <div className="space-y-0 divide-y divide-line">
        {rest.slice(0, 4).map((t) => (
          <figure key={t.id} className="py-6 first:pt-0 last:pb-0">
            <blockquote className="text-[1.02rem] leading-relaxed text-ink/90">
              &ldquo;
              {t.quote.length > 200
                ? `${t.quote.slice(0, 197).trimEnd()}...`
                : t.quote}
              &rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm">
              <span className="font-semibold text-ink">{t.name}</span>
              {t.role ? (
                <span className="text-muted"> &middot; {t.role}</span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
