import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Admin | Sri Sun Solar",
  robots: { index: false, follow: false },
};

// Bare wrapper for everything under /admin (login has no sidebar chrome).
// Admin pages read the session / database per request, so they may block.
export const instant = false;

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>;
}
