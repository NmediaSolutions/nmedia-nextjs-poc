"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { formLabels } from "@/content/nav";
import Recaptcha from "./Recaptcha";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;

export default function ContactForm({ locale, confirmationHref }: { locale: Locale; confirmationHref: string }) {
  const labels = formLabels[locale];
  const router = useRouter();

  const [requestType, setRequestType] = useState(labels.reasons[0].value);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [values, setValues] = useState({
    service: "",
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
    email: "",
    message: "",
    declaration: false,
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const isProject = requestType === "project";
  const messageLabels = isProject ? labels.messageProject : labels.messageQuestion;

  const selectedReason = useMemo(
    () => labels.reasons.find((r) => r.value === requestType) ?? labels.reasons[0],
    [labels.reasons, requestType]
  );

  function validate() {
    const nextErrors: Record<string, boolean> = {
      firstName: !values.firstName,
      lastName: !values.lastName,
      phone: !values.phone || !PHONE_REGEX.test(values.phone),
      email: !values.email || !EMAIL_REGEX.test(values.email),
      declaration: !values.declaration,
      service: isProject && !values.service,
    };
    setErrors(nextErrors);
    return !Object.values(nextErrors).some(Boolean) && !!captchaToken;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setSubmitting(true);
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_page_nousjoindre", form_name: "formulaire_contact" });

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType,
          service: values.service,
          firstName: values.firstName,
          lastName: values.lastName,
          businessName: values.businessName,
          phone: values.phone,
          email: values.email,
          message: values.message,
          notifyEmail: selectedReason.email,
          reasonLabel: selectedReason.label,
          captchaToken,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      router.push(confirmationHref);
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmitError(
        locale === "fr"
          ? "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone."
          : "An error occurred. Please try again or contact us by phone."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function restrictPhone(value: string) {
    return value.replace(/[^0-9() -]/g, "");
  }

  return (
    <form className="bg-beige rounded-md p-24 tablet:p-16 space-y-24" onSubmit={handleSubmit}>
      <fieldset className="border-0 p-0 m-0">
        <legend className="font-semibold mb-12">{labels.why}</legend>
        <div className="flex flex-col gap-8">
          {labels.reasons.map((option) => (
            <label key={option.value} className="flex items-center gap-8 cursor-pointer">
              <input
                type="radio"
                name="requestType"
                value={option.value}
                checked={requestType === option.value}
                onChange={() => setRequestType(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {isProject && (
        <div>
          <label className="block font-semibold mb-8" htmlFor="service">
            {labels.service.label}
          </label>
          <select
            id="service"
            className={`w-full border rounded p-12 ${errors.service ? "border-error" : "border-border"}`}
            value={values.service}
            onChange={(e) => setValues((v) => ({ ...v, service: e.target.value }))}
          >
            <option value="" disabled>
              {labels.service.placeholder}
            </option>
            {labels.service.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.service && <span className="text-error text-14">{labels.requiredField}</span>}
        </div>
      )}

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16">
        <div>
          <label className="block font-semibold mb-8" htmlFor="firstName">
            {labels.firstName.label}*
          </label>
          <input
            id="firstName"
            type="text"
            maxLength={50}
            autoComplete="given-name"
            placeholder={labels.firstName.placeholder}
            className={`w-full border rounded p-12 ${errors.firstName ? "border-error" : "border-border"}`}
            value={values.firstName}
            onChange={(e) => setValues((v) => ({ ...v, firstName: e.target.value }))}
          />
          {errors.firstName && <span className="text-error text-14">{labels.requiredField}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-8" htmlFor="lastName">
            {labels.lastName.label}*
          </label>
          <input
            id="lastName"
            type="text"
            maxLength={50}
            autoComplete="family-name"
            placeholder={labels.lastName.placeholder}
            className={`w-full border rounded p-12 ${errors.lastName ? "border-error" : "border-border"}`}
            value={values.lastName}
            onChange={(e) => setValues((v) => ({ ...v, lastName: e.target.value }))}
          />
          {errors.lastName && <span className="text-error text-14">{labels.requiredField}</span>}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-8" htmlFor="businessName">
          {labels.businessName.label}
        </label>
        <input
          id="businessName"
          type="text"
          placeholder={labels.businessName.placeholder}
          className="w-full border border-border rounded p-12"
          value={values.businessName}
          onChange={(e) => setValues((v) => ({ ...v, businessName: e.target.value }))}
        />
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16">
        <div>
          <label className="block font-semibold mb-8" htmlFor="phone">
            {labels.phone.label}*
          </label>
          <input
            id="phone"
            type="tel"
            maxLength={16}
            minLength={7}
            autoComplete="tel"
            placeholder={labels.phone.placeholder}
            className={`w-full border rounded p-12 ${errors.phone ? "border-error" : "border-border"}`}
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: restrictPhone(e.target.value) }))}
          />
          {errors.phone && <span className="text-error text-14">{labels.requiredField}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-8" htmlFor="email">
            {labels.email.label}*
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={labels.email.placeholder}
            className={`w-full border rounded p-12 ${errors.email ? "border-error" : "border-border"}`}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
          {errors.email && <span className="text-error text-14">{labels.requiredField}</span>}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-8" htmlFor="message">
          {messageLabels.label}
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={messageLabels.placeholder}
          className="w-full border border-border rounded p-12"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        />
      </div>

      <div>
        <label className="flex items-start gap-8 cursor-pointer">
          <input
            type="checkbox"
            className="mt-4"
            checked={values.declaration}
            onChange={(e) => setValues((v) => ({ ...v, declaration: e.target.checked }))}
          />
          <span className="text-14">
            {labels.declarationPrefix}{" "}
            <a href={labels.declarationHref}>{labels.declarationLinkText}</a>.*
          </span>
        </label>
        {errors.declaration && <span className="text-error text-14 block">{labels.requiredField}</span>}
      </div>

      <Recaptcha onVerify={setCaptchaToken} onExpire={() => setCaptchaToken(null)} />

      {submitError && <p className="text-error">{submitError}</p>}

      <button type="submit" className="btn-primary" disabled={submitting}>
        {submitting ? "…" : labels.submit}
      </button>
    </form>
  );
}
