import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson, toSlug } from "@/lib/api";
import { categorySchema } from "@/lib/validators";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const categories = await prisma.productCategory.findMany({
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      include: { _count: { select: { products: true } } },
    });
    return NextResponse.json({ categories });
  });
}

export async function POST(req: Request) {
  return guard(async () => {
    await requireAdmin();
    const { slug, ...data } = categorySchema.parse(await readJson(req));
    const category = await prisma.productCategory.create({
      data: { ...data, slug: slug ?? toSlug(data.name) },
    });
    return NextResponse.json({ category }, { status: 201 });
  });
}
