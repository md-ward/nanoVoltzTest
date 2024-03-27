import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigator = useNavigate();
  return (
    <motion.div
      className="flex  h-full flex-col items-center justify-center bg-white p-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="mb-4 text-xl font-bold text-gray-800 md:text-4xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        className="mb-8 text-gray-600 md:text-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => {
          // Handle navigation logic here
          navigator("/", { replace: true });
        }}
      >
        Go back to Home
      </motion.button>
    </motion.div>
  );
};

export default NotFoundPage;
