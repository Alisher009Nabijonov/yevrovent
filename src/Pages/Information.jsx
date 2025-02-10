import React from "react";
import { homeItem } from "../Malumotlar";
import { NavLink, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Information = () => {
  const { id } = useParams();

  const product = homeItem.find((pro) => pro.id == id);

  if (!product) {
    return <p>object not faund</p>;
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <div className="flex flex-wrap gap-4 mb-6">
        <NavLink
          to="/"
          className="text-lg sm:text-xl flex items-center text-gray-600 hover:text-gray-900 transition duration-300"
        >
          <FaChevronLeft className="text-orange-400 mr-2" />
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="text-lg sm:text-xl flex items-center text-gray-600 hover:text-gray-900 transition duration-300"
        >
          <FaChevronLeft className="text-orange-400 mr-2" />
          Toifalar
        </NavLink>
      </div>
      <div className="flex flex-col md:flex-row border-2 border-gray-200 rounded-xl p-4 sm:p-6">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6 flex items-center justify-center">
          <img
            src={product.img || "/placeholder.svg"}
            alt={product.title}
            className="w-full max-w-[650px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-1xl sm:text-3xl lg:text-3xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="text-sm sm:text-xl text-gray-700 mb-6">
              {product.info}
            </p>
          </div>
          <NavLink to="/" className="self-start">
            <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white py-2 px-6 rounded-xl flex items-center text-lg sm:text-xl transition duration-300">
              <FaArrowLeft className="mr-2" />
              Qaytish
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Information;
