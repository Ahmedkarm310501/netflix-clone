"use client";
import { useState } from "react";
import Input from "@/components/Input";

type Props = {
  setActive: (active: string) => void;
};

const RegisterForm = ({ setActive }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      {" "}
      <form className="flex flex-col gap-4">
        <h2 className="text-white text-4xl mb-8 font-semibold">Register</h2>
        <Input
          id="userName"
          label="User Name"
          onChange={(e: any) => setName(e.target.value)}
          value={name}
          type="text"
        />
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
          Register
        </button>
      </form>
      <p className="text-neutral-500 mt-12">
        Already have an account ?
        <span
          className="text-white hover:underline font-semibold cursor-pointer"
          onClick={() => {
            setActive("login");
          }}
        >
          {" "}
          Login now.
        </span>
      </p>
    </>
  );
};

export default RegisterForm;
