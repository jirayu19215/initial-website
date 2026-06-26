import { NextRequest, NextResponse } from 'next/server';

const CONTACT_SCRIPT_URL = process.env.CONTACT_APPS_SCRIPT_URL ?? process.env.APPS_SCRIPT_URL ?? '';

const VALID_SUBJECTS = ['sponsorship', 'partnership', 'recruitment', 'media', 'other'] as const;

// Simple in-memory rate limiter: 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const limit = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? stripHtml(body.name) : '';
  const email = typeof body.email === 'string' ? stripHtml(body.email) : '';
  const phone = typeof body.phone === 'string' ? stripHtml(body.phone) : '';
  const subject = typeof body.subject === 'string' ? body.subject : '';
  const message = typeof body.message === 'string' ? stripHtml(body.message) : '';

  if (!name || name.length > 100) {
    return NextResponse.json({ success: false, error: 'Name is required (max 100 chars).' }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 200) {
    return NextResponse.json({ success: false, error: 'Valid email is required.' }, { status: 400 });
  }
  if (phone && phone.length > 30) {
    return NextResponse.json({ success: false, error: 'Phone number is too long.' }, { status: 400 });
  }
  if (!VALID_SUBJECTS.includes(subject as typeof VALID_SUBJECTS[number])) {
    return NextResponse.json({ success: false, error: 'Invalid subject.' }, { status: 400 });
  }
  if (!message || message.length > 2000) {
    return NextResponse.json({ success: false, error: 'Message is required (max 2000 chars).' }, { status: 400 });
  }

  if (!CONTACT_SCRIPT_URL) {
    return NextResponse.json({ success: false, error: 'Contact form is not configured.' }, { status: 500 });
  }

  try {
    const payload = { type: 'contact', name, email, phone, subject, message };
    const res = await fetch(CONTACT_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    const text = await res.text();
    return NextResponse.json({ success: true, raw: text });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
