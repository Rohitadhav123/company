import { NextResponse } from "next/server";
import { sql, initDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, description } = body;

    // Validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || !description.trim()) {
      return NextResponse.json(
        { success: false, error: "Project description is required." },
        { status: 400 }
      );
    }

    // Ensure database table exists
    await initDb();

    // Insert record into PostgreSQL
    const inserted = await sql`
      INSERT INTO contact_submissions (
        name,
        email,
        company,
        service,
        budget,
        description
      )
      VALUES (
        ${name.trim()},
        ${email.trim()},
        ${company ? company.trim() : null},
        ${service ? service.trim() : "Website Development"},
        ${budget ? budget.trim() : null},
        ${description.trim()}
      )
      RETURNING id, created_at;
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been submitted successfully! We'll get back to you within 24 hours.",
        data: {
          id: inserted[0]?.id,
          createdAt: inserted[0]?.created_at,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Failed to submit contact enquiry:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit enquiry. Please try again or reach out directly.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Contact API",
    timestamp: new Date().toISOString(),
  });
}
