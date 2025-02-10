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

  return (
    <>
      <div id="home_main" className=" mx-auto px-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div id="home_carusel" className="flex items-center px-20">
              <div className=" mx-auto py-10">
                <h1 className="text-4xl">Elektr bilan isitish qurilmasi UEO</h1>
                <p className="my-10">
                  Elektr isitish qurilmasi ( issiqlik to‘pi) omborxona, ishlab
                  chiqarish binolari va boshqalar
                </p>
                <NavLink to="/swiper/1">
                  <button className="border-2 py-1 px-8 rounded-sm">
                    Batafsil
                  </button>
                </NavLink>
              </div>
              <div id="swiper_card_salom_img_kata" className="h-96 my-10">
                <img src={HomeImg2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="home_carusel" className="flex items-center px-20">
              <div className=" mx-auto py-10">
                <h1 className="text-4xl">Elektr bilan isitish qurilmasi UEO</h1>
                <p className="my-10">
                  Elektr isitish qurilmasi ( issiqlik to‘pi) omborxona, ishlab
                  chiqarish binolari va boshqalar
                </p>
                <NavLink to="/swiper/2">
                  <button className="border-2 py-1 px-8 rounded-sm">
                    Batafsil
                  </button>
                </NavLink>
              </div>
              <div id="swiper_card_salom_img_kata" className="h-96 my-10">
                <img src={HomeImg1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div id="home_carusel" className="flex items-center px-20">
              <div className=" mx-auto py-10">
                <h1 className="text-4xl">Kanalli ventilyator Ulitka</h1>
                <p className="my-10">
                  Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi
                  issiqlik
                </p>
                <NavLink to="/swiper/3">
                  <button className="border-2 py-1 px-8 rounded-sm">
                    Batafsil
                  </button>
                </NavLink>
              </div>
              <div id="swiper_card_salom_img_kata" className="h-96 my-10">
                <img src={HomeImg3} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button onClick={handleLeftClick} className="p-2 text-2xl">
              <FaArrowLeft />
            </button>
            <button onClick={handleRightClick} className="p-2 text-2xl">
              <FaArrowRight />
            </button>
          </div>
          <div className="carousel-wrapper">
            <div
              className="carousel "
              style={{
                transform: `translateX(-${visibleStart *
                  (47 / visibleCount)}%)`,
              }}
            >
              {homeItem.map((item) => (
                <div
                  key={item.id}
                  id="card"
                  className="w-1/3  flex-shrink-0 mx-2 border-2 rounded-2xl items-center border-gray-400"
                >
                  <div className="w-60 ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-40 h-40 object-cover "
                    />
                  </div>
                  <div className="text-center w-60">
                    <h2 className="text-2xl">{item.title}</h2>
                    <p className="text-gray-500 my-1">(6 items)</p>
                    <NavLink to={`information/${item.id}`}>
                      <button className="mt-6 border-2 py-1 px-4 text-xl rounded-sm">
                        Batafsil
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="home_cata_img_text" className="flex w-full ">
          <div className="w-380 my-10">
            <img src={HomeKata} alt="" className="w-full" />
          </div>
          <div className="my-10">
            <h1 className="text-4xl p-4">Yevro-vent kompaniyasi</h1>
            <p className="text-gray-600 px-2 my-4">
              <span className="text-black text-xl">Yevro-vent MChJ</span> 2014
              yilda tashkil etilgan.
            </p>
            <p className="text-gray-600 px-2 my-">
              Korxonaning asosiy faoliyati ventilyatsiya va konditsioner
              tizimlari uchun sanoat uskunalarini ishlab chiqish, tayyorlash va
              sotishdan iborat.
            </p>
            {/* <p className="text-gray-600 px-2 my-4">Bizning kompaniya birinchilardan bo'lib shamollatish uskunalari ishlab chiqarishni o'zlashtirdi va hozirda O'zbekiston Respublikasi bozorida yetakchi ishlab chiqaruvchilardan biri hisoblanadi.</p> */}
            <p className="text-gray-600 px-2 my-2">
              Ko'p yillik muvaffaqiyatli ish tajribasi bizga O'zbekiston
              Respublikasi bozorining eng professional korxonalaridan biriga
              aylanish huquqini beradi. Bu esa o'z navbatida hamkorlar va
              iste'molchilarning e'tirofini tasdiqlaydi.
            </p>
            <NavLink to="/biz">
              <button className="border-2 rounded-xl py-1 px-6 mt-8 border-gray-400">
                Batafsil
              </button>
            </NavLink>
          </div>
        </div>

        <div
          id="home_3ta_card"
          className="flex items-center  mx-auto justify-between mb-20"
        >
          <div
            id="home_3ta_card1234567898"
            className="h-114 w-190 flex border-2 p-6  rounded-sm border-gray-400"
          >
            <div>
              <img src={HomeImg1} alt="" className="" />
            </div>
            <div>
              <h2 className="text-2xl">Elektr bilan isitish qurilmasi UEO</h2>
              <p className="my-12 text-1xl">
                Elektr isitish qurilmasi ( issiqlik to‘pi) omborxona, ishlab
                chiqarish binolari va boshqalar
              </p>
              <div className="flex ">
                <div class="rating">
                  <input value="5" name="rating" id="star5" type="radio" />
                  <label for="star5"></label>
                  <input value="4" name="rating" id="star4" type="radio" />
                  <label for="star4"></label>
                  <input value="3" name="rating" id="star3" type="radio" />
                  <label for="star3"></label>
                  <input value="2" name="rating" id="star2" type="radio" />
                  <label for="star2"></label>
                  <input value="1" name="rating" id="star1" type="radio" />
                  <label for="star1"></label>
                </div>
              </div>

              <NavLink to="/about">
                <button className="text-3xl border-2 rounded-xl py-1 px-6 border-gray-400">
                  Toifalar
                </button>
              </NavLink>
            </div>
          </div>
          <div id="home_3ta_card12345678987654321234" className="w-190">
            <div
              id="home_3ta_card1234567898"
              className="h-56 flex border-2 p-6 rounded-sm border-gray-400"
            >
              <div>
                <img src={HomeImg1} alt="" />
              </div>
              <div>
                <h2 className="text-2xl">Elektr bilan isitish qurilmasi UEO</h2>
                <p className="my-5">
                  Elektr isitish qurilmasi ( issiqlik to‘pi) omborxona, ishlab
                </p>
                <NavLink to="/about">
                  <button className="text-3xl border-2 rounded-xl py-1 px-6 border-gray-400">
                    Toifalar
                  </button>
                </NavLink>
              </div>
            </div>
            <div
              id="home_3ta_card1234567898"
              className="h-56 flex border-2 my-10 p-6 rounded-sm border-gray-400 "
            >
              <div>
                <img src={HomeImg1} alt="" />
              </div>
              <div>
                <h2 className="text-2xl">Elektr bilan isitish qurilmasi UEO</h2>
                <p className="my-5">
                  Elektr isitish qurilmasi ( issiqlik to‘pi) omborxona, ishlab
                </p>
                <NavLink to="/about">
                  <button className="text-3xl border-2 rounded-xl py-1 px-6 border-gray-400">
                    Toifalar
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-2xl">
          <div className="my-10">
            <div
              id="status"
              className="flex text-center justify-between w-full rounded-xl py-5 px-4"
            >
              {counterValues.map((_, index) => (
                <div
                  className="af_card text-center flex  items-center"
                  key={index}
                >
                  <h1 className="text-5xl mr-4">
                    {index === 0 ? (
                      <i class="fa-solid fa-gears text-red-400"></i>
                    ) : index === 1 ? (
                      <i class="fa-solid fa-hourglass-half text-blue-800"></i>
                    ) : index === 2 ? (
                      <i class="fa-solid fa-book text-blue-600"></i>
                    ) : (
                      <i class="fa-solid fa-industry text-green-500"></i>
                    )}
                  </h1>
                  <div className="">
                    <p className="text-3xl text-start">{counts[index]}</p>
                    <p className="text-sm">
                      {index === 0 && "Yildan beri bozorda"}
                      {index === 1 && "Hususiy ishlab chiqarish"}
                      {index === 2 && "Nemis komponentlari"}
                      {index === 3 && "ISO bo‘yicha ishlab chiqarish"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

        <div className="jjjjjjjj">
          <div>
            <h1 className="text-3xl text-center mt-20">
              Bizga ishonch bildirgan mijozlarimiz
            </h1>
          </div>
          <div className="my-20 mt-20 flex items-baseline gap-10 h-30 ">
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
                <SwiperSlide
                  key={index}
                  className="flex items-center gap-30 justify-center "
                >
                  <img
                    src={img}
                    alt={`Carousel ${index + 1}`}
                    className="w-40 h-40 object-contain flex mx-10 "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-between my-10">
          <div>
            <h2 className="text-3xl mt-20">Yangi Toifalar</h2>
          </div>
          <div>
            <NavLink to="/about">
              <h2 className="text-3xl mt-20">Toifalarni Korish</h2>
            </NavLink>
          </div>
        </div>

        <div id="home_pagination_page" className="flex  space-y-4">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="flex py-3 px-3 border-2 rounded-xl border-gray-400"
            >
              <div>
                <img
                  src={product.img || "/placeholder.svg"}
                  alt=""
                  className="h-70 w-300 rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl mb-6">{product.title}</h2>
                <p className="mb-4">{product.description}</p>
                <NavLink to="/about">
                  <button className="text-3xl border-2 py-1 px-6 rounded-xl border-gray-400">
                    Toifani Korish
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 border rounded ${
              currentPage === 1 ? "bg-gray-200" : ""
            }`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 border rounded ${
              currentPage === 2 ? "bg-gray-200" : ""
            }`}
          >
            2
          </button>
        </div>
      </div>
    </>
  );
}
