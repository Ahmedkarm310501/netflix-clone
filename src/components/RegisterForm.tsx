"use client";
import { useCallback, useState } from "react";
import axios, { AxiosError } from "axios";
import Input from "@/components/Input";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
type Props = {
  setActive: (active: string) => void;
};

const RegisterForm = ({ setActive }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = useCallback(async () => {
    try {
      const res = await axios.post("/api/auth/register", {
        email,
        name,
        password,
      });
      if (res.status === 201) {
        toast.success("Account created successfully, please login", {
          duration: 4000,
        });
        setActive("login");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error("Email already exists", {
            duration: 3000,
          });
        }
      }
    }
  }, [email, name, password]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    register();
  };

  return (
    <>
      {" "}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FcGoogle size={32} />
          </div>
          <div
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FaGithub size={32} />
          </div>
        </div>
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
