"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AuthContext } from "@/components/AuthProvider";
import { auth } from "@/lib/firebaseClient"; // Firebase client

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { logInUser, signInWithGoogle, setUser } = useContext(AuthContext);

  // --- Set ID Token in Cookie ---
  const setTokenCookie = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const token = await user.getIdToken();

    document.cookie = `token=${token}; path=/; secure; samesite=lax`;
  };

  // --- Email/Password login ---
  const handelLogInUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await logInUser(email, password);
      await setTokenCookie(); // <-- set token after login

      toast.success("User logged in successfully!");
      router.push("/"); // redirect after login
    } catch (err) {
      setError(err.code);
      toast.error("Something went wrong!");
    }
  };

  // --- Google SignIn ---
  const handelGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);

      await setTokenCookie(); // <-- set token after Google login

      toast.success("Google login successful!");
      router.push("/");
    } catch (err) {
      setError(err.code);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="mt-2 min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-center text-4xl font-bold mb-4">Login Now!</h1>

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

            <button type="submit" className="btn btn-outline w-full mt-4">
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
              className="btn w-full btn-outline flex justify-center items-center"
            >
              <FcGoogle className="text-xl mr-2" />
              Continue with Google
            </button>

            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <Link href="/register" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
