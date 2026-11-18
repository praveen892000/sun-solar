import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson, toSlug } from "@/lib/api";
import { productSchema } from "@/lib/validators";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const products = await prisma.product.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { category: { select: { id: true, name: true, slug: true } } },
    });
    return NextResponse.json({ products });
  });
}

export async function POST(req: Request) {
  return guard(async () => {
    await requireAdmin();
    const { slug, ...data } = productSchema.parse(await readJson(req));
    const product = await prisma.product.create({
      data: { ...data, slug: slug ?? toSlug(data.name) },
    });
    return NextResponse.json({ product }, { status: 201 });
  });
}
