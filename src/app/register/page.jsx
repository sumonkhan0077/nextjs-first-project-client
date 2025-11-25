"use client";

import Link from "next/link";
import { useContext, useState } from "react";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/AuthProvider";
import { FcGoogle } from "react-icons/fc";

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
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const special = /[!@#$%^&*]/;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    } else if (!uppercase.test(password)) {
      setPasswordError("Password must contain an uppercase letter.");
      return;
    } else if (!lowercase.test(password)) {
      setPasswordError("Password must contain a lowercase letter.");
      return;
    } else if (!special.test(password)) {
      setPasswordError("Password must contain a special character.");
      return;
    } else {
      setPasswordError("");
    }

    // Firebase create user
    createUser(email, password)
      .then((result) => {
        setUser({ ...result.user, displayName: name, photoURL: photo });

        // Redirect user
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-20">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Register Now!</h1>

        <div className="card bg-base-100 w-96 shadow-xl">
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

              <button type="submit" className="btn btn-outline mt-4 w-full">
                Register
              </button>

              <div className="divider">OR</div>

              <button
                type="button"
                onClick={handleGoogle}
                className="btn btn-outline w-full"
              >
                 <FcGoogle className="text-xl mr-2" />
                Continue with Google
              </button>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link className="text-blue-600" href="/login">
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
