import {
  Building2,
  GraduationCap,
  Hospital,
  IndianRupee,
  Landmark,
  Layers,
  Leaf,
  ShoppingBag,
  TrendingDown,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Building2,
  GraduationCap,
  Hospital,
  IndianRupee,
  Landmark,
  Layers,
  Leaf,
  ShoppingBag,
  TrendingDown,
  Wrench,
};

/** Resolve an icon from a string name used in static content files. */
export function SiteIcon({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
