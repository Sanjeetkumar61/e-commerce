import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";

/* 🔥 Container stagger */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* 🔥 Column animation */
const itemVariant = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* TOP FOOTER */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* BRAND */}
        <motion.div variants={itemVariant}>
          <img src={assets.logo2} className="mb-5 w-62" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            True Style is your go-to destination for modern, comfortable, and trend-driven fashion. We bring you carefully curated collections that reflect confidence, individuality, and everyday elegance.At True Style, we believe fashion should feel as good as it looks—making style effortless, affordable, and authentic for everyone. Wear what feels true to you.
          </p>
        </motion.div>

        {/* COMPANY */}
        <motion.div variants={itemVariant}>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About us</li>
            <li className="cursor-pointer hover:text-black">Delivery</li>
            <li className="cursor-pointer hover:text-black">Privacy policy</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={itemVariant}>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-243-435-3546</li>
            <li>Sanjeetv090@gmail.com</li>
            <li className="cursor-pointer hover:text-black">Instagram</li>
          </ul>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <motion.div variants={itemVariant}>
        <hr />
        <p className="py-5 text-sm text-center text-gray-600">
          Copyright 2026 © True Style – All Rights Reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
