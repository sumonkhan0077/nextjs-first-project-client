"use client";

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/components/AuthProvider";
import Link from "next/link";
import { toast } from "react-toastify";
import Spinner from "@/components/Spinner";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [allProducts, setallProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setallProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(allProducts);


   const handelRemoverProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
           headers: { "Content-Type": "application/json" }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingItems = allProducts.filter(
                (item) => item._id !== _id
              );
              setallProducts(remainingItems);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-[1100px] mx-auto mt-10">
      <title>My Products</title>

      <div className="flex justify-between mt-4">
        <h1 className="text-2xl font-semibold mb-4">
          My Products ({allProducts.length})
        </h1>
      </div>

      <div className="overflow-x-auto bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 max-w-[1200px] mx-auto shadow-md rounded-lg mt-5 mb-10">
        {loading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : allProducts.length > 0 ? (
          <table className="table-auto w-full border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-[#edd4a3] to-[#a89141] text-white">
              <tr>
                <th className="text-center py-2">#</th>
                <th className="py-2">Product Name</th>
                <th className="text-center py-2">Rating</th>
                <th className="text-center py-2">Quantity</th>
                <th className="text-center py-2">Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="bg-white">
              {allProducts.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-[#fdf5e6] transition duration-200"
                >
                  <td className="text-center text-black py-2">{index + 1}</td>
                  <td className="py-2">
                    <div className="flex items-center ml-16 gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-black">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.brand}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-yellow-500 text-center py-2">
                    {item.rating}
                  </td>
                  <td className="text-center text-black py-2">{item.stock}</td>
                  <td className="text-center text-[#a89141] font-semibold py-2">
                    ${item.price}
                  </td>
                  <td className="py-2">
                    <div className="flex items-center gap-2 justify-center">
                      <Link
                        href={`/products/${item._id}`}
                        className="btn btn-outline btn-xs text-[#a89141] border-[#a89141] hover:bg-[#a89141] hover:text-white"
                      >
                        Details
                      </Link>
                      <button
                      onClick={() => handelRemoverProduct(item._id)}
                      className="btn btn-outline btn-xs text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-10">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
