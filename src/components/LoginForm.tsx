"use client";
import Input from "@/components/Input";
import { useState, useCallback } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type Props = {
  setActive: (active: string) => void;
};

const LoginForm = ({ setActive }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const login = useCallback(async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (res?.error) {
        toast.error(res.error, {
          duration: 4000,
        });
        return;
      }
      toast.success("Logged in successfully", {
        duration: 4000,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      {" "}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
