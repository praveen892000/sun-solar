"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export type ProductMenuCategory = {
  name: string;
  slug: string;
  items: { name: string; slug: string }[];
};

type HeaderProps = {
  logoUrl: string;
  productMenu: ProductMenuCategory[];
};

const ABOUT_LINKS = [
  { label: "Profile", href: "/about" },
  { label: "EPC", href: "/epc" },
];

const SIMPLE_AFTER = [
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Drop focus so CSS-driven dropdowns close after a link is chosen. */
function closeMenus() {
  (document.activeElement as HTMLElement | null)?.blur();
}

const navLink =
  "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors";

export function Header({ logoUrl, productMenu }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string | string[]) => {
    const active = (Array.isArray(href) ? href : [href]).some(isActive);
    return `${navLink} ${
      active ? "text-solar-deep" : "text-navy hover:text-azure"
    }`;
  };

  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Sri Sun Solar home"
          onClick={closeMobile}
        >
          <Image
            src={logoUrl}
            alt="Sri Sun Solar Energiser Pvt Ltd"
            width={417}
            height={75}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Dropdown
            label="About"
            href="/about"
            triggerClass={linkClass(["/about", "/epc"])}
          >
            <ul className="w-48">
              {ABOUT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-navy hover:bg-sand hover:text-azure"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Dropdown>

          <Link href="/subsidy" className={linkClass("/subsidy")}>
            Subsidy
          </Link>

          <Dropdown
            label="Products"
            href="/products"
            triggerClass={linkClass("/products")}
            align="center"
          >
            <div className="grid w-[34rem] grid-cols-2 gap-x-6 gap-y-4 p-1">
              {productMenu.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/products#${cat.slug}`}
                    onClick={closeMenus}
                    className="block px-2 pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-solar-deep hover:text-navy"
                  >
                    {cat.name}
                  </Link>
                  <ul>
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/products/${item.slug}`}
                          onClick={closeMenus}
                          className="block rounded-lg px-2 py-1.5 text-sm text-navy hover:bg-sand hover:text-azure"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Dropdown>

          {SIMPLE_AFTER.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact#enquire" className="btn btn-primary hidden !py-2.5 sm:inline-flex">
            Enquire
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-sand lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <div className="container-site flex flex-col py-4">
            <MobileLink href="/" onNavigate={closeMobile}>
              Home
            </MobileLink>

            <MobileGroup title="About" href="/about" onNavigate={closeMobile}>
              {ABOUT_LINKS.map((item) => (
                <MobileSub key={item.href} href={item.href} onNavigate={closeMobile}>
                  {item.label}
                </MobileSub>
              ))}
            </MobileGroup>

            <MobileLink href="/subsidy" onNavigate={closeMobile}>
              Subsidy
            </MobileLink>

            <MobileGroup title="Products" href="/products" onNavigate={closeMobile}>
              {productMenu.map((cat) => (
                <div key={cat.slug} className="py-1">
                  <Link
                    href={`/products#${cat.slug}`}
                    onClick={closeMobile}
                    className="block px-3 pt-2 text-xs font-semibold uppercase tracking-[0.12em] text-solar-deep"
                  >
                    {cat.name}
                  </Link>
                  {cat.items.map((item) => (
                    <MobileSub
                      key={item.slug}
                      href={`/products/${item.slug}`}
                      onNavigate={closeMobile}
                    >
                      {item.name}
                    </MobileSub>
                  ))}
                </div>
              ))}
            </MobileGroup>

            {SIMPLE_AFTER.map((item) => (
              <MobileLink key={item.href} href={item.href} onNavigate={closeMobile}>
                {item.label}
              </MobileLink>
            ))}

            <Link
              href="/contact#enquire"
              onClick={closeMobile}
              className="btn btn-primary mt-4"
            >
              Enquire
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function Dropdown({
  label,
  href,
  triggerClass,
  align = "left",
  children,
}: {
  label: string;
  href: string;
  triggerClass: string;
  align?: "left" | "center";
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <Link href={href} className={triggerClass} aria-haspopup="true">
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </Link>
      <div
        className={`invisible absolute top-full z-50 pt-2 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 ${
          align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
        }`}
      >
        <div className="rounded-2xl border border-line bg-white p-2 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="border-b border-line px-3 py-3 text-base font-medium text-navy"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  title,
  href,
  onNavigate,
  children,
}: {
  title: string;
  href: string;
  onNavigate: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <Link
        href={href}
        onClick={onNavigate}
        className="block px-3 py-3 text-base font-medium text-navy"
      >
        {title}
      </Link>
      <div className="pb-2 pl-3">{children}</div>
    </div>
  );
}

function MobileSub({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded-lg px-3 py-2 text-[0.95rem] text-muted hover:bg-sand hover:text-azure"
    >
      {children}
    </Link>
  );
}
