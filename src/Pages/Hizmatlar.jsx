import React from "react";
import Hizmat1 from "../assets/hizmat1.png";
import Hizmat2 from "../assets/hizmat2.png";
import Hizmat3 from "../assets/hizmat3.png";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hizmatlar = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="xizmatlar_pading_1">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
          className="text-center"
        >
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
        </motion.div>

        <motion.div
          className="hizmat"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
        >
          <div className="hizmat_left">
            <motion.img
              src={Hizmat3}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="hizmat_right">
            <motion.h1
              className="hizmat_h1"
              // whileHover={{ color: "#FF4500" }}
              transition={{ duration: 0.3 }}
            >
              FAOLIYATIMIZNING PAYDO BO'LISHI
            </motion.h1>
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
        </motion.div>

        <motion.div
          className="hizmat_rang"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
        >
          <div className="hizmat">
            <div className="hizmat_right">
              <motion.h1
                className="hizmat_h1"
                // whileHover={{ color: "#FF4500" }}
                transition={{ duration: 0.3 }}
              >
                ISHLAB CHIQARISH VA SOTUV
              </motion.h1>
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
              <motion.img
                src={Hizmat2}
                alt=""
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hizmat"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sectionVariants}
        >
          <div className="hizmat_left">
            <motion.img
              src={Hizmat1}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="hizmat_right">
            <motion.h1
              className="hizmat_h1"
              // whileHover={{ color: "#FF4500" }}
              transition={{ duration: 0.3 }}
            >
              Jihoz tanlashda konsultatsiya va yordam
            </motion.h1>
            <p className="hizmat_p">
              Birinchidan, kompaniyamizning maqsadi - mijozlarga xonada
              mikroiqlimni yaratish bo'yicha har qanday texnik masalalar
              bo'yicha malakali konsultatsiya berish.
            </p>
            <p className="hizmatlar_p">
              Mutaxassislarimiz ventilyatsiya va iqlim uskunalarini tanlash,
              texnik tavsiflari, dizayni, montaji va texnik xizmatiga oid har
              qanday savolga javob berishadi
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hizmatlar;
