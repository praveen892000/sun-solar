"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Droplets,
  Fan,
  Layers,
  PlugZap,
  SunMedium,
  Waves,
  type LucideIcon,
} from "lucide-react";
export type ProductMenuCategory = {
  name: string;
  slug: string;
  items: { name: string; slug: string }[];
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "solar-panels": SunMedium,
  "solar-inverters": PlugZap,
  batteries: BatteryCharging,
  "solar-water-heaters": Droplets,
  "solar-pumps": Waves,
  "solar-appliances": Fan,
};

type ProductsMegaMenuProps = {
  categories: ProductMenuCategory[];
  onNavigate?: () => void;
};

export function ProductsMegaMenu({
  categories,
  onNavigate,
}: ProductsMegaMenuProps) {
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug ?? "");

  const active = useMemo(
    () => categories.find((c) => c.slug === activeSlug) ?? categories[0],
    [categories, activeSlug],
  );

  if (!active) return null;

  const ActiveIcon = CATEGORY_ICONS[active.slug] ?? Layers;

  return (
    <div className="mega-menu-panel w-[min(92vw,52rem)] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_28px_70px_-30px_rgba(11,31,58,0.55)]">
      <div className="grid md:grid-cols-[13.5rem_1fr]">
        {/* Category rail */}
        <aside className="border-b border-line bg-sand/70 p-3 md:border-b-0 md:border-r">
          <p className="px-3 pb-2 pt-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
            Categories
          </p>
          <ul className="space-y-1">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.slug] ?? Layers;
              const selected = cat.slug === active.slug;
              return (
                <li key={cat.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSlug(cat.slug)}
                    onFocus={() => setActiveSlug(cat.slug)}
                    onClick={() => setActiveSlug(cat.slug)}
                    className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                      selected
                        ? "bg-white text-navy shadow-sm ring-1 ring-azure/20"
                        : "text-muted hover:bg-white/80 hover:text-navy"
                    }`}
                  >
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        selected
                          ? "bg-solar text-white"
                          : "bg-white text-azure"
                      }`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 leading-tight">{cat.name}</span>
                    {selected ? (
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-azure"
                      />
                    ) : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Products + CTA */}
        <div className="flex flex-col p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-azure/10 text-azure">
                <ActiveIcon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-solar-deep">
                  {active.name}
                </p>
                <p className="text-sm text-muted">
                  {active.items.length} product
                  {active.items.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <Link
              href={`/products#${active.slug}`}
              onClick={onNavigate}
              className="hidden text-sm font-semibold text-azure hover:text-solar-deep sm:inline-flex sm:items-center sm:gap-1"
            >
              View all
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <ul
            key={active.slug}
            className="mega-menu-products grid max-h-[18rem] gap-2 overflow-y-auto sm:grid-cols-2"
          >
            {active.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  onClick={onNavigate}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-transparent bg-sand/40 px-3.5 py-3 transition hover:border-azure/25 hover:bg-white hover:shadow-[0_10px_24px_-18px_rgba(27,108,168,0.55)]"
                >
                  <span className="text-sm font-medium text-navy group-hover:text-azure">
                    {item.name}
                  </span>
                  <ArrowRight
                    className="size-4 shrink-0 text-line transition group-hover:translate-x-0.5 group-hover:text-solar"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 overflow-hidden rounded-xl bg-atmosphere p-4 text-white sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-solar">
                  Need a recommendation?
                </p>
                <p className="mt-1 text-sm text-white/80">
                  We size panels, inverters and batteries for your load and roof.
                </p>
              </div>
              <Link
                href="/contact#enquire"
                onClick={onNavigate}
                className="btn btn-primary !py-2.5 shrink-0"
              >
                Enquire now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
