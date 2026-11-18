import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Required with nextConfig.cacheComponents so this probe can hit the database.
export const instant = false;

/** Lightweight readiness probe for Render health checks. */
export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, db: "up" });
  } catch {
    return NextResponse.json({ ok: false, db: "down" }, { status: 503 });
  }
}
