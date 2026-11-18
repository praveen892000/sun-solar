import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { testimonialSchema } from "@/lib/validators";

export async function GET() {
  return guard(async () => {
    await requireAdmin();
    const testimonials = await prisma.testimonial.findMany({
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json({ testimonials });
  });
}

export async function POST(req: Request) {
  return guard(async () => {
    await requireAdmin();
    const data = testimonialSchema.parse(await readJson(req));
    const testimonial = await prisma.testimonial.create({ data });
    return NextResponse.json({ testimonial }, { status: 201 });
  });
}
