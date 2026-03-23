"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  city: string;
  loan_amount: string;
  purpose: string;
  monthly_income: string;
  employment_status: string;
  message: string;
  accepted_terms: boolean;
};

const initialState: FormState = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  loan_amount: "",
  purpose: "",
  monthly_income: "",
  employment_status: "employed",
  message: "",
  accepted_terms: false,
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFeedback("");
    setIsError(false);

    try {
      const payload = {
        ...form,
        loan_amount: Number(form.loan_amount),
        monthly_income: form.monthly_income
          ? Number(form.monthly_income)
          : null,
      };

      const res = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setForm(initialState);
      setFeedback("Your application has been submitted successfully.");
      setIsError(false);
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] lg:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Apply for Loan
        </p>
        <h3 className="mt-2 text-3xl font-bold text-black">
          Start your application
        </h3>
        <p className="mt-2 text-sm leading-6 text-black/65">
          Fill out your details and our team will review your request.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          placeholder="Full name"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
          required
        />
        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City / Location"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
          required
        />
        <input
          name="loan_amount"
          type="number"
          value={form.loan_amount}
          onChange={handleChange}
          placeholder="Requested amount"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
          required
        />
        <input
          name="monthly_income"
          type="number"
          value={form.monthly_income}
          onChange={handleChange}
          placeholder="Monthly income (optional)"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
        />
        <select
          name="employment_status"
          value={form.employment_status}
          onChange={handleChange}
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
        >
          <option value="employed">Employed</option>
          <option value="self-employed">Self-employed</option>
          <option value="freelancer">Freelancer</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
          <option value="other">Other</option>
        </select>
        <input
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          placeholder="Purpose of loan"
          className="rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Additional notes"
          rows={5}
          className="md:col-span-2 rounded-2xl border border-black/10 px-4 py-3 outline-none ring-0 focus:border-emerald-500"
        />

        <label className="md:col-span-2 flex items-start gap-3 rounded-2xl border border-black/10 bg-emerald-50/60 p-4 text-sm text-black/70">
          <input
            name="accepted_terms"
            type="checkbox"
            checked={form.accepted_terms}
            onChange={handleChange}
            className="mt-1"
          />
          <span>
            I confirm that the information I provided is accurate and I agree
            to be contacted regarding this application.
          </span>
        </label>

        <div className="md:col-span-2 flex flex-col gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-black px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {feedback ? (
            <p
              className={`text-sm font-medium ${
                isError ? "text-red-600" : "text-emerald-700"
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}