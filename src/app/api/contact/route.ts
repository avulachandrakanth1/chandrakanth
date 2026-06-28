import { NextResponse } from "next/server";

import { profile } from "@/constants/profile";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

function validatePayload(body: ContactPayload): string | null {
  if (!body.name?.trim()) return "Name is required";
  if (!body.email?.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return "Enter a valid email address";
  }
  if (!body.message?.trim()) return "Message is required";
  if (body.message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const validationError = validatePayload(body);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: body.name?.trim(),
          email: body.email?.trim(),
          message: body.message?.trim(),
          _subject: `Portfolio inquiry from ${body.name?.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "Unable to send message right now." },
        { status: 502 },
      );
    }

    const result = (await response.json()) as { success?: string };

    if (result.success !== "true") {
      return NextResponse.json(
        { ok: false, error: "Message could not be delivered." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
