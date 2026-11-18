import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { guard, readJson } from "@/lib/api";
import { enquirySchema } from "@/lib/validators";

// Public endpoint: website lead / contact form submissions.
export async function POST(req: Request) {
  return guard(async () => {
    const { website, ...data } = enquirySchema.parse(await readJson(req));

    // Honeypot tripped: pretend success, store nothing.
    if (website) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    const enquiry = await prisma.enquiry.create({ data });
    return NextResponse.json({ ok: true, id: enquiry.id }, { status: 201 });
  });
}
