"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  Newspaper,
  Package,
  FolderKanban,
  MessageSquareQuote,
  FileText,
  Settings,
  LogOut,
  ExternalLink,
} from "lucide-react";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/enquiries", label: "Enquiries", icon: Inbox },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/pages", label: "Pages", icon: FileText },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ adminName }: { adminName: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="flex w-60 shrink-0 flex-col bg-slate-900 text-slate-200">
      <div className="border-b border-slate-800 px-5 py-4">
        <p className="text-sm font-semibold text-white">Sri Sun Solar</p>
        <p className="text-xs text-slate-400">Admin panel</p>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm ${
                active
                  ? "bg-amber-600 font-medium text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-slate-800 px-5 py-4 text-sm">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 text-slate-400 hover:text-white"
        >
          <ExternalLink size={14} /> View site
        </Link>
        <p className="truncate text-xs text-slate-500">{adminName}</p>
        <button
          type="button"
          onClick={logout}
          className="flex items-center gap-2 text-slate-300 hover:text-white"
        >
          <LogOut size={14} /> Sign out
        </button>
      </div>
    </aside>
  );
}
