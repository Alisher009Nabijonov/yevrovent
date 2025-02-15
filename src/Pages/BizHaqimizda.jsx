import React from "react";
import { TypeAnimation } from "react-type-animation";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import Biz1 from "../assets/214.png";
import Biz2 from "../assets/205.jpg";
import Hizmat1 from "../assets/hizmat1.png";
import Hizmat2 from "../assets/hizmat2.png";
import Hizmat3 from "../assets/hizmat3.png";
import { motion } from "framer-motion";

const BizHaqimizda = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    < >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <motion.h1 className="text-4xl mt-8" variants={itemVariants}>
            Biz Haqimizda
          </motion.h1>
          <motion.div
            className="flex items-center text-center justify-center"
            variants={itemVariants}
          >
            <NavLink to="/">
              <motion.h1
                id="info_h1"
                className="text-2xl flex items-center text-center underline hover:text-orange-400 transition-all-0.5s"
                whileHover={{ scale: 1.05 }}
              >
                Asosiy
              </motion.h1>
            </NavLink>
            <FaChevronLeft className="text-orange-400 text-2xl" />
            <motion.h3 className="text-2xl" variants={itemVariants}>
              Mahsulotlar Kataolgi
            </motion.h3>
          </motion.div>
        </motion.div>
        <motion.div
          id="biz_kata1"
          className="flex px-10 items-center py-10"
          variants={itemVariants}
        >
          <motion.div
            id="img_oraptur1"
            className="w-530 my-15 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={Biz1}
              alt=""
              className="h-70 w-70"
              variants={itemVariants}
            />
          </motion.div>
          <motion.div
            id="biz_kata1_left"
            className="w-560 my-20"
            variants={itemVariants}
          >
            <motion.h1 className="text-2xl" variants={itemVariants}>
              Yevro-vent kompaniyasi
            </motion.h1>
            <motion.p className="text-gray-400" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  "Yevro-vent MChJ 2014 yilda tashkil etilgan. Korxonaning asosiy faoliyati ventilyatsiya va konditsioner tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash va sotishdan iborat. Ko'p yillik muvaffaqiyatli ish tajribasi bizga O'zbekiston Respublikasi bozorining eng professional korxonalaridan biriga aylanish huquqini beradi. Bu esa o'z navbatida hamkorlar va iste'molchilarning e'tirofini tasdiqlaydi.",
                  1000,
                ]}
                wrapper="span"
                speed={80}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          id="biz_kata"
          className="flex px-10 justify-between items-center mt-10"
          variants={itemVariants}
        >
          <motion.div
            id="biz_kata_left"
            className="w-170"
            variants={itemVariants}
          >
            <motion.p className="text-xs" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  "1 «Yevro-vent» - O'zbekiston Respublikasida zamonaviy ishlab chiqarish bazasiga ega bo'lgan yetakchi ishlab chiqarish korxonasi va mustaqil ravishda ventilyatsiya va konditsioner tizimlari uchun uskunalarning to'liq majmuasini ishlab chiqaradi. Kompaniyamiz zamonaviy uskunalar bilan jihozlangan:",
                  1000,
                ]}
                wrapper="span"
                speed={80}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.p>
            <motion.ul className="text-gray-600 mt-10" variants={itemVariants}>
              <motion.li className="text-black" variants={itemVariants}>
                Issiqlik almashinuvchilari ishlab chiqarish texnologik liniyasi;
              </motion.li>
              <motion.li variants={itemVariants}>
                RDB lazerli kesish liniyasi;
              </motion.li>
              <motion.li variants={itemVariants}>
                RDB plazmali kesish liniyasi;
              </motion.li>
              <motion.li variants={itemVariants}>
                Metallni burish uchun RDB dastgohlari;
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            id="img_oraptur"
            className="w-200 flex items-center justify-end"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={Biz2}
              alt=""
              className="w-160"
              variants={itemVariants}
            />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-4xl text-center mt-20 mb-10"
            variants={itemVariants}
          >
            Xizmatlar
          </motion.h1>
          <div className="services-section px-5">
            <div id="home_3ta_card_2_chisi" className="services-container">
              <div className="service-card">
                <div className="service-image">
                  <img src={Hizmat1} alt="" />
                </div>
                <div className="service-info">
                  <h2 className="service-title">Bizning Hizmatdan</h2>
                  <p className="service-description">Bizning hizmatlarimiz</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={Hizmat2} alt="" />
                </div>
                <div className="service-info">
                  <h2 className="service-title">Bizning Hizmatdan</h2>
                  <p className="service-description">Bizning hizmatlarimiz</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={Hizmat3} alt="" />
                </div>
                <div className="service-info">
                  <h2 className="service-title">Bizning Hizmatdan</h2>
                  <p className="service-description">Bizning hizmatlarimiz</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <Outlet />
      </motion.div>
    </>
  );
};

export default BizHaqimizda;
