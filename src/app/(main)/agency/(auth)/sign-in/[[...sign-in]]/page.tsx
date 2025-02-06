"use client";

import {SignIn} from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "w-full max-w-md",
          },
        }}
        fallbackRedirectUrl="/dashboard"
        signUpUrl="/agency/sign-up"
      />
    </div>
  );
};

export default Page;
