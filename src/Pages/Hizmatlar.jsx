import React from "react";
import Hizmat1 from "../assets/hizmat1.png";
import Hizmat2 from "../assets/hizmat2.png";
import Hizmat3 from "../assets/hizmat3.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
const Hizmatlar = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mt-8">Xizmatlar</h1>
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
          <h3 className="text-2xl">Xizmatlar</h3>
        </div>
      </div>
      <div className="hizmat">
        <div className="hizmat_left">
          <img src={Hizmat3} alt="" />
        </div>
        <div className="hizmat_right">
          <h1 className="hizmat_h1">FAOLIYATIMIZNING PAYDO BO'LISHI</h1>
          <p className="hizmat_p">
            Faoliyatga start berilishi - ventilyatsiya va konditsioner
            tizimlarini o'rnatishning yakuniy bosqichi, uning vazifasi barcha
            tizimlarning sifat nazorati, havo oqimi va harorat sharoitlarini
            tartibga solishdan iborat.
          </p>
          <p className="hizmatlar_p">
            Ekspluatatsiya paytida ventilyatsiya tarmoqlari va uskunalarining
            ishga yaroqliligi tekshirilib turishi lozim.
          </p>
        </div>
      </div>
      <div className="hizmat_rang">
        <div className="hizmat">
          <div className="hizmat_right">
            <h1 className="hizmat_h1">ISHLAB CHIQARISH VA SOTUV</h1>
            <p className="hizmat_p">
              Bizning kompaniyamiz ventilyatsiya va havoni tozalash tizimlari
              uchun keng turdagi sanoat uskunalarini tayyorlash va ishlab
              chiqarishga ixtisoslashgan.
            </p>
            <p className="hizmatlar_p">
              O'n besh yildan ziyod vaqt mobaynida kompaniyamiz uskunalar
              sifatini yanada oshirib kelmoqda, mahsulotlar assortimentini
              kengaytirib bormoqda, zamonaviy texnologiyalarni joriy qilib
              kelmoqda va yuqori texnologiyali ishlab chiqarish esa yanada
              takomillashtirilgan.
            </p>
          </div>
          <div className="hizmat_left">
            <img src={Hizmat2} alt="" />
          </div>
        </div>
      </div>
      <div className="hizmat">
        <div className="hizmat_left">
          <img src={Hizmat1} alt="" />
        </div>
        <div className="hizmat_right">
          <h1 className="hizmat_h1">Jihoz tanlashda konsultatsiya va yordam</h1>
          <p className="hizmat_p">
            Birinchidan, kompaniyamizning maqsadi - mijozlarga xonada
            mikroiqlimni yaratish bo'yicha har qanday texnik masalalar bo'yicha
            malakali konsultatsiya berish.
          </p>
          <p className="hizmatlar_p">
            Mutaxassislarimiz ventilyatsiya va iqlim uskunalarini tanlash,
            texnik tavsiflari, dizayni, montaji va texnik xizmatiga oid har
            qanday savolga javob berishadi
          </p>
        </div>
      </div>
    </>
  );
};

export default Hizmatlar;
