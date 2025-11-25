"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import PopularCard from "@/components/PopularCard";

export default function Home() {

   const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/popular-products")
      .then((res) => res.json())
      .then((data) => {
        setPopularProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-full max-w-[1200px] mx-auto mt-15 mb-16">
      <div className="max-w-[1120px] mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image
            src="/watch1.png"
            alt="Watch 1"
             width={600}
            height={600}
            className="rounded-lg w-full h-140"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/watch2.png"
            alt="Watch 2"
            width={600}
            height={600}
            className="rounded-lg w-full h-140"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/watch3.png"
            alt="Watch 3"
            width={600}
            height={600}
            className="rounded-lg w-full h-140"
          />
        </SwiperSlide>
      </Swiper>
     </div>
      {/* card section */}
     <div className="bg-[#dbb83a26] outline outline-[#dfb41a]  pb-1 rounded-xl mt-10 max-w-[1120px] mx-auto">

      <h1 className="text-2xl font-bold ml-6 pt-3">Popular Product</h1> <hr className="max-w-[1060px] mx-auto mt-4 text-[#dfb41a]"/>
  
      <div className="max-w-[1080px] mx-auto grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-6 mb-8 mt-5 ]">
        
           {loading ? (
            <Spinner></Spinner>
          ) : (
            popularProducts.map((popularProduct) => (
              <PopularCard
                key={popularProduct._id}
               popularProduct={popularProduct}
              ></PopularCard>
            ))
          )}
        
      </div>
       <div className="text-center mb-6">
        <button className="py-2  mx-auto px-3 rounded-lg bg-[#a89141] text-white transform hover:scale-102 transition duration-300 ease-in-out">View More Products</button>
      </div>
     </div>

      
    </div>
  );
}
