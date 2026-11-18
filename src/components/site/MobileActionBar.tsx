import Link from "next/link";
import { MapPin, Phone, Sun } from "lucide-react";

export function MobileActionBar({
  phoneTel,
  mapLink,
}: {
  phoneTel: string;
  mapLink: string;
}) {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-white";

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 divide-x divide-white/15 bg-navy/95 shadow-[0_-10px_30px_-12px_rgba(11,31,58,0.55)] backdrop-blur lg:hidden"
    >
      <Link href="/subsidy" className={item}>
        <Sun className="size-5 text-solar" aria-hidden="true" />
        Subsidy
      </Link>
      <a href={`tel:${phoneTel}`} className={item}>
        <Phone className="size-5 text-solar" aria-hidden="true" />
        Call us
      </a>
      <a href={mapLink} target="_blank" rel="noopener noreferrer" className={item}>
        <MapPin className="size-5 text-solar" aria-hidden="true" />
        Location
      </a>
    </nav>
  );
}
