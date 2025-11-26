"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularCard = ({ popularProduct }) => {
  console.log(popularProduct);
  const { _id, name, price, brand, band_color, image, rating } = popularProduct;
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl overflow-hidden w-full h-95 flex flex-col transform hover:scale-105 transition duration-300 ease-in-out">
        {/* Image */}
        <div className="relative w-full h-46">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          {/* Text Section */}
          <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-lg font-semibold">
              {name} - {band_color}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-bold text-gray-900">${price}</span>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div
                className="text-[#00000080] "
              >
                Brand: {brand}
              </div>

              <span className="text-[#a89141]">Rating: {rating}</span>
            </div>
          </div>

          {/* Button always at bottom */}
          <Link 
          href={`/products/${_id }`}
            className="w-full text-center mt-4 text-white font-semibold py-2 rounded-lg self-end active:scale-98"
            style={{ background: "#a89141" }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
