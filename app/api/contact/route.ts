import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { supabase } from "../../Services/Supabase";

const profileImage = `${supabaseUrl}/storage/v1/object/public/avatars//avatar.png`;

interface userSignUpProps {
  name: string;
  email: string;
  password: string;
}

export const userSignUp = async ({ name, email, password }: userSignUpProps) => {
  try {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          picture: profileImage,
          userName: name,
        },
      },
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
};
