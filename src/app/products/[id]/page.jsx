// app/products/[id]/page.jsx

import Image from "next/image";
import React from "react";

async function getProduct(id) {
  // তোমার backend API বা MongoDB call
  const res = await fetch(`https://firt-next-project-server.vercel.app/products/${id}`, {
    cache: "no-store", // fresh data fetch
  });
  const data = await res.json();
  return data;
}

export default async function ProductDetail({ params }) {
  const { id } = await params; // [id] route থেকে id পাওয়া যাবে
  const product = await getProduct(id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
    <div className="max-w-[1150px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <title>{product.name}</title>
      {/* SINGLE IMAGE */}
      <div className="relative">
        <div className="w-full h-[420px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative border border-gray-200 dark:border-gray-700">
          <Image
            src={product.image}
            alt="Product Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">
          {product.name} - {product.band_color}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">
            ${product.price}
          </p>

      
        </div>

        <div className="mt-5 flex gap-4">
          <button
            className="px-6 py-3 rounded-lg text-lg font-semibold text-white active:scale-98 bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Buy Now
          </button>

          <button
            className="px-6 py-3 rounded-lg text-lg font-semibold active:scale-98 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
          >
            Add To Cart
          </button>
        </div>

        <button className="mt-4 w-full border border-teal-500 dark:border-teal-400 text-teal-600 dark:text-teal-400 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-200">
          Order by Messenger
        </button>

        {/* PREMIUM BENEFITS */}
        <div className="mt-8 border border-slate-200 dark:border-slate-700 rounded-xl p-5 bg-slate-50 dark:bg-slate-800">
          <h2 className="font-semibold text-lg mb-3 text-slate-800 dark:text-slate-100">
            🔰 Premium Benefits
          </h2>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-modern border border-gray-100 dark:border-gray-700">
              <strong>1 Year Warranty</strong> – Guaranteed protection for your
              product.
            </li>

            <li className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-modern border border-gray-100 dark:border-gray-700">
              <strong>Free Bag & Box</strong> – Comes with a premium bag and an
              attractive box.
            </li>

            <li className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-modern border border-gray-100 dark:border-gray-700">
              <strong>100% Original</strong> – We provide only high-quality
              genuine products.
            </li>

            <li className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-modern border border-gray-100 dark:border-gray-700">
              <strong>Check Before Receiving</strong> – You can inspect the
              product during delivery.
            </li>

            <li className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-modern border border-gray-100 dark:border-gray-700">
              <strong>7-Day Replacement</strong> – Easy replacement within 7
              days of purchase.
            </li>

            <li className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-modern border border-gray-100 dark:border-gray-700">
              <strong>Fast Delivery</strong> – Secure and quick delivery
              anywhere in the country.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="max-w-[1150px] mx-auto mb-10 shadow-modern-lg rounded-xl p-6 bg-slate-50 dark:bg-slate-800 space-y-4 border border-slate-200 dark:border-slate-700">
  <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
    <p><span className="font-semibold">Price:</span> ${product.price}</p>
    <p><span className="font-semibold">Currency:</span> {product.currency}</p>
    
    <p><span className="font-semibold">Category:</span> {product.category}</p>
    <p><span className="font-semibold">Type:</span> {product.type}</p>

    <p><span className="font-semibold">Gender:</span> {product.gender}</p>
    <p><span className="font-semibold">Material:</span> {product.material}</p>

    <p><span className="font-semibold">Dial Color:</span> {product.dial_color}</p>
    <p><span className="font-semibold">Band Color:</span> {product.band_color}</p>

    <p><span className="font-semibold">Band Material:</span> {product.band_material}</p>
    <p><span className="font-semibold">Water Resistant:</span> {product.water_resistant}</p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-900 mt-2">Features:</h3>
    <ul className="list-disc list-inside text-gray-700">
      {product.features?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>

  <p className="text-gray-700">
    <span className="font-semibold">Rating:</span> ⭐ {product.rating}
  </p>

  <p className="text-gray-700">
    <span className="font-semibold">Stock:</span> {product.stock} items
  </p>

  <p className="text-gray-700 leading-relaxed">
    <span className="font-semibold">Description:</span> {product.description}
  </p>
</div>

    </div>
  );
}
