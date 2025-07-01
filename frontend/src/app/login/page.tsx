"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.email === "minhajap00@gmail.com") {
      router.push("/admin");
    }
  }, [session, router]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 flex flex-col items-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Welcome Back
        </h1>
        <p className="mb-8 text-gray-500 dark:text-gray-400 text-center">
          Sign in to your account using Google to continue.
        </p>
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition font-semibold text-lg"
        >
          <FaGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
