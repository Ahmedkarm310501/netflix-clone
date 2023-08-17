"use client";
import Input from "@/components/Input";
import { useState } from "react";

type Props = {
  setActive: (active: string) => void;
};

const LoginForm = ({ setActive }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      {" "}
      <form className="flex flex-col gap-4">
        <h2 className="text-white text-4xl mb-8 font-semibold">Login</h2>
        <Input
          id="email"
          label="Email"
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <Input
          id="password"
          label="Password"
          onChange={(e: any) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button className="bg-red-600 py-3 text-white rounded-md w-full  hover:bg-red-700 transition">
          Login
        </button>
      </form>
      <p className="text-neutral-500 mt-12">
        First time using Netflix ?
        <span
          className="text-white hover:underline font-semibold cursor-pointer"
          onClick={() => {
            setActive("register");
          }}
        >
          {" "}
          Register now.
        </span>
      </p>
    </>
  );
};

export default LoginForm;
