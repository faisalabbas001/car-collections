import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const Login = () => {
  return (
    <ClerkProvider>
      <div className="text-white rounded-full p-2  font-bold mt-2 min-w-[80px] bg-blue-500 sm:bg-white sm:text-primary-blue">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </ClerkProvider>
  );
};

export default Login;
