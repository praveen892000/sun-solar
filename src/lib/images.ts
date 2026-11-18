const ALLOWED_HOSTS = new Set(["srisunsolar.com", "www.srisunsolar.com"]);

/**
 * Admin-entered image URLs may point anywhere. next/image only optimises hosts listed in
 * next.config.ts remotePatterns, so anything else must be served as-is (unoptimized).
 */
export function needsUnoptimized(src: string): boolean {
  if (src.startsWith("/")) return false;
  try {
    return !ALLOWED_HOSTS.has(new URL(src).hostname);
  } catch {
    return true;
  }
}
