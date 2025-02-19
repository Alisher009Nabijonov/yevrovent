import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { homeItem2 } from "../Malumotlar2";
import { FaChevronLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center "
      >
        <h1 className="text-4xl mt-8">Blog</h1>
        <div className="flex items-center text-center justify-center">
          <NavLink to="/">
            <h1
              id="info_h1"
              className="text-2xl flex items-center text-center underline hover:text-orange-400 transition-all-0.5s"
            >
              Asosiy
            </h1>
          </NavLink>
          <FaChevronLeft className="text-orange-400 text-2xl" />
          <h3 className="text-2xl">Blog</h3>
        </div>
      </motion.div>
      {selectedCategory === 1 && (
        <motion.div
          id="blog_card"
          className="pl-8"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={categoryVariants}
        >
          {homeItem2.slice(11, 23).map((item) => (
            <motion.div
              id="blog_card_ichi"
              className="my-5 py-5 shadow-xl p-3  rounded-xl"
              key={item.id}
              whileHover={{ scale: 1.05 }}
            >
              <NavLink to={`/info/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </NavLink>
              <div className="bg-red-500 z-9 relative">
                <div
                  id="blog_sana"
                  className="bg-blue-500 text-amber-50 p-3 absolute bottom-0.5"
                >
                  <div>
                    <h1 className="text-2xl">04</h1>
                  </div>
                  <div>
                    <p className="text-xl">02.2025</p>
                  </div>
                </div>
              </div>
              <h1 className="text-xl mt-4">{item.title}</h1>
              <p className="text-xl text-gray-500 mt-4">{item.info1}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
      {selectedCategory === 2 && (
        <motion.div
          id="blog_card"
          className="pl-8"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={categoryVariants}
        >
          {homeItem2.slice(0, 11).map((item) => (
            <motion.div
              id="blog_card_ichi"
              className="my-5 py-5 shadow-xl p-3 rounded-xl"
              key={item.id}
              whileHover={{ scale: 1.05 }}
            >
              <NavLink to={`/info/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </NavLink>
              <div className="bg-red-500 z-999 relative">
                <div
                  id="blog_sana"
                  className="bg-blue-500 text-amber-50 p-3 absolute bottom-0.5"
                >
                  <div>
                    <h1 className="text-2xl">04</h1>
                  </div>
                  <div>
                    <p className="text-xl">02.2025</p>
                  </div>
                </div>
              </div>
              <h1 className="text-xl mt-4">{item.title}</h1>
              <p className="text-xm text-gray-500 mt-4">{item.info1}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
id="blog_pagination_old_orqa_btn"
          onClick={() => handleCategoryClick(1)}
          className={`pagination-button  ${selectedCategory === 2 ? " active" : ""}`}
        >
          <IoIosArrowBack />
        </button>
        <button
          className={`pagination-button  ${
            selectedCategory === 1
              ? "active"
              : ""
          }`}
          onClick={() => handleCategoryClick(1)}
        >
          1
        </button>
        <button
          className={`pagination-button  ${
            selectedCategory === 2
              ? "active"
              : ""
          }`}
          onClick={() => handleCategoryClick(2)}
        >
          2
        </button>
        <button
        id="blog_pagination_old_orqa_btn"
          onClick={() => handleCategoryClick(2)}
          className={`pagination-button border-1 ${
            selectedCategory === 1 ? "active" : ""
          }`}
        >
          <IoIosArrowForward />
        </button>
      </motion.div>
    </>
  );
};

export default Blog;
