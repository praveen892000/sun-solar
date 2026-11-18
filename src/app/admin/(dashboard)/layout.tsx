import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Sidebar from "@/components/admin/Sidebar";

export const instant = false;

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="flex min-h-screen">
      <Sidebar adminName={session.name || session.email} />
      <main className="min-w-0 flex-1 p-8">{children}</main>
    </div>
  );
}
