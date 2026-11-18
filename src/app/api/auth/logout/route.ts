import { NextResponse } from "next/server";
import { logoutAdmin } from "@/lib/auth";
import { guard } from "@/lib/api";

export async function POST() {
  return guard(async () => {
    await logoutAdmin();
    return NextResponse.json({ ok: true });
  });
}
