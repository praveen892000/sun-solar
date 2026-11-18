import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { productSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    const { slug, ...data } = productSchema.parse(await readJson(req));
    const product = await prisma.product.update({
      where: { id },
      data: { ...data, ...(slug ? { slug } : {}) },
    });
    return NextResponse.json({ product });
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  });
}
