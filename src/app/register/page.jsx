"use client";

import Link from "next/link";
import { useContext, useState } from "react";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function RegisterPage() {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Name validation
    if (name.length < 3) {
      setNameError("Name should be more than 3 characters.");
      return;
    } else {
      setNameError("");
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Enter a valid email.");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    const lowercase = /[a-z]/;


    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    } else if (!lowercase.test(password)) {
      setPasswordError("Password must contain a lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }

    // Firebase create user
    createUser(email, password)
     createUser(email, password)
  .then((result) => {
    setUser({ ...result.user, displayName: name, photoURL: photo });
    console.log(result);
    toast.success("User logged in successfully!");
    router.push("/");
  })
  .catch((err) => {
    console.log(err, "sob e vul");
    if (err.code === "auth/email-already-in-use") {
      toast.error("This email is already in use.");
    } else {
      toast.error(`Something went wrong! ${err.message}`);
    }
  });

  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      console.log("Google login success:", result.user);
      setUser(result.user);
      router.push("/");
    } catch (err) {
      console.log("Google login error:", err);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-1">
      <title>Register</title>
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold text-slate-800 dark:text-slate-100">Register Now!</h1>

        <div className="card bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm w-96 shadow-modern-lg border border-slate-200 dark:border-slate-700 rounded-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <label className="label">Your Name</label>
              <input name="name" type="text" className="input" />

              {nameError && <p className="text-red-500">{nameError}</p>}

              <label className="label">Photo URL</label>
              <input name="photo" type="text" className="input" />

              <label className="label">Email</label>
              <input name="email" type="email" className="input" />
              {emailError && <p className="text-red-500">{emailError}</p>}

              <label className="label">Password</label>
              <input name="password" type="password" className="input" />
              {passwordError && <p className="text-red-500">{passwordError}</p>}

              <button type="submit" className="btn mt-4 w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200">
                Register
              </button>

              <div className="divider">OR</div>

              <button
                type="button"
                onClick={handleGoogle}
                className="btn btn-outline w-full border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
              >
                <FcGoogle className="text-xl mr-2" />
                Continue with Google
              </button>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-colors" href="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
