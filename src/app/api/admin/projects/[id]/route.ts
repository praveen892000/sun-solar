import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { projectSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    const { slug, ...data } = projectSchema.parse(await readJson(req));
    const project = await prisma.project.update({
      where: { id },
      data: { ...data, ...(slug ? { slug } : {}) },
    });
    return NextResponse.json({ project });
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  });
}
