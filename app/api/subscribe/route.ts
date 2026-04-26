import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const { email, sendTips } = await req.json();

    if (!email) {
        return NextResponse.json(
            { error: "Email is required." },
            { status: 400 }
        );
    }

    const { error } = await supabase
        .from("subscribers")
        .insert({ email, send_tips: sendTips });

    if (error) {
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

    await resend.emails.send({
        from: "TrExpenser <hello@yourdomain.com>",
        to: email,
        subject: "Welcome to TrExpenser 🎉",
        html: `
      <h2>You're in!</h2>
      <p>Thanks for subscribing to TrExpenser.
      We'll keep you posted on updates, tips, and new features.</p>
      <p>— The TrExpenser Team</p>
    `
    });

    return NextResponse.json({ success: true }, { status: 200 });
}
