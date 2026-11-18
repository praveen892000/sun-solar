import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard } from "@/lib/api";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const pages = await prisma.page.findMany({ orderBy: { title: "asc" } });
    return NextResponse.json({ pages });
  });
}
