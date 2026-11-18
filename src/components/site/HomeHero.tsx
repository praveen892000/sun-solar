import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HERO_IMAGE } from "@/lib/site-content";
import { SUBSIDY, formatInr } from "@/lib/company";

/** Full-bleed brand-first hero — one composition, no cards or overlays. */
export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-white">
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="anim-soft-zoom -z-20 object-cover object-[center_30%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgb(16_24_32/0.94)_0%,rgb(16_24_32/0.72)_42%,rgb(16_24_32/0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="anim-sun-glow absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-sun/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink via-ink/40 to-transparent"
      />

      <div className="container-site flex min-h-[100svh] flex-col justify-end pb-20 pt-32 sm:pb-24 lg:justify-center lg:pb-28 lg:pt-24">
        <p className="eyebrow anim-rise !text-sun">
          Chennai &middot; Since 2013 &middot; MNRE partner
        </p>

        <h1 className="anim-rise anim-rise-delay-1 mt-5 max-w-5xl font-display text-[clamp(3.4rem,11vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-white">
          Sri Sun
          <span className="block text-sun">Solar</span>
        </h1>

        <p className="anim-rise anim-rise-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Harvest energy in all seasons. Rooftop solar with PM Surya Ghar
          subsidy up to{" "}
          <span className="font-semibold text-white">
            {formatInr(SUBSIDY.cap)}
          </span>
          .
        </p>

        <div className="anim-rise anim-rise-delay-3 mt-10 flex flex-wrap items-center gap-3">
          <Link href="/subsidy" className="btn btn-primary">
            Check my subsidy
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link href="/contact#enquire" className="btn btn-outline-light">
            Free site survey
          </Link>
        </div>
      </div>
    </section>
  );
}
