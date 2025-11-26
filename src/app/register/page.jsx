"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebaseClient";

function RegisterPage() {
  const { createUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const router = useRouter();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // --- Set ID Token in Cookie ---
  const setTokenCookie = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const token = await user.getIdToken();
    document.cookie = `token=${token}; path=/; secure; samesite=lax`;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validation (same as before)
    if (name.length < 3) { setNameError("Name should be more than 3 characters."); return; } else { setNameError(""); }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) { setEmailError("Enter a valid email."); return; } else { setEmailError(""); }
    const lowercase = /[a-z]/;
    if (password.length < 6) { setPasswordError("Password must be at least 6 characters."); return; } 
    else if (!lowercase.test(password)) { setPasswordError("Password must contain a lowercase letter."); return; } 
    else { setPasswordError(""); }

    try {
      const result = await createUser(email, password);
      setUser({ ...result.user, displayName: name, photoURL: photo });

      // **Set token cookie after registration**
      await setTokenCookie();

      toast.success("User registered successfully!");
      router.push("/"); // redirect after registration
    } catch (err) {
      console.log(err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already in use.");
      } else {
        toast.error(`Something went wrong! ${err.message}`);
      }
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result.user);

      // **Set token cookie after Google login**
      await setTokenCookie();

      toast.success("Google login successful!");
      router.push("/");
    } catch (err) {
      console.log("Google login error:", err);
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-1">
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
