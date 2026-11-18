import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export const SESSION_COOKIE = "sss_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export type AdminSession = {
  adminId: string;
  email: string;
  name: string;
};

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

function getSecret(): Uint8Array {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_JWT_SECRET is missing or too short (min 32 characters). Set it in .env.",
    );
  }
  return new TextEncoder().encode(secret);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Used to keep login timing similar when the email does not exist.
let dummyHashPromise: Promise<string> | null = null;
function getDummyHash(): Promise<string> {
  dummyHashPromise ??= bcrypt.hash("not-a-real-password", 12);
  return dummyHashPromise;
}

async function signToken(session: AdminSession): Promise<string> {
  return new SignJWT({ email: session.email, name: session.name })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(session.adminId)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getSecret());
}

/** Validate credentials and set the session cookie. Returns the session or null. */
export async function loginAdmin(
  email: string,
  password: string,
): Promise<AdminSession | null> {
  const admin = await prisma.admin.findUnique({
    where: { email: email.trim().toLowerCase() },
  });

  const ok = await verifyPassword(
    password,
    admin?.passwordHash ?? (await getDummyHash()),
  );
  if (!admin || !ok) return null;

  const session: AdminSession = {
    adminId: admin.id,
    email: admin.email,
    name: admin.name,
  };
  const token = await signToken(session);

  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  return session;
}

export async function logoutAdmin(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

/** Read and verify the session cookie. Returns null when absent/invalid/expired. */
export async function getSession(): Promise<AdminSession | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret(), {
      algorithms: ["HS256"],
    });
    if (!payload.sub) return null;
    return {
      adminId: payload.sub,
      email: String(payload.email ?? ""),
      name: String(payload.name ?? ""),
    };
  } catch {
    return null;
  }
}

/** For API routes / server actions: throws UnauthorizedError when not signed in. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getSession();
  if (!session) throw new UnauthorizedError();
  return session;
}
