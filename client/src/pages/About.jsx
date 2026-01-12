import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetter from "../components/NewsLetter";
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

/* 🔥 Text animation */
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

/* 🔥 Cards container */
const cardsVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* 🔥 Individual card */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
    >
      {/* TITLE */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* ABOUT SECTION */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <motion.img
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />

        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600"
        >
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>

          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </motion.div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <motion.div
        className="flex flex-col md:flex-row text-sm mb-20"
        variants={cardsVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={cardVariant}
          className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
        >
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariant}
          className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
        >
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariant}
          className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5"
        >
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </motion.div>
      </motion.div>

      {/* NEWSLETTER */}
      <NewsLetter />
    </motion.div>
  );
};

export default About;
