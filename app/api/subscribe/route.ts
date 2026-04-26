import { Resend } from "resend";
import { supabase } from "../../lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const { email, sendTips } = await req.json();

    if (!email) {
        return NextResponse.json(
            { error: "Email is required." },
            { status: 400 }
        );
    }

    // Save to Supabase
    const { error } = await supabase
        .from("subscribers")
        .insert({ email, send_tips: sendTips });

    if (error) {
        // Unique violation = already subscribed
        if (error.code === "23505") {
            return NextResponse.json(
                { error: "You're already subscribed!" },
                { status: 409 }
            );
        }
        return NextResponse.json(
            { error: "Something went wrong. Try again." },
            { status: 500 }
        );
    }

    // Send welcome email via Resend
    await resend.emails.send({
        from: "Trexpenser <hello@yourdomain.com>",
        to: email,
        subject: "Welcome to Trexpenser 🎉",
        html: `
      <h2>You're in Godwin!</h2>
      <p>Thanks for subscribing to TrExpenser. 
      We'll keep you posted on updates, tips, and new features.</p>
      <p>— The Trexpenser Team</p>
    `
    });

    return NextResponse.json({ success: true }, { status: 200 });
}
