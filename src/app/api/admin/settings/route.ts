import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { settingsSchema } from "@/lib/validators";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const settings = await prisma.siteSetting.findUnique({
      where: { id: "main" },
    });
    return NextResponse.json({ settings });
  });
}

export async function PUT(req: Request) {
  return guard(async () => {
    await requireAdmin();
    const data = settingsSchema.parse(await readJson(req));
    const settings = await prisma.siteSetting.upsert({
      where: { id: "main" },
      update: data,
      create: { id: "main", ...data },
    });
    return NextResponse.json({ settings });
  });
}
