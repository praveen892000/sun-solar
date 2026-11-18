import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Action = { label: string; href: string };

type CtaBannerProps = {
  title: string;
  description?: string;
  primary: Action;
  secondary?: Action;
};

export function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-atmosphere text-white">
      <div
        aria-hidden="true"
        className="anim-sun-glow pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-sun/25 blur-3xl"
      />
      <div className="container-site flex flex-col items-start justify-between gap-8 py-14 sm:py-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight !text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-lg text-white/75">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={primary.href} className="btn btn-primary">
            {primary.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn-outline-light">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
