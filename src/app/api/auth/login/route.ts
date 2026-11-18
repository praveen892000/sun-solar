import { NextResponse } from "next/server";
import { loginAdmin } from "@/lib/auth";
import { guard, readJson } from "@/lib/api";
import { loginSchema } from "@/lib/validators";

export async function POST(req: Request) {
  return guard(async () => {
    const { email, password } = loginSchema.parse(await readJson(req));
    const session = await loginAdmin(email, password);
    if (!session) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 },
      );
    }
    return NextResponse.json({
      admin: { id: session.adminId, email: session.email, name: session.name },
    });
  });
}
