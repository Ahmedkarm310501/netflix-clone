"use client";

import { signOut } from "next-auth/react";

type Props = {};

const SignoutButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      sign out
    </button>
  );
};

export default SignoutButton;
