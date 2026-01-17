"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50 dark:bg-slate-900">
      <h1 className="text-6xl font-bold mb-4 text-slate-800 dark:text-slate-100">404</h1>
      <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">Oops! Page not found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}
