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

/* 🔥 Grid stagger (slow & clean) */
const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,   // 👈 IMPORTANT (one by one)
    },
  },
};

/* 🔥 Individual card animation */
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

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products.length) {
      setLatestProducts(products.slice().reverse().slice(0,15));
    }
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
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest collection where modern trends meet timeless style. Designed for comfort, crafted for confidence—because your style deserves the best.
        </p>
      </div>

      {/* PRODUCTS */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        variants={gridVariant}
        initial="hidden"
        animate="visible"
      >
        {latestProducts.map((item) => (
          <motion.div
            key={item._id}
            variants={itemVariant}
            whileHover={{ scale: 1.03 }}   // 👈 bonus hover effect
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

export default LatestCollection;

