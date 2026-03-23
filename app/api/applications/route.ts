import { NextRequest, NextResponse } from "next/server";
import { createServerSupabase } from "../../lib/supabase/server";

const allowedEmploymentStatuses = [
  "employed",
  "self-employed",
  "freelancer",
  "student",
  "unemployed",
  "other",
] as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const full_name = String(body.full_name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const phone = String(body.phone ?? "").trim();
    const city = String(body.city ?? "").trim();
    const purpose = String(body.purpose ?? "").trim();
    const message = String(body.message ?? "").trim();

    const loan_amount = Number(body.loan_amount ?? 0);

    const monthly_income =
      body.monthly_income === undefined ||
      body.monthly_income === null ||
      body.monthly_income === ""
        ? null
        : Number(body.monthly_income);

    const accepted_terms = Boolean(body.accepted_terms);

    const employment_status = allowedEmploymentStatuses.includes(
      body.employment_status
    )
      ? body.employment_status
      : "other";

    if (!full_name || !email || !phone || !city || !purpose) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(loan_amount) || loan_amount <= 0) {
      return NextResponse.json(
        { error: "Please enter a valid loan amount." },
        { status: 400 }
      );
    }

    if (
      monthly_income !== null &&
      (!Number.isFinite(monthly_income) || monthly_income < 0)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid monthly income." },
        { status: 400 }
      );
    }

    if (!accepted_terms) {
      return NextResponse.json(
        { error: "You must agree before submitting." },
        { status: 400 }
      );
    }

    const supabase = createServerSupabase();

    const { error } = await supabase.from("loan_applications").insert({
      full_name,
      email,
      phone,
      city,
      loan_amount,
      purpose,
      monthly_income,
      employment_status,
      message,
      accepted_terms,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save the application." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Application submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting the application." },
      { status: 500 }
    );
  }
}