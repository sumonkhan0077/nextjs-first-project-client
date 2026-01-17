"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Spinner from "@/components/Spinner";
import PopularCard from "@/components/PopularCard";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants - Optimized for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2
        delayChildren: 0.05   // Reduced from 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced from y: 30
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 }, // Reduced from x: -50
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 }, // Reduced from x: 50
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduced from 0.8
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 }, // Reduced from y: 40
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.7
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 }, // Reduced from scale: 0.8
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4, // Reduced from 0.6
        ease: "easeOut"
      }
    }
  };

  // Refs for scroll-triggered animations
  const popularRef = useRef(null);
  const featuresRef = useRef(null);
  const categoriesRef = useRef(null);
  const statisticsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const newsletterRef = useRef(null);
  const ctaRef = useRef(null);

  // useInView hooks - Optimized for performance
  const popularInView = useInView(popularRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });
  const featuresInView = useInView(featuresRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });
  const categoriesInView = useInView(categoriesRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });
  const statisticsInView = useInView(statisticsRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });
  const newsletterInView = useInView(newsletterRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.05, margin: "0px 0px -100px 0px" });

  const [popularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://firt-next-project-server.vercel.app/popular-products")
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
    <motion.div 
      className="w-full max-w-[1200px] mx-auto mt-15 mb-16 px-6"
      initial={mounted ? { opacity: 0 } : false}
      animate={mounted ? { opacity: 1 } : false}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <title>Home</title>
      <motion.div 
        className="max-w-[1120px] mx-auto relative"
        initial={mounted ? { opacity: 0, y: 20 } : false}
        animate={mounted ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-slate-400',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-slate-600'
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              
              <div className="relative h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center w-full px-8 md:px-16">
                  {/* Content Side */}
                  <div className="text-white space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Luxury <span className="text-slate-300">Timepieces</span>
                      </h2>
                      <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                        Discover our exclusive collection of premium watches crafted with precision and elegance for the discerning collector.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link 
                        href="/products" 
                        className="px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                      >
                        Explore Collection
                      </Link>
                      <Link 
                        href="/about" 
                        className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:bg-slate-300 hover:text-slate-800 text-slate-300 font-semibold rounded-lg transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="relative h-80 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-transparent rounded-2xl"></div>
                    <Image
                      src="/watch1.png"
                      alt="Luxury Watch Collection"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              
              <div className="relative h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center w-full px-8 md:px-16">
                  {/* Content Side */}
                  <div className="text-white space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Premium <span className="text-slate-300">Quality</span>
                      </h2>
                      <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                        Experience timeless sophistication with our handpicked selection of the world's finest watchmaking traditions.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link 
                        href="/products" 
                        className="px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                      >
                        Shop Now
                      </Link>
                      <Link 
                        href="/about" 
                        className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:bg-slate-300 hover:text-slate-800 text-slate-300 font-semibold rounded-lg transition-all duration-300 text-center"
                      >
                        Our Story
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="relative h-80 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent rounded-2xl"></div>
                    <Image
                      src="/watch2.png"
                      alt="Premium Watch Collection"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-slate-600 to-slate-500 rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              
              <div className="relative h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center w-full px-8 md:px-16">
                  {/* Content Side */}
                  <div className="text-white space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Elite <span className="text-slate-300">Collection</span>
                      </h2>
                      <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                        Where style meets functionality. Discover timepieces that define excellence and elevate your personal style.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link 
                        href="/products" 
                        className="px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                      >
                        Discover More
                      </Link>
                      <Link 
                        href="/about" 
                        className="px-8 py-4 bg-transparent border-2 border-slate-300 hover:bg-slate-300 hover:text-slate-800 text-slate-300 font-semibold rounded-lg transition-all duration-300 text-center"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="relative h-80 md:h-96">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-transparent rounded-2xl"></div>
                    <Image
                      src="/watch3.png"
                      alt="Elite Watch Collection"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      {/* Popular Products Section */}
      <motion.div 
        ref={popularRef}
        className="relative bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg pb-1 rounded-3xl mt-12 max-w-[1120px] mx-auto overflow-hidden"
        initial={mounted ? "hidden" : false}
        animate={mounted && popularInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="px-6 pt-6" variants={fadeInUp}>
          <motion.h1 
            className="text-4xl font-bold mb-2 text-slate-800 dark:text-slate-100 tracking-tight"
            variants={itemVariants}
          >
            Popular Products
          </motion.h1>
          <motion.div 
            className="h-1 w-24 bg-slate-600 rounded-full mb-4"
            variants={scaleIn}
          ></motion.div>
        </motion.div>
  
        <motion.div 
          className="max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 mt-5"
          variants={containerVariants}
        >
          {loading ? (
            <Spinner></Spinner>
          ) : (
            popularProducts.map((popularProduct) => (
              <div
                key={popularProduct._id}
               
              >
                <PopularCard popularProduct={popularProduct} />
              </div>
            ))
          )}
        </motion.div>
        
        <motion.div 
          className="text-center mb-8 mt-4"
          variants={fadeInUp}
        >
          <Link href="/products" className="group inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-slate-600 hover:bg-slate-700 text-white font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl will-change-transform">
            <span>View More Products</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        ref={featuresRef}
        className="max-w-[1120px] mx-auto mt-20 px-6"
        initial={mounted ? "hidden" : false}
        animate={mounted && featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4"
            variants={itemVariants}
          >
            Why Choose EliteTime
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Experience the finest in luxury timepieces with our commitment to quality, authenticity, and exceptional service.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              <svg className="w-8 h-8 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Authentic Guarantee</h3>
            <p className="text-slate-600 dark:text-slate-300">Every timepiece comes with a certificate of authenticity and manufacturer warranty.</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              <svg className="w-8 h-8 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Expert Service</h3>
            <p className="text-slate-600 dark:text-slate-300">Professional maintenance and repair services by certified watchmakers.</p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            >
              <svg className="w-8 h-8 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Worldwide Shipping</h3>
            <p className="text-slate-600 dark:text-slate-300">Fast and secure delivery to your doorstep with full insurance coverage.</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Categories Section */}
      <motion.div 
        ref={categoriesRef}
        className="max-w-[1120px] mx-auto mt-20 px-6"
        initial={mounted ? "hidden" : false}
        animate={mounted && categoriesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4"
            variants={itemVariants}
          >
            Shop by Category
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300"
            variants={itemVariants}
          >
            Discover our curated collections for every style and occasion
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products" className="group relative overflow-hidden rounded-2xl bg-slate-800 p-8 text-white hover:bg-slate-700 transition-all duration-300 block">
              <motion.div 
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Luxury</h3>
                <p className="text-slate-300 text-sm mb-4">Premium timepieces for the discerning collector</p>
                <div className="flex items-center text-slate-300 group-hover:text-white">
                  <span className="text-sm font-medium">Explore</span>
                  <svg 
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products" className="group relative overflow-hidden rounded-2xl bg-slate-700 p-8 text-white hover:bg-slate-600 transition-all duration-300 block">
              <motion.div 
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Sport</h3>
                <p className="text-slate-300 text-sm mb-4">Durable watches for active lifestyles</p>
                <div className="flex items-center text-slate-300 group-hover:text-white">
                  <span className="text-sm font-medium">Explore</span>
                  <svg 
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products" className="group relative overflow-hidden rounded-2xl bg-slate-600 p-8 text-white hover:bg-slate-500 transition-all duration-300 block">
              <motion.div 
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Classic</h3>
                <p className="text-slate-300 text-sm mb-4">Timeless designs for everyday elegance</p>
                <div className="flex items-center text-slate-300 group-hover:text-white">
                  <span className="text-sm font-medium">Explore</span>
                  <motion.svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.4
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </motion.div>
            </Link>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products" className="group relative overflow-hidden rounded-2xl bg-slate-500 p-8 text-white hover:bg-slate-400 transition-all duration-300 block">
              <motion.div 
                className="relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Vintage</h3>
                <p className="text-slate-300 text-sm mb-4">Rare and collectible vintage pieces</p>
                <div className="flex items-center text-slate-300 group-hover:text-white">
                  <span className="text-sm font-medium">Explore</span>
                  <motion.svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.6
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div 
        ref={statisticsRef}
        className="max-w-[1120px] mx-auto mt-20 px-6"
        initial={mounted ? "hidden" : false}
        animate={mounted && statisticsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-slate-800 rounded-3xl p-8 md:p-12 text-white"
          variants={scaleIn}
        >
          <motion.div className="text-center mb-8" variants={fadeInUp}>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              Trusted by Watch Enthusiasts Worldwide
            </motion.h2>
            <motion.p 
              className="text-slate-300 text-lg"
              variants={itemVariants}
            >
              Join thousands of satisfied customers who trust EliteTime for their luxury timepiece needs
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 transform transition-all duration-500">
                25K+
              </div>
              <div className="text-slate-300">Happy Customers</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 transform transition-all duration-500">
                500+
              </div>
              <div className="text-slate-300">Watch Models</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 transform transition-all duration-500">
                50+
              </div>
              <div className="text-slate-300">Premium Brands</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 transform transition-all duration-500">
                30+
              </div>
              <div className="text-slate-300">Years Experience</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        ref={testimonialsRef}
        className="max-w-[1120px] mx-auto mt-20 px-6"
        initial={mounted ? "hidden" : false}
        animate={mounted && testimonialsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <motion.h2 
            className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4"
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300"
            variants={itemVariants}
          >
            Real experiences from our valued customers
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-slate-600">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 transform transition-all duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">"Exceptional quality and service. My Rolex arrived exactly as described and the customer support was outstanding."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-slate-600 dark:text-slate-400 font-semibold">JD</span>
              </div>
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">John Davis</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Verified Buyer</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-slate-600">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 transform transition-all duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">"Fast shipping and authentic products. I've purchased three watches from EliteTime and each experience has been perfect."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-slate-600 dark:text-slate-400 font-semibold">SM</span>
              </div>
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Sarah Miller</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Verified Buyer</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center mb-4">
              <div className="flex text-slate-600">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 transform transition-all duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">"The expertise and knowledge of the team is impressive. They helped me find the perfect watch for my collection."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-slate-600 dark:text-slate-400 font-semibold">RW</span>
              </div>
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">Robert Wilson</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Verified Buyer</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div 
        ref={newsletterRef}
        className="max-w-[1120px] mx-auto mt-20 px-6"
        initial={mounted ? "hidden" : false}
        animate={mounted && newsletterInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 md:p-12 text-center border border-slate-200 dark:border-slate-700"
          variants={scaleIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100"
            variants={itemVariants}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and watch care tips.
          </motion.p>
          
          <motion.div 
            className="max-w-md mx-auto"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 border border-slate-300"
              />
              <motion.button 
                className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">No spam, unsubscribe at any time.</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        ref={ctaRef}
        className="max-w-[1120px] mx-auto mt-20 mb-8 px-6"
        initial={mounted ? "hidden" : false}
        animate={mounted && ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 text-center shadow-lg"
          variants={scaleIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4"
            variants={itemVariants}
          >
            Ready to Find Your Perfect Timepiece?
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore our complete collection of luxury watches and discover the perfect companion for your wrist.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link 
                href="/products" 
                className="inline-block px-8 py-4 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  Browse All Watches
                </motion.span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-semibold rounded-lg transition-all duration-200 border border-slate-200 dark:border-slate-600"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  Learn More About Us
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}