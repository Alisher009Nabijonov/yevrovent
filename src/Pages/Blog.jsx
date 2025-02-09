import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { homeItem2 } from "../Malumotlar2";
import { FaChevronLeft } from "react-icons/fa6";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="text-center">
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
      </div>
      {selectedCategory === 1 && (
        <div id="blog_card" className="pl-15">
          {homeItem2.slice(11, 23).map((item) => (
            <div id="blog_card_ichi" className=" my-5 py-5" key={item.id}>
              <NavLink to={`/info/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </NavLink>
              <div className="bg-red-500 z-999 relative ">
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
              <h1 className="text-2xl mt-4">{item.title}</h1>
              <p className="text-xl text-gray-500 mt-4">{item.info1}</p>
            </div>
          ))}
        </div>
      )}
      {selectedCategory === 2 && (
        <div id="blog_card" className="pl-15">
          {homeItem2.slice(0, 11).map((item) => (
            <div id="blog_card_ichi" className=" my-5 py-5" key={item.id}>
              <NavLink to={`/info/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </NavLink>
              <div className="bg-red-500 z-999 relative ">
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
              <h1 className="text-2xl mt-4">{item.title}</h1>
              <p className="text-xl text-gray-500 mt-4">{item.info1}</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center">
        <button
          className={`  rounded-sm py-1 px-5 relative left-2  text-xl  cursor-pointer border-2  ${
            selectedCategory === 1
              ? "bg-blue-600 text-amber-50 border-none"
              : ""
          }`}
          onClick={() => handleCategoryClick(1)}
        >
          1
        </button>
        <button
          className={`  rounded-sm py-1 px-5  text-xl  cursor-pointer border-2  ${
            selectedCategory === 2
              ? "bg-blue-600 text-amber-50 border-none"
              : ""
          }`}
          onClick={() => handleCategoryClick(2)}
        >
          2
        </button>
      </div>
    </>
  );
};

export default Blog;
