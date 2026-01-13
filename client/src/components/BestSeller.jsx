
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

/* 🔥 Section animation */
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* 🔥 Grid stagger (one by one) */
const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // 👈 same premium delay
    },
  },
};

/* 🔥 Card animation */
const itemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
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

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller === true);
    setBestSeller(bestProduct.slice(0, 10));
  }, [products]);

  return (
    <motion.div
      className="my-10"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      {/* TITLE */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Shop our best sellers that everyone’s talking about. Top styles, top comfort, and unbeatable vibes—only at True Style.
        </p>
      </div>

      {/* PRODUCTS */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        variants={gridVariant}
        initial="hidden"
        animate="visible"
      >
        {bestSeller.map((item) => (
          <motion.div
            key={item._id}
            variants={itemVariant}
            whileHover={{ scale: 1.03 }} // 👈 premium hover
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BestSeller;
