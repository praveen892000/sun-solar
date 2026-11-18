import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { testimonialSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    const data = testimonialSchema.parse(await readJson(req));
    const testimonial = await prisma.testimonial.update({ where: { id }, data });
    return NextResponse.json({ testimonial });
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    await prisma.testimonial.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  });
}
