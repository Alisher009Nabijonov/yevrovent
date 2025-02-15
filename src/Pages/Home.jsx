import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import HomeImg100 from "../assets/200.jpg";
import HomeImg300 from "../assets/201.jpg";
import HomeImg400 from "../assets/202.jpg";
import HomeImg500 from "../assets/203.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// import required modules
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import HomeImg1 from "../assets/jvk.png";
import HomeImg2 from "../assets/klapann.jpg";
import HomeImg3 from "../assets/ulitka.jpg";
import HomeImg14 from "../assets/ewew.png";
import HomeImg6 from "../assets/qpk.png";
import HomeImg20 from "../assets/afzal1.jpg";
import HomeImg21 from "../assets/afzal2.jpg";
import HomeImg22 from "../assets/afzal3.jpg";
import HomeImg23 from "../assets/afzal4.jpg";
import { homeItem } from "../Malumotlar";

import Homi1 from "../assets/h111.jpg";
import Homi2 from "../assets/h2.jpg";
import Homi3 from "../assets/h3.jpg";
import Homi4 from "../assets/h4.jpg";
import Homi5 from "../assets/h5.jpg";
import Homi6 from "../assets/h6.jpg";
import Homi7 from "../assets/h7.png";
import Homi8 from "../assets/h8.jpg";
import Homi9 from "../assets/h9.jpg";
import Homi10 from "../assets/h10.jpg";
import Homi11 from "../assets/h11.jpg";
import Homi12 from "../assets/h12.jpg";
import Homi13 from "../assets/h13.jpg";
import Hizmat1 from "../assets/hizmat1.png";
import Hizmat2 from "../assets/hizmat2.png";
import Hizmat3 from "../assets/hizmat3.png";
import HomeKata from "../assets/homekata.png";
import { Pagination } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { homeItem1 } from "../Malumotlar1";
import { homeItem12 } from "../Malumotlar12";
import { homeItem13 } from "../Malumotlar13";
import { homeItem14 } from "../Malumotlar14";
import { homeItem15 } from "../Malumotlar15";
import { homeItem16 } from "../Malumotlar16";
import { homeItem17 } from "../Malumotlar17";
import { homeItem18 } from "../Malumotlar18";
import { homeItem19 } from "../Malumotlar19";
import { homeItem20 } from "../Malumotlar20";
import { homeItem21 } from "../Malumotlar21";
import { homeItem22 } from "../Malumotlar22";
import { homeItem23 } from "../Malumotlar23";
import { homeItem24 } from "../Malumotlar24";

const counterValues = [65, 200, 122, 180];

