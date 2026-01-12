import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const NewsLetter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault(); // ⚠️ small fix
  };

  return (
    <motion.div
      className="text-center py-16"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now &amp; get 20% off
      </p>

      <p className="text-gray-400 mt-3">
        Subscribe now and unlock 20% OFF on your first order. Fashion updates straight to your inbox.
      </p>

      <motion.form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 
                   border pl-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <input
          className="w-full sm:flex-1 outline-none py-3"
          type="email"
          placeholder="Enter your email"
          required
        />

        <motion.button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SUBSCRIBE
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default NewsLetter;
