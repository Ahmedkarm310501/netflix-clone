"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type Props = {};

const AuthWrapper = (props: Props) => {
  const [isLogin, setIsLogin] = useState<string>("login");
  return (
    <>
      {isLogin === "login" ? (
        <LoginForm setActive={setIsLogin} />
      ) : (
        <RegisterForm setActive={setIsLogin} />
      )}
    </>
  );
};

export default AuthWrapper;
