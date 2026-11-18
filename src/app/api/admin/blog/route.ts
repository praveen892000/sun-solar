import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson, toSlug } from "@/lib/api";
import { blogSchema } from "@/lib/validators";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const posts = await prisma.blogPost.findMany({
      orderBy: { publishedAt: "desc" },
    });
    return NextResponse.json({ posts });
  });
}

export async function POST(req: Request) {
  return guard(async () => {
    await requireAdmin();
    const { slug, publishedAt, ...data } = blogSchema.parse(await readJson(req));
    const post = await prisma.blogPost.create({
      data: {
        ...data,
        slug: slug ?? toSlug(data.title),
        ...(publishedAt ? { publishedAt } : {}),
      },
    });
    return NextResponse.json({ post }, { status: 201 });
  });
}
