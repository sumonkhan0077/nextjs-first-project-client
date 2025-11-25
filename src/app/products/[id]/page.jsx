// app/products/[id]/page.jsx

import Image from "next/image";
import React from "react";

async function getProduct(id) {
  // তোমার backend API বা MongoDB call
  const res = await fetch(`http://localhost:5000/products/${id}`, {
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
      {/* SINGLE IMAGE */}
      <div className="relative">
        <div className="w-full h-[420px] bg-gray-100 rounded-xl overflow-hidden relative">
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
          <p className="text-3xl font-bold" style={{ color: "#a89141" }}>
            ${product.price}
          </p>

      
        </div>

        <div className="mt-5 flex gap-4">
          <button
            className="px-6 py-3 rounded-lg text-lg font-semibold text-white active:scale-98"
            style={{ backgroundColor: "#a89141" }}
          >
            Buy Now
          </button>

          <button
            className="px-6 py-3 rounded-lg text-lg font-semibold active:scale-98 hover:bg-[#e9db97]"
            style={{
              backgroundColor: "#f5f0d8",
              color: "#a89141",
              border: "1px solid #a89141",
            }}
          >
            Add To Cart
          </button>
        </div>

        <button className="mt-4 w-full border border-blue-500 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
          Order by Messenger
        </button>

        {/* PREMIUM BENEFITS */}
        <div className="mt-8 border rounded-xl p-5 bg-orange-50">
          <h2 className="font-semibold text-lg mb-3 text-orange-600">
            🔰 Premium Benefits
          </h2>

          <ul className="space-y-4 text-sm md:text-base">
            <li className="bg-white p-3 rounded-lg shadow">
              <strong>1 Year Warranty</strong> – Guaranteed protection for your
              product.
            </li>

            <li className="bg-white p-3 rounded-lg shadow">
              <strong>Free Bag & Box</strong> – Comes with a premium bag and an
              attractive box.
            </li>

            <li className="bg-white p-3 rounded-lg shadow">
              <strong>100% Original</strong> – We provide only high-quality
              genuine products.
            </li>

            <li className="bg-white p-3 rounded-lg shadow">
              <strong>Check Before Receiving</strong> – You can inspect the
              product during delivery.
            </li>

            <li className="bg-white p-3 rounded-lg shadow">
              <strong>7-Day Replacement</strong> – Easy replacement within 7
              days of purchase.
            </li>

            <li className="bg-white p-3 rounded-lg shadow">
              <strong>Fast Delivery</strong> – Secure and quick delivery
              anywhere in the country.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="max-w-[1150px]  mx-auto mb-10  shadow-lg rounded-xl p-6 bg-orange-50 space-y-4 border">
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
