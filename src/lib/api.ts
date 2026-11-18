import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import slugify from "slugify";
import { UnauthorizedError } from "@/lib/auth";

export class BadRequestError extends Error {
  constructor(message = "Bad request") {
    super(message);
    this.name = "BadRequestError";
  }
}

export class NotFoundError extends Error {
  constructor(message = "Not found") {
    super(message);
    this.name = "NotFoundError";
  }
}

export function toSlug(value: string): string {
  return slugify(value, { lower: true, strict: true, trim: true });
}

export async function readJson(req: Request): Promise<unknown> {
  try {
    return await req.json();
  } catch {
    throw new BadRequestError("Request body must be valid JSON");
  }
}

/**
 * Wrap a route handler body and translate common errors into JSON responses:
 * 401 (not signed in), 400 (validation), 404 (missing record), 409 (unique conflict).
 */
export async function guard(fn: () => Promise<Response>): Promise<Response> {
  try {
    return await fn();
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (err instanceof ZodError) {
      const fields: Record<string, string> = {};
      for (const issue of err.issues) {
        const key = issue.path.join(".") || "_";
        fields[key] ??= issue.message;
      }
      return NextResponse.json(
        { error: "Validation failed", fields },
        { status: 400 },
      );
    }
    if (err instanceof BadRequestError) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    if (err instanceof NotFoundError) {
      return NextResponse.json({ error: err.message }, { status: 404 });
    }
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        const target = (err.meta?.target as string[] | string | undefined) ?? "";
        const field = Array.isArray(target) ? target.join(", ") : target;
        return NextResponse.json(
          { error: `A record with this ${field || "value"} already exists` },
          { status: 409 },
        );
      }
      if (err.code === "P2025") {
        return NextResponse.json({ error: "Record not found" }, { status: 404 });
      }
      if (err.code === "P2003") {
        return NextResponse.json(
          { error: "This record is referenced by other records" },
          { status: 409 },
        );
      }
    }
    console.error("[api] unexpected error", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
