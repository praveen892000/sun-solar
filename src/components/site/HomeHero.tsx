import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE } from "@/lib/site-content";
import { SUBSIDY, formatInr } from "@/lib/company";

/** Full-bleed, brand-first hero. A single CTA group; no cards. */
export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-atmosphere text-white">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Navy wash keeps copy legible and ties the photo to the brand palette. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(11_31_58/0.96)_0%,rgb(11_31_58/0.82)_48%,rgb(11_31_58/0.35)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/70 to-transparent"
      />

      <div className="container-site flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-20 sm:py-28">
        <p className="eyebrow">Energiser Pvt Ltd &middot; Chennai &middot; Since 2013</p>

        <h1 className="mt-4 font-display text-6xl font-semibold leading-[1.02] text-white sm:text-7xl lg:text-8xl">
          Sri Sun Solar
        </h1>

        <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-white sm:text-3xl">
          Harvest energy in all seasons, with PM Surya Ghar subsidy of up to{" "}
          <span className="text-solar">{formatInr(SUBSIDY.cap)}</span> for your home.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/subsidy" className="btn btn-primary">
            Check my subsidy
          </Link>
          <Link href="/contact#enquire" className="btn btn-outline-light">
            Get a free site survey
          </Link>
        </div>
      </div>
    </section>
  );
}
