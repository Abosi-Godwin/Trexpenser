"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Input from "../components/Input";
import Button from "../components/Button";
import GoogleBtn from "../components/GoogleBtn";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hidePassword, setHidePassword] = useState(true);
  const [remember, setRemember] = useState(true);

  const handleLogin = () => {};

  const handleHidePassword = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <div
      className="bg-light-sectionBackground flex items-center justify-center
    h-screen max-h-dvh w-screen overflow-hidden pt-20"
    >
      <div className="p-4 rounded-md bg-white hadow-md shadow-color-2">
        <div className="py-4">
          <h1 className="font-extrabold text-2xl capitalize">Sign into your account</h1>
        </div>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-3 py-3">
            <Input
              label="email"
              inputType="email"
              placeholder="Enter your email..."
              className="p-3 rounded-md outline-0 border"
            />

            <Input
              inputType={hidePassword ? "password" : "text"}
              placeholder="Enter your password..."
              label="password"
              className="p-3 rounded-md outline-0 border"
              onHidePassword={handleHidePassword}
              toggle={hidePassword}
            />

            <Button
              text="Login"
              type="submit"
              className="bg-light-primaryCTA text-white font-extrabold
                            rounded-md p-2 uppercase w-full flex items-center
                            justify-center"
            />
          </div>
          <div className="flex justify-between py-2">
            <div className="flex gap-2 font-bold">
              <input
                type="checkbox"
                name="remember"
              />
              <p>Remember me</p>
            </div>
            <Link href="/forgotPassword">
              <h1 className="">Lost password?</h1>
            </Link>
          </div>
        </form>
        <div className="py-4 flex flex-col gap-3">
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
          <GoogleBtn />
          <div className="flex gap-5 items-center">
            <p>Not a member yet?</p>
            <Link
              href="/signup"
              className="text-light-primaryCTA font-bold"
            >
              Join us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
