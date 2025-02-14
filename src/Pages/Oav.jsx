import React, { useState } from "react";
import oav1 from "../assets/500.jpg";
import oav2 from "../assets/501.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { FaChevronRight } from "react-icons/fa"
const Oav = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <>
    <motion.div className="min-h-screen bg-gray-50" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="container mx-auto px-4 py-8" variants={itemVariants}>
        <motion.h1 className="text-4xl font-bold text-center text-gray-800 mb-4" variants={itemVariants}>
          MEDIA
        </motion.h1>
        <motion.div className="flex items-center justify-center text-lg mb-8" variants={itemVariants}>
          <NavLink to="/">
            <span className="text-blue-600 hover:text-blue-800 transition-colors duration-300">Home</span>
          </NavLink>
          <FaChevronRight className="text-gray-400 mx-2" />
          <span className="text-gray-600">Media</span>
        </motion.div>
      </motion.div>

      <motion.div className="container mx-auto px-4 mb-8" variants={itemVariants}>
        <div className="flex justify-center">
          <motion.button
            className={`py-2 px-8 mr-4 text-xl rounded-t-xl transition-all duration-300 ${
              selectedCategory === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryClick(1)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Rasim
          </motion.button>
          <motion.button
            className={`py-2 px-8 text-xl rounded-t-xl transition-all duration-300 ${
              selectedCategory === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryClick(2)}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Video
          </motion.button>
        </div>
        <hr className="border-gray-300" />
      </motion.div>

      <motion.div className="container mx-auto px-4 my-10" variants={itemVariants}>
        {selectedCategory === 1 && (
          <motion.div
          id="oav_2tacard_responsive_id"
            className="flex justify-between pb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div    id="oav_2tacard_responsive_id1234" className="w-160 shadow-md p-5 rounded-xl" variants={itemVariants}>
              <img
                src={oav1}
                alt="Bizning ofisimiz"
                className="w-full h-64 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h2 className="text-2xl  font-semibold text-gray-800 mt-4 mb-2">Bizning ofisimiz</h2>
              <p className="text-gray-600 ">
                Korxonaning asosiy faoliyati ventilyatsiya va konditsioner tizimlari uchun sanoat uskunalarini ishlab
                chiqish, tayyorlash va sotishdan iborat. Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash va sotishdan iborat.
              </p>
            </motion.div>
            <motion.div   id="oav_2tacard_responsive_id1234" className="w-160 shadow-md p-5 rounded-xl" variants={itemVariants}>
              <img
                src={oav2}
                alt="Bizning ofisimiz"
                className="w-full h-64 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">Bizning ofisimiz</h2>
              <p className="text-gray-600">
                Korxonaning asosiy faoliyati ventilyatsiya va konditsioner tizimlari uchun sanoat uskunalarini ishlab
                chiqish, tayyorlash va sotishdan iborat. Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash va sotishdan iborat.
              </p>
            </motion.div>
          </motion.div>
        )}
        {selectedCategory === 2 && (
          <motion.div
            className="flex justify-center pb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full max-w-4xl">
              <iframe
                src="https://www.youtube.com/embed/yRlwH2p9pAg"
                title="Вентиляция. контроль климата на складе. Пример проекта, нюансы монтажа, стоимость. 4К. часть 2."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video rounded-lg shadow-lg"
              ></iframe>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
    </>
  );
};

export default Oav;
