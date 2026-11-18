import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { blogSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

export async function PUT(req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    const { slug, publishedAt, ...data } = blogSchema.parse(await readJson(req));
    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        ...data,
        ...(slug ? { slug } : {}),
        ...(publishedAt ? { publishedAt } : {}),
      },
    });
    return NextResponse.json({ post });
  });
}

export async function DELETE(_req: Request, { params }: Ctx) {
  return guard(async () => {
    await requireAdmin();
    const { id } = await params;
    await prisma.blogPost.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  });
}
