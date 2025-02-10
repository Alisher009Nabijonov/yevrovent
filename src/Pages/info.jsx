import React from "react";
import { homeItem2 } from "../Malumotlar2";
import { NavLink, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Information = () => {
  const { id } = useParams();

  const product = homeItem2.find((pro) => pro.id == id);

  if (!product) {
    return <p>object not faund</p>;
  }
  return (
    <div className=" mx-auto  px-5">
      <div className="flex">
        <NavLink to="/">
          <h1 id="info_h1" className="text-2xl flex items-center ">
            <FaChevronLeft className="text-orange-400" />
            Home
          </h1>
        </NavLink>
        <NavLink to="/about">
          <h1 id="info_h1" className="text-2xl flex items-center ">
            <FaChevronLeft className="text-orange-400" />
            Toifalar
          </h1>
        </NavLink>
      </div>
      <div className="flex border-2 rounded-xl">
        <div className="w-700 my-5 ml-5">
          <img src={product.img} alt="" className="w-200 rounded-xl" />
        </div>
        <div className="my-5">
          <h1 className="text-4xl mb-10">{product.title}</h1>
          <p className="text-xl mb-10">{product.info}</p>
          <NavLink to="/">
            {" "}
            <button className="border-2 py-1 px-12 rounded-xl flex items-center text-2xl">
              <FaArrowLeft className="text-orange-400 text-2xl" />
              Qaytish
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Information;
