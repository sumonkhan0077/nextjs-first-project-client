"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import EliteTimeLogo from "./LogoText";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { TbLogin2, TbLogout } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  const { user, logOut } = useContext(AuthContext);

  const activeClass = "underline underline-offset-4 text-[#a89141]";

  const items = (
    <>
      <li>
        {" "}
        <Link href="/" className={pathname === "/" ? activeClass : ""}>
          Home
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/products"
          className={pathname === "/products" ? activeClass : ""}
        >
          Products
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/add_products"
          className={pathname === "/add_products" ? activeClass : ""}
        >
          Add Products
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/login"
          className={pathname === "/login" ? activeClass : ""}
        >
          login
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/about"
          className={pathname === "/about" ? activeClass : ""}
        >
          About & Contact
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link
          href="/register"
          className={pathname === "/register" ? activeClass : ""}
        >
          Register
        </Link>{" "}
      </li>
    </>
  );

  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.success("🔒 User logged out successfully");
        //  console.log('log out')
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Something went wrong while logging out");
      });
  };
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar backdrop-blur bg-[#dbb83a41] shadow-sm pl-5 pr-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <a className="  text-xl">
            {" "}
            <EliteTimeLogo />{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {/* <Link href="/">
            {user && user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="User"
                width={50} 
                height={50}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
            ) : (
              <MdAccountCircle className="text-4xl text-gray-600" />
            )}
          </Link> */}
          {user ? (
            <button onClick={handelLogOut} className="btn bg-[#ac8d1cf1]">
              Logout
              <TbLogout className="text-2xl" />
            </button>
          ) : (
            <Link href="/login">
              <p className="btn bg-[#ac8d1cf1]">
                <TbLogin2 className="text-2xl" /> Login
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
