import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import LoginForm from "./LoginForm";

export const instant = false;

export default async function AdminLoginPage() {
  if (await getSession()) redirect("/admin");

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-900">Sri Sun Solar</h1>
        <p className="mb-6 mt-1 text-sm text-slate-500">Sign in to the admin panel</p>
        <LoginForm />
      </div>
    </main>
  );
}
