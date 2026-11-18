import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({
  title,
  eyebrow,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-atmosphere text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-solar/20 blur-3xl"
      />
      <div className="container-site py-14 sm:py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/65">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="anim-rise max-w-3xl font-display text-4xl font-semibold !text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="anim-rise anim-rise-d1 mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="anim-rise anim-rise-d2 mt-8 flex flex-wrap gap-3">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
