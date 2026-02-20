import {NextResponse} from 'next/server';

// Simple in-memory rate limiting
const submissions = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 minute

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {email, phone} = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({error: 'Valid email required'}, {status: 400});
    }

    // Rate limit by email
    const lastSubmission = submissions.get(email);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
      return NextResponse.json({error: 'Too many requests'}, {status: 429});
    }
    submissions.set(email, Date.now());

    // Log submission (replace with Google Sheets API or database later)
    console.log('[Waitlist]', {
      email,
      phone: phone || null,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate Google Sheets API or Supabase for persistence
    // For now, log to console — visible in Vercel function logs

    return NextResponse.json({success: true});
  } catch {
    return NextResponse.json({error: 'Internal error'}, {status: 500});
  }
}
