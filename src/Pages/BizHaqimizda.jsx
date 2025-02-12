import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import Biz1 from "../assets/214.png";
import Biz2 from "../assets/205.jpg";
import Hizmat1 from "../assets/hizmat1.png";
import Hizmat2 from "../assets/hizmat2.png";
import Hizmat3 from "../assets/hizmat3.png";

const BizHaqimizda = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mt-8">Biz Haqimizda</h1>
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
          <h3 className="text-2xl">Mahsulotlar Kataolgi</h3>
        </div>
      </div>
      <div id="biz_kata1" className="flex px-10 items-center">
        <div
          id="img_oraptur1"
          className="w-530  my-15 flex items-center justify-center"
        >
          <img src={Biz1} alt="" className="h-70 w-70" />
        </div>
        <div id="biz_kata1_left" className="w-560 my-20">
          <h1 className="text-2xl">Yevro-vent kompaniyasi</h1>
          <p className=" text-gray-400">
            <TypeAnimation
              sequence={[
                "Yevro-vent MChJ 2014 yilda tashkil etilgan. Korxonaning asosiy faoliyati ventilyatsiya va konditsioner tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash va sotishdan iborat. Ko'p yillik muvaffaqiyatli ish tajribasi bizga O'zbekiston Respublikasi bozorining eng professional korxonalaridan biriga aylanish huquqini beradi. Bu esa o'z navbatida hamkorlar va iste'molchilarning e'tirofini tasdiqlaydi.",
                1000,
              ]}
              wrapper="span"
              speed={80}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
      <div id="biz_kata" className="flex px-10 justify-between">
        <div id="biz_kata_left" className="w-170">
          <p className="text-xs">
            <TypeAnimation
              sequence={[
                "1 «Yevro-vent» - O'zbekiston Respublikasida zamonaviy ishlab chiqarish bazasiga ega bo'lgan yetakchi ishlab chiqarish korxonasi va mustaqil ravishda ventilyatsiya va konditsioner tizimlari uchun uskunalarning to'liq majmuasini ishlab chiqaradi. Kompaniyamiz zamonaviy uskunalar bilan jihozlangan:",
                1000,
              ]}
              wrapper="span"
              speed={80}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <ul className="text-gray-600 mb-2x0 ">
            <li>
              Issiqlik almashinuvchilari ishlab chiqarish texnologik liniyasi;
            </li>
            <li>RDB lazerli kesish liniyasi;</li>
            <li>RDB plazmali kesish liniyasi;</li>
            <li>Metallni burish uchun RDB dastgohlari;</li>
          </ul>
        </div>
        <div id="img_oraptur" className="w-200 flex items-center justify-end">
          <img src={Biz2} alt="" className="w-185"/>
        </div>
      </div>
      <div>
        <h1 className="text-4xl text-center mt-20">Xizmatlar</h1>
        <div id="home_3ta_card_2_chisi" className="flex items-center">
          <div className="flex border-2 border-gray-400 rounded-xl py-4 px-4">
            <div>
              <img className="rounded-xl w-70 h-45" src={Hizmat1} alt="" />
            </div>
            <div className="p-3">
              <h2 className="text-2xl mb-4 ">Bizning Hizmatdan </h2>
              <p>Bizning hizmatlarimiz </p>
            </div>
          </div>
          <div className="flex border-2 border-gray-400 rounded-xl  py-4 px-4">
            <div>
              <img className="rounded-xl w-70 h-45" src={Hizmat2} alt="" />
            </div>
            <div className="p-3">
              <h2 className="text-2xl mb-4">Bizning Hizmatdan </h2>
              <p>Bizning hizmatlarimiz </p>
            </div>
          </div>
          <div className="flex border-2 border-gray-400 rounded-xl  py-4 px-4">
            <div>
              <img className="rounded-xl w-70 h-45" src={Hizmat3} alt="" />
            </div>
            <div className="p-3">
              <h2 className="text-2xl mb-4">Bizning Hizmatdan </h2>
              <p>Bizning hizmatlarimiz </p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default BizHaqimizda;
