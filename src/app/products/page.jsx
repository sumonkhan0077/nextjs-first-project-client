"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import AllCards from "@/components/AllCards";
import SmoothScroll from "@/components/ui/smooth";

function page() {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://firt-next-project-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  console.log(products)

  if (loading) {
    return (
      <div className="text-center mt-10">
        <Spinner />
        
      </div>
    );
  }
  return (
    <div className="max-w-[1080px] mx-auto grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6 mb-8 mt-5 ]">
      <title>Products</title>
      {/* <SmoothScroll></SmoothScroll> */}
        
           {
            products.map((allProduct) => (
              <AllCards
                key={allProduct._id}
               allProduct={allProduct}
              ></AllCards>
            ))
          }
        
      </div>
  );
};

export default page;
