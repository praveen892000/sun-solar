import type { TestimonialItem } from "@/lib/site-content";

/** Quote list with a lead quote. Open layout, no card chrome. */
export function Testimonials({ items }: { items: TestimonialItem[] }) {
  if (items.length === 0) return null;
  const [lead, ...rest] = items;

  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
      <figure className="border-l-4 border-solar pl-6 sm:pl-8">
        <blockquote className="font-display text-2xl leading-relaxed text-navy sm:text-[1.7rem]">
          &ldquo;{lead.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-6">
          <span className="block font-semibold text-navy">{lead.name}</span>
          {lead.role ? <span className="text-sm text-muted">{lead.role}</span> : null}
        </figcaption>
      </figure>

      <div className="divide-y divide-line">
        {rest.slice(0, 4).map((t) => (
          <figure key={t.id} className="py-5 first:pt-0 last:pb-0">
            <blockquote className="text-[1.02rem] leading-relaxed text-ink">
              &ldquo;{t.quote.length > 220 ? `${t.quote.slice(0, 217).trimEnd()}...` : t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm">
              <span className="font-semibold text-navy">{t.name}</span>
              {t.role ? <span className="text-muted"> &middot; {t.role}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
