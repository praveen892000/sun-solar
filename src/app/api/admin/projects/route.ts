import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson, toSlug } from "@/lib/api";
import { projectSchema } from "@/lib/validators";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const projects = await prisma.project.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json({ projects });
  });
}

export async function POST(req: Request) {
  return guard(async () => {
    await requireAdmin();
    const { slug, ...data } = projectSchema.parse(await readJson(req));
    const project = await prisma.project.create({
      data: { ...data, slug: slug ?? toSlug(data.title) },
    });
    return NextResponse.json({ project }, { status: 201 });
  });
}
