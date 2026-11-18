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

/** Inner-page hero with soft atmosphere — not the old solid navy block. */
export function PageHero({
  title,
  eyebrow,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-atmosphere pt-24 text-white">
      <div
        aria-hidden="true"
        className="anim-sun-glow pointer-events-none absolute -right-16 top-8 h-56 w-56 rounded-full bg-sun/30 blur-3xl"
      />
      <div className="container-site py-14 sm:py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-white/35">
                    /
                  </span>
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
        {eyebrow ? <p className="eyebrow mb-4 !text-sun">{eyebrow}</p> : null}
        <h1 className="anim-rise max-w-4xl font-display text-4xl font-extrabold tracking-tight !text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="anim-rise anim-rise-delay-1 mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="anim-rise anim-rise-delay-2 mt-8 flex flex-wrap gap-3">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
