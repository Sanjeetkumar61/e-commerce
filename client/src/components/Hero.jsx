import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/frontend_assets/assets";

const heroSlides = [
  {
    tag: "NEW COLLECTION",
    title: "Winter Wear 2026",
    button: "SHOP NOW",
    image: assets.hero1,
  },
  {
    tag: "LIMITED OFFER",
    title: "Flat 40% Off",
    button: "GRAB DEAL",
    image: assets.hero2,
  },
  {
    tag: "TRENDING NOW",
    title: "Street Style Edit",
    button: "EXPLORE",
    image: assets.hero3,
  },
];

// 🔥 Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="border border-gray-300"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col sm:flex-row h-[400px] sm:h-[500px] lg:h-[500px]">

              {/* LEFT CONTENT */}
              <div className="w-full sm:w-1/2 flex items-center justify-center px-6">
                <div className="text-[#414141] max-w-md">

                  <motion.div
                    variants={itemVariant}
                    className="flex items-center gap-2 mb-3"
                  >
                    <span className="w-10 h-[2px] bg-[#414141]" />
                    <p className="text-sm font-medium">{slide.tag}</p>
                  </motion.div>

                  <motion.h1
                    variants={itemVariant}
                    className="prata-regular text-3xl lg:text-5xl leading-snug mb-5"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.div
                    variants={itemVariant}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <p className="font-semibold">{slide.button}</p>
                    <span className="w-10 h-[2px] bg-[#414141]" />
                  </motion.div>

                </div>
              </div>

              {/* RIGHT IMAGE */}
              <motion.div
                variants={itemVariant}
                className="w-full sm:w-1/2 overflow-hidden"
              >
                <img
                  src={slide.image}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Hero;

