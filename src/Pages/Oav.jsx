import React, {useState} from "react";
import oav1 from "../assets/500.jpg";
import oav2 from "../assets/501.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const Oav = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mt-8">MEDIA</h1>
        <div className="flex items-center text-center justify-center">
          <NavLink to="/">
            <h1
              id="info_h1"
              className="text-2xl flex items-center text-center underline hover:text-orange-400 transition-all-0.5s"
            >
              Home
            </h1>
          </NavLink>
          <FaChevronLeft className="text-orange-400 text-2xl" />
          <h3 className="text-2xl">Media</h3>
        </div>
      </div>
      <div className="px-10 text-center  gap-10">
        <button   className={`rounded-t-xl py-1 px-8 mr-5 text-xl border-1  ${
                selectedCategory === 1 ? "bg-blue-600 text-amber-50 border-none" : ""
              }`} onClick={() => handleCategoryClick(1)}>Rasim</button>
        <button  className={`rounded-t-xl py-1 px-8 mr-5 text-xl border-1  ${
                selectedCategory === 2 ? "bg-blue-600 text-amber-50 border-none" : ""
              }`} onClick={() => handleCategoryClick(2)}>Video</button>
        <hr  className="px-10"/>
      </div>
      <div>
        {selectedCategory === 1 && (
          <div id="oav_glavniy" className="flex px-10">
            <div id="oav" className="w-1/2 p-3 rounded-xl">
              <div>
                <img src={oav1} alt="" />
              </div>
              <div>
                <h1 className="text-2xl py-5">Bizning ofisimiz</h1>
                <p className="text-gray-500 pb-10">
                  Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                  tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash
                  va sotishdan iborat.
                  Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                  tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash
                  va sotishdan iborat.
                </p>
              </div>
            </div>
            <div id="oav" className="w-1/2 p-3  rounded-xl">
              <div>
                <img src={oav2} alt="" />
              </div>
              <div>
              <h1 className="text-2xl py-5">Bizning ofisimiz</h1>
                <p className="text-gray-500 pb-10">
                  Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                  tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash
                  va sotishdan iborat.
                  Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                  tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash
                  va sotishdan iborat.
                </p>
              </div>
            </div>
          </div>
        )}
        {selectedCategory === 2 && (
          <div className="flex items-center justify-center px-10 ">
           <iframe width="853" height="480" src="https://www.youtube.com/embed/yRlwH2p9pAg" title="Вентиляция. контроль климата на складе. Пример проекта, нюансы монтажа, стоимость. 4К. часть 2." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default Oav;
