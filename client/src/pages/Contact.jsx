import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";

/* 🔥 Page animation */
const pageVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* 🔥 Image animation */
const imageVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* 🔥 Content animation */
const contentVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

const Contact = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
    >
      {/* TITLE */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* CONTENT */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        
        {/* IMAGE */}
        <motion.img
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contact_img"
        />

        {/* TEXT */}
        <motion.div
          variants={contentVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-start gap-6"
        >
          <p className="font-semibold text-xl text-gray-600">
            Our Store
          </p>

          <p className="text-gray-500">
            Sector-12 Near Akshay Patra <br />
            Jagatpura, Jaipur -302017, Rajasthan, India
          </p>

          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: sanjeetv090@gmail.com
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at True Style
          </p>

          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm 
                             hover:bg-black hover:text-white 
                             transition-all duration-500">
            Explore Jobs
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