export default function App() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = counts.map((_, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < counterValues[index]) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, 10);
    });

    return () => intervals.forEach(clearInterval);
  }, []);
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 3;

  const handleLeftClick = () => {
    if (visibleStart > 0) {
      setVisibleStart((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (visibleStart + visibleCount < homeItem.length) {
      setVisibleStart((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) =>
        prev + visibleCount < homeItem.length ? prev + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCount, homeItem.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleStart((prev) =>
        prev + visibleCount < homeItem.length ? prev + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [visibleCount, homeItem.length]);

  const images = [Homi1, Homi3, Homi7, Homi4, Homi11, Homi13];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  const products = [
    {
      img: HomeImg100,
      title: "Kompressor-kondensator bloki JVK",
      description:
        "Kompressor va kondensator bloki (KKB) Markaziy konditsioner tizimlarida xladogentni bevosita bug'lash maqsadida foydalanish uchun mo'ljallangan. Asosiy komponentlar kompressor va kondensator bo'lib, tashqi bug'latgichdan foydalaniladi.",
    },
    {
      img: HomeImg300,
      title: "Kanalli ventilyator Ulitka",
      description:
        "Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash",
    },
    {
      img: HomeImg400,
      title: "Another Product",
      description:
        "Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash",
    },
    {
      img: HomeImg500,
      title: "Yet Another Product",
      description:
        "Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash",
    },
  ];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <>
      {/* <div id="home_main" className="home-container">
    <Swiper navigation={true} modules={[Navigation]} className="home-swiper">
      <SwiperSlide>
        <div id="home_carusel" className="home-carousel">
          <div className="carousel-content">
            <h1 className="carousel-title">Elektr bilan isitish qurilmasi UEO</h1>
            <p className="carousel-description">
              Elektr isitish qurilmasi ( issiqlik to'pi) omborxona, ishlab chiqarish binolari va boshqalar
            </p>
            <NavLink to="/swiper/1">
              <button className="btn-details">Batafsil</button>
            </NavLink>
          </div>
          <div id="swiper_card_salom_img_kata" className="carousel-image">
            <img src={HomeImg2 || "/placeholder.svg"} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="home_carusel" className="home-carousel">
          <div className="carousel-content">
            <h1 className="carousel-title">Kanalli ventilyator Ulitka</h1>
            <p className="carousel-description">
              Elektr isitish qurilmasi ( issiqlik to'pi) omborxona, ishlab chiqarish binolari va boshqalar
            </p>
            <NavLink to="/swiper/2">
              <button className="btn-details">Batafsil</button>
            </NavLink>
          </div>
          <div id="swiper_card_salom_img_kata" className="carousel-image">
            <img src={HomeImg3 || "/placeholder.svg"} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div id="home_carusel" className="home-carousel">
          <div className="carousel-content">
            <h1 className="carousel-title">Kanalli ventilyator Ulitka</h1>
            <p className="carousel-description">
              Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik
            </p>
            <NavLink to="/swiper/3">
              <button className="btn-details">Batafsil</button>
            </NavLink>
          </div>
          <div id="swiper_card_salom_img_kata" className="carousel-image">
            <img src={HomeImg3 || "/placeholder.svg"} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div className="product-carousel">
      <div className="carousel-controls">
        <button onClick={handleLeftClick} className="btn-arrow">
          <FaArrowLeft />
        </button>
        <button onClick={handleRightClick} className="btn-arrow">
          <FaArrowRight />
        </button>
      </div>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${visibleStart * (47 / visibleCount)}%)`,
          }}
        >
          {homeItem.map((item) => (
            <div key={item.id}  className="product-card">
              <div className="product-image">
                <img src={item.img || "/placeholder.svg"} alt={item.title} />
              </div>
              <div className="product-info">
                <h2 className="product-title">{item.title}</h2>
                <p className="product-count">(6 items)</p>
                <NavLink to={`information/${item.id}`}>
                  <button className="btn-details">Batafsil</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div id="home_cata_img_text" className="company-info">
      <div className="company-image">
        <img src={HomeKata || "/placeholder.svg"} alt="" />
      </div>
      <div className="company-text">
        <h1 className="company-title">Yevro-vent kompaniyasi</h1>
        <p className="company-description">
          <span className="company-name">Yevro-vent MChJ</span> 
          <TypeAnimation
              sequence={[
                "2014 yilda tashkil etilgan.",
                1000,
              ]}
            
              wrapper="span"
              speed={80}
              // style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          
        </p>
        <p className="company-description">
          Korxonaning asosiy faoliyati ventilyatsiya va konditsioner tizimlari uchun sanoat uskunalarini ishlab chiqish,
          tayyorlash va sotishdan iborat.
        </p>
        <p className="company-description">
          Ko'p yillik muvaffaqiyatli ish tajribasi bizga O'zbekiston Respublikasi bozorining eng professional
          korxonalaridan biriga aylanish huquqini beradi. Bu esa o'z navbatida hamkorlar va iste'molchilarning
          e'tirofini tasdiqlaydi.
        </p>
        <NavLink to="/biz">
          <button className="btn-details">Batafsil</button>
        </NavLink>
      </div>
    </div>

    <div id="home_3ta_card" className="featured-products">
      <div id="home_3ta_card1234567898" className="featured-product">
        <div className="featured-product-image">
          <img src={HomeImg2 || "/placeholder.svg"} alt="" />
        </div>
        <div className="featured-product-info">
          <h2 className="featured-product-title">Elektr bilan isitish qurilmasi UEO</h2>
          <p className="featured-product-description">
            Elektr isitish qurilmasi ( issiqlik to'pi) omborxona, ishlab chiqarish binolari va boshqalar
          </p>
          <div className="rating">
            <input value="5" name="rating" id="star5" type="radio" />
            <label htmlFor="star5"></label>
            <input value="4" name="rating" id="star4" type="radio" />
            <label htmlFor="star4"></label>
            <input value="3" name="rating" id="star3" type="radio" />
            <label htmlFor="star3"></label>
            <input value="2" name="rating" id="star2" type="radio" />
            <label htmlFor="star2"></label>
            <input value="1" name="rating" id="star1" type="radio" />
            <label htmlFor="star1"></label>
          </div>
          <NavLink to="/about">
            <button className="btn-category">Toifalar</button>
          </NavLink>
        </div>
      </div>
      <div id="home_3ta_card12345678987654321234" className="featured-product-group">
        <div id="home_3ta_card1234567898" className="featured-product-small">
          <div className="featured-product-image-small">
            <img src={HomeImg3 || "/placeholder.svg"} alt="" />
          </div>
          <div className="featured-product-info-small">
            <h2 className="featured-product-title-small">Kanalli ventilyator Ulitka</h2>
            <p className="featured-product-description-small">
            Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik
            </p>
            <NavLink to="/about">
              <button className="btn-category">Toifalar</button>
            </NavLink>
          </div>
        </div>
        <div id="home_3ta_card1234567898" className="featured-product-small">
          <div className="featured-product-image-small">
            <img src={HomeImg6 || "/placeholder.svg"} alt="" />
          </div>
          <div className="featured-product-info-small">
            <h2 className="featured-product-title-small">Qayta yo‘nalgan to‘g‘ri burchakli klapan </h2>
            <p className="featured-product-description-small">
            Shamollatish tizimlari uchun qayta yo‘nalgan to‘g‘ri burchakli klapanlar
            </p>
            <NavLink to="/about">
              <button className="btn-category">Toifalar</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>

    <div className="stats-section">
      <div className="stats-container">
        {counterValues.map((_, index) => (
          <div className="stat-card" key={index}>
            <h1 className="stat-icon">
              {index === 0 ? (
                <i className="fa-solid fa-gears"></i>
              ) : index === 1 ? (
                <i className="fa-solid fa-hourglass-half"></i>
              ) : index === 2 ? (
                <i className="fa-solid fa-book"></i>
              ) : (
                <i className="fa-solid fa-industry"></i>
              )}
            </h1>
            <div className="stat-info">
              <p className="stat-count">{counts[index]}</p>
              <p className="stat-description">
                {index === 0 && "Yildan beri bozorda"}
                {index === 1 && "Hususiy ishlab chiqarish"}
                {index === 2 && "Nemis komponentlari"}
                {index === 3 && "ISO bo'yicha ishlab chiqarish"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="services-section">
      <h1 className="services-title">Xizmatlar</h1>
      <div id="home_3ta_card_2_chisi" className="services-container">
        <div className="service-card">
          <div className="service-image">
            <img src={Hizmat1 || "/placeholder.svg"} alt="" />
          </div>
          <div className="service-info">
            <h2 className="service-title">Bizning Hizmatdan</h2>
            <p className="service-description">Bizning hizmatlarimiz</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image">
            <img src={Hizmat2 || "/placeholder.svg"} alt="" />
          </div>
          <div className="service-info">
            <h2 className="service-title">Bizning Hizmatdan</h2>
            <p className="service-description">Bizning hizmatlarimiz</p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-image">
            <img src={Hizmat3 || "/placeholder.svg"} alt="" />
          </div>
          <div className="service-info">
            <h2 className="service-title">Bizning Hizmatdan</h2>
            <p className="service-description">Bizning hizmatlarimiz</p>
          </div>
        </div>
      </div>
    </div>

    <div className="clients-section">
      <div>
        <h1 className="clients-title">Bizga ishonch bildirgan mijozlarimiz</h1>
      </div>
      <div className="clients-carousel">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={2000}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="client-slide">
              <img src={img || "/placeholder.svg"} alt={`Carousel ${index + 1}`} className="client-logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    <div className="new-categories-section">
      <div className="new-categories-header">
        <h2 className="new-categories-title">Yangi Toifalar</h2>
        <NavLink to="/about">
          <h2 className="view-categories">Toifalarni Korish</h2>
        </NavLink>
      </div>
    </div>

    <div  className="product-list">
      {currentProducts.map((product, index) => (
        <div key={index} className="product-item">
          <div className="product-image">
            <img src={product.img || "/placeholder.svg"} alt="" />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <NavLink to="/about">
              <button className="btn-view-category">Toifani Korish</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination">
      <button onClick={() => setCurrentPage(1)} className={`pagination-button ${currentPage === 2 ? "active" : ""}`}><FaArrowLeft /></button>
      <button onClick={() => setCurrentPage(1)} className={`pagination-button ${currentPage === 1 ? "active" : ""}`}>
        1
      </button>
      <button onClick={() => setCurrentPage(2)} className={`pagination-button ${currentPage === 2 ? "active" : ""}`}>
        2
      </button>
      <button onClick={() => setCurrentPage(2)} className={`pagination-button ${currentPage === 1 ? "active" : ""}`}><FaArrowRight /></button>
    </div>
  </div> */}

      <motion.div
        id="home_main"
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="home-swiper"
          >
            <SwiperSlide>
              <div id="home_carusel" className="home-carousel">
                <div className="carousel-content">
                  <h1 className="carousel-title">
                    Elektr bilan isitish qurilmasi UEO
                  </h1>
                  <p className="carousel-description">
                    Elektr isitish qurilmasi ( issiqlik to'pi) omborxona, ishlab
                    chiqarish binolari va boshqalar
                  </p>
                  <NavLink to="/swiper/1">
                    <button className="btn-details">Batafsil</button>
                  </NavLink>
                </div>
                <div id="swiper_card_salom_img_kata" className="carousel-image">
                  <img src={HomeImg2 || "/placeholder.svg"} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id="home_carusel" className="home-carousel">
                <div className="carousel-content">
                  <h1 className="carousel-title">Kanalli ventilyator Ulitka</h1>
                  <p className="carousel-description">
                    Elektr isitish qurilmasi ( issiqlik to'pi) omborxona, ishlab
                    chiqarish binolari va boshqalar
                  </p>
                  <NavLink to="/swiper/2">
                    <button className="btn-details">Batafsil</button>
                  </NavLink>
                </div>
                <div id="swiper_card_salom_img_kata" className="carousel-image">
                  <img src={HomeImg3 || "/placeholder.svg"} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div id="home_carusel" className="home-carousel">
                <div className="carousel-content">
                  <h1 className="carousel-title">Kanalli ventilyator Ulitka</h1>
                  <p className="carousel-description">
                    Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV
                    tipidagi issiqlik
                  </p>
                  <NavLink to="/swiper/3">
                    <button className="btn-details">Batafsil</button>
                  </NavLink>
                </div>
                <div id="swiper_card_salom_img_kata" className="carousel-image">
                  <img src={HomeImg3 || "/placeholder.svg"} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        <motion.div className="product-carousel" variants={itemVariants}>
          <div className="product-carousel">
            <div className="carousel-controls">
              <button onClick={handleLeftClick} className="btn-arrow">
                <FaArrowLeft />
              </button>
              <button onClick={handleRightClick} className="btn-arrow">
                <FaArrowRight />
              </button>
            </div>
            <div className="carousel-wrapper ">
              <div className="flex ">
                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (56 / visibleCount)}%)`,
                  }}
                >
                  {homeItem1.map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem12.length} Malumot)
                        </p>
                        <NavLink to={`batafsil/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div
                  className="carousel"
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem13.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem13.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem14.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem14.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem15.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem15.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div> */}
{/* 
                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem16.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem16.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem17.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem17.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem18.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem18.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div> */}

                {/* <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem19.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem19.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem20.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem20.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem21.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem21.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem22.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem22.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (250 / visibleCount)}%)`,
                  }}
                >
                  {homeItem23.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem23.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="carousel "
                  style={{
                    transform: `translateX(-${visibleStart *
                      (100 / visibleCount)}%)`,
                  }}
                >
                  {homeItem24.slice(0, 1).map((item) => (
                    <div key={item.id} className="product-card">
                      <div className="product-image">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                        />
                      </div>
                      <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-count">
                          ({homeItem24.length} Malumot)
                        </p>
                        <NavLink to={`information/${item.id}`}>
                          <button className="btn-details">Batafsil</button>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          // id="home_cata_img_text"
          // className="company-info"
          variants={itemVariants}
        >
          <div id="home_cata_img_text" className="company-info">
            <div className="company-image">
              <img src={HomeKata || "/placeholder.svg"} alt="" />
            </div>
            <div className="company-text">
              <h1 className="company-title">Yevro-vent kompaniyasi</h1>
              <p className="company-description">
                <span className="company-name">Yevro-vent MChJ</span>
                <TypeAnimation
                  sequence={["2014 yilda tashkil etilgan.", 1000]}
                  wrapper="span"
                  speed={80}
                  // style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>
              <p className="company-description">
                Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
                tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash
                va sotishdan iborat.
              </p>
              <p className="company-description">
                Ko'p yillik muvaffaqiyatli ish tajribasi bizga O'zbekiston
                Respublikasi bozorining eng professional korxonalaridan biriga
                aylanish huquqini beradi. Bu esa o'z navbatida hamkorlar va
                iste'molchilarning e'tirofini tasdiqlaydi.
              </p>
              <NavLink to="/biz">
                <button className="btn-details">Batafsil</button>
              </NavLink>
            </div>
          </div>
        </motion.div>

        <motion.div
          // id="home_3ta_card"
          // className="featured-products"
          variants={itemVariants}
        >
          <div id="home_3ta_card" className="featured-products">
            <div id="home_3ta_card1234567898" className="featured-product">
              <div className="featured-product-image">
                <img src={HomeImg2 || "/placeholder.svg"} alt="" />
              </div>
              <div className="featured-product-info">
                <h2 className="featured-product-title">
                  Elektr bilan isitish qurilmasi UEO
                </h2>
                <p className="featured-product-description">
                  Elektr isitish qurilmasi ( issiqlik to'pi) omborxona, ishlab
                  chiqarish binolari va boshqalar
                </p>
                <div className="rating">
                  <input value="5" name="rating" id="star5" type="radio" />
                  <label htmlFor="star5"></label>
                  <input value="4" name="rating" id="star4" type="radio" />
                  <label htmlFor="star4"></label>
                  <input value="3" name="rating" id="star3" type="radio" />
                  <label htmlFor="star3"></label>
                  <input value="2" name="rating" id="star2" type="radio" />
                  <label htmlFor="star2"></label>
                  <input value="1" name="rating" id="star1" type="radio" />
                  <label htmlFor="star1"></label>
                </div>
                <NavLink to="/about">
                  <button className="btn-category">Toifalar</button>
                </NavLink>
              </div>
            </div>
            <div
              id="home_3ta_card12345678987654321234"
              className="featured-product-group"
            >
              <div
                id="home_3ta_card1234567898"
                className="featured-product-small"
              >
                <div className="featured-product-image-small">
                  <img src={HomeImg3 || "/placeholder.svg"} alt="" />
                </div>
                <div className="featured-product-info-small">
                  <h2 className="featured-product-title-small">
                    Kanalli ventilyator Ulitka
                  </h2>
                  <p className="featured-product-description-small">
                    Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV
                    tipidagi issiqlik
                  </p>
                  <NavLink to="/about">
                    <button className="btn-category">Toifalar</button>
                  </NavLink>
                </div>
              </div>
              <div
                id="home_3ta_card1234567898"
                className="featured-product-small"
              >
                <div className="featured-product-image-small">
                  <img src={HomeImg6 || "/placeholder.svg"} alt="" />
                </div>
                <div className="featured-product-info-small">
                  <h2 className="featured-product-title-small">
                    Qayta yo‘nalgan to‘g‘ri burchakli klapan{" "}
                  </h2>
                  <p className="featured-product-description-small">
                    Shamollatish tizimlari uchun qayta yo‘nalgan to‘g‘ri
                    burchakli klapanlar
                  </p>
                  <NavLink to="/about">
                    <button className="btn-category">Toifalar</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="stats-section" variants={itemVariants}>
          <div className="stats-section">
            <div className="stats-container">
              {counterValues.map((_, index) => (
                <div className="stat-card" key={index}>
                  <h1 className="stat-icon">
                    {index === 0 ? (
                      <i id="index-icon-number" className="fa-solid fa-gears"></i>
                    ) : index === 1 ? (
                      <i className="fa-solid fa-hourglass-half"></i>
                    ) : index === 2 ? (
                      <i className="fa-solid fa-book"></i>
                    ) : (
                      <i id="index-icon-number" className="fa-solid fa-industry"></i>
                    )}
                  </h1>
                  <div className="stat-info">
                    <p className="stat-count">{counts[index]}</p>
                    <p className="stat-description">
                      {index === 0 && "Yildan beri bozorda"}
                      {index === 1 && "Hususiy ishlab chiqarish"}
                      {index === 2 && "Nemis komponentlari"}
                      {index === 3 && "ISO bo'yicha ishlab chiqarish"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="services-section" variants={itemVariants}>
          <motion.h1 className="services-title" variants={itemVariants}>
            Xizmatlar
          </motion.h1>
          <div className="services-section">
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

        <motion.div className="clients-section" variants={itemVariants}>
          <div className="clients-section">
            <div>
              <h1 className="clients-title">
                Bizga ishonch bildirgan mijozlarimiz
              </h1>
            </div>
            <div className="clients-carousel">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                speed={2000}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} className="client-slide">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Carousel ${index + 1}`}
                      className="client-logo"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>

        <motion.div className="new-categories-section" variants={itemVariants}>
          <div className="new-categories-section">
            <div className="new-categories-header">
              <h2 className="new-categories-title">Yangi Toifalar</h2>
              <NavLink to="/about">
                <h2 className="view-categories">Toifalarni Korish</h2>
              </NavLink>
            </div>
          </div>
        </motion.div>

        <motion.div className="product-list" variants={itemVariants}>
          <div className="product-list">
            {currentProducts.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-image">
                  <img src={product.img || "/placeholder.svg"} alt="" />
                </div>
                <div className="product-info">
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
                  <NavLink to="/about">
                    <button className="btn-view-category">
                      Toifani Korish
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="pagination" variants={itemVariants}>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(1)}
              className={`pagination-button ${
                currentPage === 2 ? " active" : ""
              }`}
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`pagination-button ${
                currentPage === 1 ? "active" : ""
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`pagination-button ${
                currentPage === 2 ? "active" : ""
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`pagination-button ${
                currentPage === 1 ? "active" : ""
              }`}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
