"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function GoogleLoginButton() {
  return (
    <button
      className="w-full rounded-lg bg-stone-600 p-2 text-white"
      onClick={async () => {
        await signIn("google");
      }}
    >
      Sign in with Google
    </button>
  );
}

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      className="w-full rounded-lg bg-stone-600 p-2 text-white"
      onClick={async () => {
        await signOut();
        router.push("/login");
      }}
    >
      Logout
    </button>
  );
}
