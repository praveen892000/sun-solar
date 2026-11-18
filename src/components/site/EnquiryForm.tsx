"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type LookingFor = "Residential" | "Group Housing Society";

type FieldName =
  | "fullName"
  | "phone"
  | "email"
  | "ebConsumerNo"
  | "pincode"
  | "message";

type FieldErrors = Partial<Record<FieldName, string>>;

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type EnquiryFormProps = {
  /** Visual treatment: on light sections or on dark atmospheric backgrounds. */
  tone?: "light" | "dark";
  /** Stored with the enquiry so leads can be attributed (e.g. "home", "subsidy"). */
  source?: string;
  defaultLookingFor?: LookingFor;
  /** Phone number mentioned in the success message. */
  phone?: string;
  className?: string;
};

const OPTIONS: LookingFor[] = ["Residential", "Group Housing Society"];
const PHONE_PATTERN = /^\+?[\d\s-]{8,18}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PINCODE_PATTERN = /^\d{6}$/;

function validate(values: Record<FieldName, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!PHONE_PATTERN.test(values.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.ebConsumerNo.trim())
    errors.ebConsumerNo = "Please enter your EB consumer number.";
  if (!PINCODE_PATTERN.test(values.pincode.trim()))
    errors.pincode = "Enter your 6 digit pincode.";
  return errors;
}

export function EnquiryForm({
  tone = "light",
  source = "website",
  defaultLookingFor = "Residential",
  phone,
  className,
}: EnquiryFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [lookingFor, setLookingFor] = useState<LookingFor>(defaultLookingFor);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const dark = tone === "dark";
  const submitting = status.state === "submitting";
  const id = (name: string) => `${uid}-${name}`;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const data = new FormData(event.currentTarget);
    const read = (name: string) => String(data.get(name) ?? "");
    const values: Record<FieldName, string> = {
      fullName: read("fullName"),
      phone: read("phone"),
      email: read("email"),
      ebConsumerNo: read("ebConsumerNo"),
      pincode: read("pincode"),
      message: read("message"),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ state: "idle" });
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lookingFor,
          fullName: values.fullName.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          ebConsumerNo: values.ebConsumerNo.trim(),
          pincode: values.pincode.trim(),
          ...(values.message.trim() ? { message: values.message.trim() } : {}),
          source,
          website: read("website"),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
          fields?: Record<string, string>;
        } | null;
        if (body?.fields) {
          setErrors(body.fields as FieldErrors);
        }
        setStatus({
          state: "error",
          message: body?.fields
            ? "Please correct the highlighted fields."
            : body?.error && body.error !== "Internal server error"
              ? body.error
              : "We could not send your enquiry. Please try again or call us.",
        });
        return;
      }

      formRef.current?.reset();
      setLookingFor(defaultLookingFor);
      setErrors({});
      setStatus({ state: "success" });
    } catch {
      setStatus({
        state: "error",
        message: "Network problem. Please check your connection and try again.",
      });
    }
  }

  const labelClass = cn(
    "mb-1.5 block text-sm font-medium",
    dark ? "text-white/90" : "text-navy",
  );

  const errorText = (name: FieldName) =>
    errors[name] ? (
      <p
        id={id(`${name}-error`)}
        className={cn("mt-1 text-sm", dark ? "text-amber-200" : "text-red-700")}
      >
        {errors[name]}
      </p>
    ) : null;

  const fieldProps = (name: FieldName) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
    disabled: submitting,
  });

  if (status.state === "success") {
    return (
      <div
        role="status"
        className={cn(
          "rounded-2xl p-8 text-center",
          dark ? "bg-white/10 text-white" : "border border-line bg-white text-ink",
          className,
        )}
      >
        <CircleCheck className="mx-auto size-12 text-solar" aria-hidden="true" />
        <h3
          className={cn(
            "mt-4 font-display text-2xl font-semibold",
            dark ? "text-white" : "text-navy",
          )}
        >
          Thank you, we have your enquiry
        </h3>
        <p className={cn("mt-2", dark ? "text-white/80" : "text-muted")}>
          Our team will call you shortly to plan your site survey and check your subsidy
          eligibility.
          {phone ? ` For anything urgent, call ${phone}.` : ""}
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className={cn("btn mt-6", dark ? "btn-outline-light" : "btn-outline")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-label="Solar enquiry form"
      className={cn(
        "relative rounded-2xl p-6 sm:p-8",
        dark
          ? "bg-white/[0.07] ring-1 ring-white/15 backdrop-blur"
          : "border border-line bg-white shadow-[0_20px_50px_-30px_rgba(11,31,58,0.35)]",
        className,
      )}
    >
      <fieldset className="mb-5" disabled={submitting}>
        <legend className={labelClass}>I am looking for</legend>
        <div className="grid grid-cols-2 gap-2">
          {OPTIONS.map((option) => {
            const selected = lookingFor === option;
            return (
              <label
                key={option}
                className={cn(
                  "flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-colors focus-within:outline-3 focus-within:outline-solar",
                  selected
                    ? "border-solar bg-solar text-white"
                    : dark
                      ? "border-white/30 text-white/90 hover:border-white"
                      : "border-line text-navy hover:border-navy",
                )}
              >
                <input
                  type="radio"
                  name="lookingFor"
                  value={option}
                  checked={selected}
                  onChange={() => setLookingFor(option)}
                  className="sr-only"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={id("fullName")} className={labelClass}>
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("fullName")}
            type="text"
            autoComplete="name"
            required
            className="field"
            placeholder="Your full name"
          />
          {errorText("fullName")}
        </div>

        <div>
          <label htmlFor={id("phone")} className={labelClass}>
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            className="field"
            placeholder="+91 98765 43210"
          />
          {errorText("phone")}
        </div>

        <div>
          <label htmlFor={id("email")} className={labelClass}>
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            className="field"
            placeholder="you@example.com"
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor={id("ebConsumerNo")} className={labelClass}>
            EB consumer number <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("ebConsumerNo")}
            type="text"
            inputMode="numeric"
            required
            className="field"
            placeholder="From your electricity bill"
          />
          {errorText("ebConsumerNo")}
        </div>

        <div>
          <label htmlFor={id("pincode")} className={labelClass}>
            Pincode <span aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps("pincode")}
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={6}
            required
            className="field"
            placeholder="6 digit pincode"
          />
          {errorText("pincode")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className={labelClass}>
            Message <span className="font-normal opacity-70">(optional)</span>
          </label>
          <textarea
            {...fieldProps("message")}
            rows={3}
            maxLength={3000}
            className="field resize-y"
            placeholder="Roof size, monthly bill, or anything else we should know"
          />
          {errorText("message")}
        </div>
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Leave this field empty</label>
        <input
          id={id("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {status.state === "error" ? (
        <p
          role="alert"
          className={cn(
            "mt-5 rounded-lg px-4 py-3 text-sm",
            dark ? "bg-red-500/20 text-white" : "bg-red-50 text-red-800",
          )}
        >
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Request a free site survey
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p
        className={cn(
          "mt-3 text-center text-xs",
          dark ? "text-white/60" : "text-muted",
        )}
      >
        We use your details only to respond to this enquiry. Read our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
