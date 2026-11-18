import Image from "next/image";
import Link from "next/link";
import { COMPANY, PROJECT_TYPES, SERVICES } from "@/lib/company";
import type { CompanyInfo } from "@/lib/data";

const heading =
  "mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-solar";
const link = "text-white/75 transition-colors hover:text-white";

export function Footer({ company }: { company: CompanyInfo }) {
  const socials = [
    { label: "Facebook", href: company.social.facebook },
    { label: "Instagram", href: company.social.instagram },
    { label: "YouTube", href: company.social.youtube },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href));

  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link href="/" className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src={company.logoUrl}
              alt="Sri Sun Solar Energiser Pvt Ltd"
              width={417}
              height={75}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {COMPANY.blurb}
          </p>
          <p className="mt-4 text-sm italic text-white/60">{company.tagline}</p>
          {socials.length > 0 ? (
            <ul className="mt-5 flex gap-4 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <h2 className={heading}>Services</h2>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className={link}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Projects</h2>
          <ul className="space-y-2.5 text-sm">
            {PROJECT_TYPES.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className={link}>
                  {p.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/gallery" className={link}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={heading}>Reach us</h2>
          <address className="space-y-3 text-sm not-italic leading-relaxed text-white/75">
            <p>{company.address}</p>
            <p>
              <a href={`tel:${company.phoneTel}`} className={link}>
                {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.emailInfo}`} className={link}>
                {company.emailInfo}
              </a>
            </p>
            <p>
              {company.md.name}
              <br />
              <a href={`tel:${company.md.phoneTel}`} className={link}>
                {company.md.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {company.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className={link}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={link}>
                Terms
              </Link>
            </li>
            <li>
              <Link href="/blog" className={link}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className={link}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
