"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const PopularCard = ({ popularProduct }) => {
  const {user} = useContext(AuthContext)

  console.log(popularProduct);
  const { _id, name, price, brand, band_color, image, rating } = popularProduct;
  return (
   <div>
      <div className="group bg-white dark:bg-gray-800 shadow-modern hover:shadow-modern-xl rounded-2xl overflow-hidden w-full h-95 flex flex-col transform hover:scale-[1.02] transition-all duration-300 ease-out border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600">
        {/* Image */}
        <div className="relative w-full h-46 overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute top-3 right-3 bg-slate-900/80 text-white px-2 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
            ${price}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 bg-white dark:bg-gray-800">
          {/* Text Section */}
          <div className="flex flex-col gap-3 flex-1">
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
                {name}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">{band_color}</p>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-200 dark:border-slate-700">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium">Brand:</span> {brand}
              </div>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                <span className="text-slate-700 dark:text-slate-300 font-bold">{rating}</span>
                <span className="text-slate-600 dark:text-slate-400">⭐</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link
          href={user ? `/products/${_id}` : `/login`}
            className="w-full text-center mt-4 bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800 text-white font-semibold py-3 rounded-lg self-end transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
