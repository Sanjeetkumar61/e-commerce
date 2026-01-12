import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";

/* 🔥 Container animation */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // ek-ek karke aayega
    },
  },
};

/* 🔥 Item animation */
const itemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const OurPolicy = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 
                 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // scroll par ek hi baar
    >
      {/* POLICY 1 */}
      <motion.div variants={itemVariant}>
        <img
          className="w-12 m-auto mb-5"
          src={assets.exchange_icon}
          alt="exchange_icon"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">
          We offer hassle free exchange policy
        </p>
      </motion.div>

      {/* POLICY 2 */}
      <motion.div variants={itemVariant}>
        <img
          className="w-12 m-auto mb-5"
          src={assets.quality_icon}
          alt="quality_icon"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">
          We provide 7 days free return policy
        </p>
      </motion.div>

      {/* POLICY 3 */}
      <motion.div variants={itemVariant}>
        <img
          className="w-12 m-auto mb-5"
          src={assets.support_img}
          alt="support"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">
          We provide 24/7 customer support
        </p>
      </motion.div>
    </motion.div>
  );
};

export default OurPolicy;
