"use client";

import { useState } from "react";

const budgetOptions = [
  "Not sure yet",
  "Under ₦300,000",
  "₦300,000 – ₦800,000",
  "₦800,000+",
];

const tierOptions = [
  "Brand Foundation",
  "Applied Creative",
  "Ongoing Partnership",
  "Not sure — let's talk",
];

export default function ProjectForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-oasis/30 bg-white/40 p-10 text-center">
        <p className="font-display text-2xl text-ink">Thanks — that's in.</p>
        <p className="mt-3 font-body text-ink/70">
          We'll get back to you within 2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      <div className="md:col-span-1">
        <label htmlFor="name" className="mb-2 block font-body text-sm text-ink/70">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="focus-ring w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-ink"
        />
      </div>

      <div className="md:col-span-1">
        <label htmlFor="email" className="mb-2 block font-body text-sm text-ink/70">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="focus-ring w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-ink"
        />
      </div>

      <div className="md:col-span-1">
        <label htmlFor="tier" className="mb-2 block font-body text-sm text-ink/70">
          What are you looking for?
        </label>
        <select
          id="tier"
          name="tier"
          className="focus-ring w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-ink"
        >
          {tierOptions.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="md:col-span-1">
        <label htmlFor="budget" className="mb-2 block font-body text-sm text-ink/70">
          Rough budget
        </label>
        <select
          id="budget"
          name="budget"
          className="focus-ring w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-ink"
        >
          {budgetOptions.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label htmlFor="details" className="mb-2 block font-body text-sm text-ink/70">
          Tell us about your brand and what you need
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className="focus-ring w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-ink"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring rounded-full bg-oak px-8 py-3 font-body text-sm font-medium text-sand transition hover:bg-teal disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send project details"}
        </button>
        {status === "error" && (
          <p className="mt-3 font-body text-sm text-red-700">
            Something went wrong — please email us directly instead.
          </p>
        )}
      </div>
    </form>
  );
}
