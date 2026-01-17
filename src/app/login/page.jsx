"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "@/components/AuthProvider";

export default function Login() {
  const [error, setError] = useState("");

 
  const { logInUser, signInWithGoogle, setUser } = useContext(AuthContext);

  const handelLogInUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await logInUser(email, password);
      toast.success("User logged in successfully!");

      router.push("/"); // Next.js route redirect
    } catch (err) {
      setError(err.code);
      toast.error("Something went wrong!");
    }
  };

  const handelGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);

      toast.success("Google login successful!");
      router.push("/");
    } catch (err) {
      setError(err.code);
    }
  };

  return (
    <div className="mt-2 min-h-screen flex items-center justify-center">
      <title>LogIn</title>
      <div className="card bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-full max-w-sm shadow-modern-lg p-6 border border-slate-200 dark:border-slate-700 rounded-2xl">
        <h1 className="text-center text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Login Now!</h1>

        <form onSubmit={handelLogInUser}>
          <fieldset className="fieldset space-y-3">
            <div>
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button type="submit" className="btn w-full mt-4 bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200">
              Login
            </button>

            <div className="flex items-center my-2">
              <span className="flex-1 h-0.5 bg-gray-300"></span>
              <span className="px-2 text-sm">OR</span>
              <span className="flex-1 h-0.5 bg-gray-300"></span>
            </div>

            <button
              type="button"
              onClick={handelGoogleSignIn}
              className="btn w-full btn-outline flex justify-center items-center border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <FcGoogle className="text-xl mr-2" />
              Continue with Google
            </button>

            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link href="/register" className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                Sign up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
