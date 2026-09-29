"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

const capitalNeeds = [
  "Business valuation",
  "Fundraising readiness",
  "Capital structuring",
  "Entity structuring",
  "Cross-border advisory",
  "Governance and succession",
];

type Values = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  capitalNeed: string;
  context: string;
};

type Field = "name" | "email" | "phone";

const initialValues: Values = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  capitalNeed: capitalNeeds[0],
  context: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Values): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name looks too short.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.phone) errors.phone = "Please enter your phone number.";
  else if (!isValidPhoneNumber(values.phone))
    errors.phone = "Please enter a valid phone number.";

  return errors;
}

const fieldClass =
  "rounded-sm border border-white/10 bg-[#1A2334] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#848EA3] focus:border-[#cba64b]/50";
const labelClass = "text-[14px] font-normal leading-5 text-[#A5ADBC]";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = validate(values);
  const showError = (field: Field) => (touched[field] || attempted) && errors[field];

  const update = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);

    if (Object.keys(errors).length > 0) return;

    // TODO: send `values` to the enquiry API once it is available.
    setValues(initialValues);
    setTouched({});
    setAttempted(false);
    setSent(true);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-sm border border-white/10 bg-[#1F293D] p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            Your Name <span className="text-[#CBA64B]">*</span>
          </span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="John Doe"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            aria-invalid={Boolean(showError("name"))}
            aria-describedby={showError("name") ? "name-error" : undefined}
            className={cn(fieldClass, showError("name") && "border-red-400/70")}
          />
          {showError("name") && (
            <span id="name-error" className="text-[13px] leading-5 text-red-300">
              {errors.name}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>Business Name</span>
          <input
            type="text"
            name="businessName"
            autoComplete="organization"
            placeholder="Choose one..."
            value={values.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass}>
            Email <span className="text-[#CBA64B]">*</span>
          </span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="johndoe@testmail.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            aria-invalid={Boolean(showError("email"))}
            aria-describedby={showError("email") ? "email-error" : undefined}
            className={cn(fieldClass, showError("email") && "border-red-400/70")}
          />
          {showError("email") && (
            <span id="email-error" className="text-[13px] leading-5 text-red-300">
              {errors.email}
            </span>
          )}
        </label>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-[#CBA64B]">*</span>
          </label>
          <PhoneInput
            id="phone"
            name="phone"
            defaultCountry="IN"
            international
            countryCallingCodeEditable={false}
            placeholder="99951 23456"
            value={values.phone || undefined}
            onChange={(value) => update("phone", value ?? "")}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            aria-invalid={Boolean(showError("phone"))}
            aria-describedby={showError("phone") ? "phone-error" : undefined}
            className={cn(
              "contact-phone-input",
              fieldClass,
              "flex items-center gap-3 focus-within:border-[#cba64b]/50",
              showError("phone") && "border-red-400/70",
            )}
          />
          {showError("phone") && (
            <span id="phone-error" className="text-[13px] leading-5 text-red-300">
              {errors.phone}
            </span>
          )}
        </div>

        <label className="flex flex-col gap-2 md:col-span-2">
          <span className={labelClass}>Capital Need</span>
          <select
            name="capitalNeed"
            value={values.capitalNeed}
            onChange={(e) => update("capitalNeed", e.target.value)}
            className={fieldClass}
          >
            {capitalNeeds.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 md:col-span-2">
          <span className={labelClass}>Context</span>
          <textarea
            name="context"
            rows={4}
            placeholder="A short note about your current situation"
            value={values.context}
            onChange={(e) => update("context", e.target.value)}
            className={cn(fieldClass, "resize-none")}
          />
        </label>
      </div>

      {sent && (
        <p role="status" className="mt-6 text-[14px] leading-5 text-[#DFD18D]">
          Thank you! Your enquiry has been noted. We&apos;ll get back to you shortly.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <button
          type="submit"
          className="rounded-sm bg-[linear-gradient(90deg,#DFD18D_0%,#CBA64B_50%,#8A5923_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        >
          Send Enquiry
        </button>
        <Link
          href="mailto:info@capitaire.com"
          className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/5"
        >
          Email Directly
        </Link>
      </div>
    </form>
  );
}
