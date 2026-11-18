import Link from "next/link";
import { MapPin, Phone, Sun } from "lucide-react";

/** Floating quick-action dock — replaces the old full-width sticky navy bar. */
export function MobileActionBar({
  phoneTel,
  mapLink,
}: {
  phoneTel: string;
  mapLink: string;
}) {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-ink";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 overflow-hidden rounded-2xl border border-line/80 bg-white/95 shadow-[0_18px_40px_-18px_rgba(16,24,32,0.55)] backdrop-blur-xl lg:hidden"
    >
      <div className="grid grid-cols-3 divide-x divide-line/80">
        <Link href="/subsidy" className={item}>
          <Sun className="size-5 text-sun" aria-hidden="true" />
          Subsidy
        </Link>
        <a href={`tel:${phoneTel}`} className={item}>
          <Phone className="size-5 text-leaf" aria-hidden="true" />
          Call
        </a>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className={item}
        >
          <MapPin className="size-5 text-leaf" aria-hidden="true" />
          Map
        </a>
      </div>
    </nav>
  );
}
