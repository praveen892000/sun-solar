/** Join class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Convert a display phone number into a tel: friendly string (India default). */
export function toTel(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  if (digits.length === 11 && digits.startsWith("0")) return `+91${digits.slice(1)}`;
  if (digits.length === 10) return `+91${digits}`;
  return `+${digits}`;
}

/** Format an ISO date for display in Indian locale, pinned to IST so output is stable. */
export function formatDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

/** Remove HTML tags and collapse whitespace; used for meta descriptions and excerpts. */
export function stripMarkup(input: string): string {
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/[#*_`>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Trim text to a maximum length on a word boundary. */
export function truncate(input: string, max = 155): string {
  const text = stripMarkup(input);
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd()}\u2026`;
}

/** If an admin pasted a full <iframe> embed, pull out its src; otherwise return the URL. */
export function extractEmbedUrl(value: string): string {
  const match = value.match(/src=["']([^"']+)["']/i);
  return match ? match[1] : value.trim();
}
