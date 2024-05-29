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
    
    <button className="text-white rounded-full p-2 font-bold mt-2 min-w-[130px]  bg-blue-500 sm:bg-white sm:text-primary-blue">
    <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
  </button>
  </ClerkProvider>
  );
};

export default Login;

