"use client";

import { AuthContext } from "@/components/AuthProvider";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";

const AddWatchProduct = ({ handleProductAdded }) => {
  const { user } = useContext(AuthContext);
  const [ratingError, setRatingError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const newProduct = {
      name: form.name.value,
      brand: form.brand.value,
      price: parseFloat(form.price.value),
      currency: form.currency.value,
      category: form.category.value,
      type: form.type.value,
      gender: form.gender.value,
      material: form.material.value,
      dial_color: form.dial_color.value,
      band_color: form.band_color.value,
      band_material: form.band_material.value,
      water_resistant: form.water_resistant.value,
      features: form.features.value.split(",").map((f) => f.trim()),
      rating: parseFloat(form.rating.value),
      image: form.image.value,
      description: form.description.value,
      stock: parseInt(form.stock.value),
      exporter_email: user?.email || form.exporter_email.value,
      time: new Date().toISOString(),
    };

    if (newProduct.rating < 0 || newProduct.rating > 5) {
      return setRatingError(true);
    }

    if (newProduct.stock <= 0) {
      return setQuantityError(true);
    }

    setRatingError(false);
    setQuantityError(false);

    fetch("https://firt-next-project-server.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          if (handleProductAdded) {
            handleProductAdded({ _id: data.insertedId, ...newProduct });
          }
          Swal.fire({
            icon: "success",
            title: "Product Added!",
            text: "Your watch has been successfully added.",
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later.",
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-modern-lg rounded-2xl border border-slate-200 dark:border-slate-700">
      <title>Add Products</title>
      <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-6">
        Add New Watch
      </h2>

      <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="currency" placeholder="Currency (USD)" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="gender" placeholder="Gender" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="material" placeholder="Material" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="dial_color" placeholder="Dial Color" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="band_color" placeholder="Band Color" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="band_material" placeholder="Band Material" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="water_resistant" placeholder="Water Resistant (e.g., 300m)" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="features" placeholder="Features (comma separated)" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="number" step="0.1" name="rating" placeholder="Rating (0-5)" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full md:col-span-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required></textarea>
        <input type="number" name="stock" placeholder="Stock Quantity" className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <input type="email" name="exporter_email" placeholder="Exporter Email" defaultValue={user?.email || ""} readOnly={!!user?.email} className="input input-bordered w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-400 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 transition bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" required />
        <button type="submit" className="md:col-span-2 btn bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white w-full p-3 mt-4 rounded-lg border-0 shadow-lg hover:shadow-xl transition-all duration-200">
          Add Watch
        </button>
      </form>

      {ratingError && <p className="text-red-500 text-center mt-2">Rating must be between 0 and 5.</p>}
      {quantityError && <p className="text-red-500 text-center mt-2">Stock must be at least 1.</p>}
    </div>
  );
};

export default AddWatchProduct;
