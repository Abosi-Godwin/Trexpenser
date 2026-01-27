"use client";

import { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";

import Button from "../components/Button";
import GoogleBtn from "../components/GoogleBtn";
import Input from "../components/Input";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };

  const submitFunc = () => {
    
  };

  const handleGoogleAut = () => {};

  return (
    <div
      className="bg-light-sectionBackground flex py-6 items-center justify-center h-screen
            max-h-dvh w-screen text-light-text overflow-hidden pt-20"
    >
      <div className="p-4 rounded-md bg-white hadow-md shadow-color-2">
        <div className="py-4">
          <h1 className="font-extrabold text-2xl">Sign-up for an account</h1>
        </div>

        <form onSubmit={handleSubmit(submitFunc)}>
          <div className="flex flex-col gap-1 py-3">
            <Input
              label="name"
              inputType="text"
              disable={false}
              placeholder="Enter your username..."
              className="p-3 rounded-md outline-0 border"
            />

            <Input
              inputType="email"
              placeholder="Enter your email..."
              label="email"
              className="p-3 rounded-md outline-0 border"
            />

            <Input
              inputType={hidePassword ? "password" : "text"}
              placeholder="Enter your password..."
              label="password"
              className="p-3 rounded-md outline-0 border"
              disable={false}
              onHidePassword={handleHidePassword}
              toggle={hidePassword}
            />
          </div>

          <div className="py-2 flex flex-col gap-3">
            <Button
              text="Sign up"
              type="submit"
              loading={false}
            />

            <div
              className="flex gap-3 items-center justify-between
                        "
            >
              <div
                className="h-0.5 rounded-md w-20
                            bg-light-dividers"
              ></div>
              <h1>OR</h1>{" "}
              <div
                className="h-0.5 rounded-md w-20
                            bg-light-dividers"
              ></div>
            </div>

            <GoogleBtn handleSignUp={handleGoogleAut} />

            <div className="flex items-center gap-3">
              <p>Already a member?</p>
              <Link
                href="/login"
                className="text-light-primaryCTA font-bold"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
