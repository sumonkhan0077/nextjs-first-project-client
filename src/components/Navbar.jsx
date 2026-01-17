"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import EliteTimeLogo from "./LogoText";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { TbLogin2, TbLogout } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logOut } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeClass = "relative text-slate-600 dark:text-slate-400 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-slate-600 dark:after:bg-slate-400 after:rounded-full";

  const handleProtectedClick = (path) => {
    if (!user) {
      router.push("/login");
    } else {
      router.push(path);
    }
  };

  const items = (
    <>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" className={pathname === "/" ? activeClass : ""}>
          Home
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/products" className={pathname === "/products" ? activeClass : ""}>
          Products
        </Link>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => handleProtectedClick("/add_products")}
          className={pathname === "/add_products" ? activeClass : ""}
        >
          Add Products
        </button>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => handleProtectedClick("/manage_products")}
          className={pathname === "/manage_products" ? activeClass : ""}
        >
          Manage Products
        </button>
      </motion.li>
      <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/about" className={pathname === "/about" ? activeClass : ""}>
          About & Contact
        </Link>
      </motion.li>
    </>
  );

  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.success("🔒 User logged out successfully");
      })
      .catch((error) => {
        toast.error("Something went wrong while logging out");
      });
  };

  return (
    <motion.div 
      className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 shadow-lg border-b border-slate-200/50 dark:border-slate-700/30"
      initial={mounted ? { y: -100, opacity: 0 } : false}
      animate={mounted ? { y: 0, opacity: 1 } : false}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <div className="navbar backdrop-blur-xl max-w-6xl mx-auto  pl-5 pr-5">
        <div className="navbar-start">
          <div className="dropdown">
            <motion.div 
              tabIndex={0} 
              role="button" 
              className="btn btn-ghost lg:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </motion.div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <motion.a 
            className="text-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <EliteTimeLogo />
          </motion.a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            {user ? (
              <motion.button 
                onClick={handelLogOut} 
                className="group btn bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Logout</span>
                <motion.div
                  animate={{ rotate: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TbLogout className="text-xl" />
                </motion.div>
              </motion.button>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/login" className="group btn bg-slate-700 hover:bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TbLogin2 className="text-xl" />
                  </motion.div>
                  <span>Login</span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
