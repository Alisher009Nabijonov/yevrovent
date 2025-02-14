import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { IoStopwatch } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import {
  FaPhone,
  FaChevronDown,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../../public/logoogol.png";
import { Toaster, toast } from "react-hot-toast";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsAirplaneFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const NavbarLayout = ({ t, setSearchQuery, selectedCards }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [infoVisible, setInfoVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [numbber, setNumbber] = useState("");
  const [value, setValue] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dropdownRef = useRef(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  const toggleInfo = () => {
    setInfoVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";
    const text = `Ism: ${name}\nEmail: ${email}\nXabar: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Xabar mufaqiyatli jonatildi");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Xabar yuborishda xatolik yuz berdi");
      });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";
    const text = `Tel: ${numbber}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Xabar mufaqiyatli jonatildi");
        setNumbber("");
      })
      .catch((error) => {
        toast.error("Xabar yuborishda xatolik yuz berdi");
      });
  };

  let [bars, setBars] = useState(false);
  let [bars1, setBars1] = useState(false);

  const toggleBars = () => {
    setBars(true);
  };

  const toggleBarsClose = () => {
    setBars(false);
  };

  const toggleBars1 = () => {
    setBars1(true);
  };

  const toggleBarsClose1 = () => {
    setBars1(false);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit2 = (e) => {
    e.preventDefault();

    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";
    const text = `Telefon raqam: ${phoneNumber}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Raqam muvaffaqiyatli yuborildi!");
        setPhoneNumber("");
      })
      .catch((error) => {
        toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
      });
  };

  const handleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    comment: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    }
  };

  const handleSubmit12 = async (e) => {
    e.preventDefault();

    // Validatsiya qilish
    const newErrors = {
      name: form.name.trim() === "",
      phone: form.phone.trim() === "",
      comment: form.comment.trim() === "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Telegram bot ma'lumotlari
    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ"; // BotFather'dan olingan token
    const chatId = "5900769240"; // Chat ID (kanal, guruh yoki foydalanuvchi ID'si)

    const message = `
        📝 Yangi ariza:
        🔹 Ism: ${form.name}
        🔹 Telefon: ${form.phone}
        🔹 Izoh: ${form.comment}
      `;

    try {
      // Telegramga xabar yuborish
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      const result = await response.json();

      if (result.ok) {
        toast("Arizangiz yuborildi!");
        setForm({ name: "", phone: "", comment: "" }); // Formni tozalash
      } else {
        toast(
          "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring."
        );
      }
    } catch (error) {
      console.error("Telegram bilan ulanishda xatolik:", error);
      toast(
        "Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring."
      );
    }
  };

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
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <header>
        <div
          id="nav_987654321234567890__a"
          className="flex items-center justify-between px-5   "
        >
          <div id="nav_987654321" className="flex items-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start text-sm">
              <FaPhone className="mr-2" />
              <a href="tel:+998948895355">+998 97 003 34 55</a>
            </p>
            <p className="flex items-center justify-center sm:justify-start text-sm ">
              <IoStopwatch className="mr-2" />
              {t("nav")}
            </p>
          </div>
          <div
            id="nav_987654321"
            className="flex flex-col items-center sm:flex-row  gap-3 mt-4 sm:mt-0 relative"
          >
            <p className="flex items-center text-sm">
              <IoLocation className="mr-2" />
              {t("nav1")}
            </p>
            <div ref={dropdownRef}>
              <button
                onClick={() => openModal("Product Example")}
                className="border-2 px-4 py-1 rounded-sm text-sm"
              >
                Ariza yuborish
              </button>

              {isModalOpen && selectedProduct && (
                <div
                  id="modal_oyna_form"
                  className="modal fixed inset-0 flex items-center justify-center  z-999 bg-opacity-50 "
                  onClick={closeModal}
                >
                  <div
                    className="modal_content bg-white p-4 rounded-lg relative w-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h1 className="text-2xl mb-10">Ariza Yuborish</h1>
                    <button
                      className="close_modal absolute top-2 right-2  rounded-full"
                      onClick={closeModal}
                    >
                      <h1 className=" cursor-pointer px-1 text-2xl ">X</h1>
                    </button>

                    <form onSubmit={handleSubmit12} className="space-y-6">
                      <motion.div variants={itemVariants}>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          placeholder="Isim"
                          type="text"
                          className={`w-full px-5 py-3 rounded-lg border-2 ${
                            errors.name
                              ? "border-red-500 placeholder-red-500"
                              : "border-indigo-300"
                          } focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "focus:ring-red-500"
                              : "focus:ring-indigo-500"
                          } focus:border-transparent transition duration-300 placeholder-indigo-300 text-indigo-800`}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="Telefon"
                          type="text"
                          className={`w-full px-5 py-3 rounded-lg border-2 ${
                            errors.phone
                              ? "border-red-500 placeholder-red-500"
                              : "border-indigo-300"
                          } focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? "focus:ring-red-500"
                              : "focus:ring-indigo-500"
                          } focus:border-transparent transition duration-300 placeholder-indigo-300 text-indigo-800`}
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <textarea
                          name="comment"
                          value={form.comment}
                          onChange={handleInputChange}
                          placeholder="Izoh"
                          className={`w-full px-5 py-3 rounded-lg border-2 ${
                            errors.comment
                              ? "border-red-500 placeholder-red-500"
                              : "border-indigo-300"
                          } focus:outline-none focus:ring-2 ${
                            errors.comment
                              ? "focus:ring-red-500"
                              : "focus:ring-indigo-500"
                          } focus:border-transparent transition duration-300 resize-none h-36 placeholder-indigo-300 text-indigo-800`}
                        ></textarea>
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
                        >
                          Yuborish
                        </button>
                      </motion.div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Navbar */}
        <div id="nav_blue_responsive_katalash" className="bg-blue-900 ">
          <div className=" flex flex-wrap items-center justify-between  px-4">
            <div
              id="logo_input_btn_nav"
              className="flex items-center gap-10 flex-1"
            >
              <img src={Logo} alt="Logo" className="w-32 sm:w-52" />
              {/* <h3 className="font-bold text-lg text-amber-50">YEВРО-VENT</h3> */}
              <div className="flex-1">
                <div className="rou">
                  <input
                    type="text"
                    placeholder="Qidirish"
                    className="inp"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <NavLink to="/searchitem">
                    {" "}
                    <button className="btn">{t("nav3")}</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <nav
              id="nav_colect_123456"
              className="flex flex-wrap items-center text-amber-50 gap-6 sm:gap-6 mt-4 sm:mt-0"
            >
              <NavLink to="/" className="text-xl">
                {t("nav4")}
              </NavLink>
              <NavLink to="/about" className="text-xl">
                {t("nav5")}
              </NavLink>
              <NavLink to="/aloqa" className="text-xl">
                Aloqa
              </NavLink>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-1 text-xl"
                >
                  {t("nav6")}
                  <FaChevronDown />
                </button>
                {showDropdown && (
                  <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded-md w-48 z-999">
                    <ul className="z-999">
                      <li
                        className="p-2 hover:bg-gray-200"
                        onClick={toggleDropdown}
                      >
                        <NavLink to="/oav">OAV</NavLink>
                      </li>
                      <li
                        className="p-2 hover:bg-gray-200"
                        onClick={toggleDropdown}
                      >
                        <NavLink to="/biz">Biz haqimizda</NavLink>
                      </li>
                      <li
                        className="p-2 hover:bg-gray-200"
                        onClick={toggleDropdown}
                      >
                        <NavLink to="/blog">Blog</NavLink>
                      </li>
                      <li
                        className="p-2 hover:bg-gray-200"
                        onClick={toggleDropdown}
                      >
                        <NavLink to="/hizmatlar">Xizmatlar</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex">
                <NavLink to="/saqlanganlar" className="text-xl">
                  Saqlanganlar
                </NavLink>
                {/* <p>{selectedCards.length}</p> */}
              </div>
              {/* <Dropdown className=" " autoClose="outside">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="drop text-xl"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-red-800 flex flex-col align-middle p-3 z-999">
                  <Dropdown.Item href="#/action-1">
                    <button onClick={() => setLanguage("uz")}>Uzbekcha</button>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <button onClick={() => setLanguage("ru")}>Ruski</button>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <button onClick={() => setLanguage("en")}>English</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </nav>

            <i
              id="bars"
              className="cursor-pointer text-xl bars text-white"
              onClick={toggleBars}
            >
              <FaBarsStaggered />
            </i>
            <i
              id="bars"
              className="cursor-pointer text-xl bars text-white"
              onClick={toggleBars1}
            >
              <FaSearch />
            </i>

            <div
              id="fixed1"
              className={`fixed1 flex items-center top-0 left-0 h-25 w-full bg-blue-900 text-white transition-transform duration-300 ${
                bars1 ? "translate-x-01" : "-translate-x-full1"
              }`}
            >
              <div className="rou1">
                <input
                  type="text"
                  placeholder="Qidirish"
                  className="inp"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <NavLink to="/searchitem">
                  {" "}
                  <button className="btn">{t("nav3")}</button>
                </NavLink>
              </div>
              <div>
                <p className="text-4xl pb-3" onClick={toggleBarsClose1}>
                  x
                </p>
              </div>
            </div>

            <div
              id="fixed"
              className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transition-transform duration-300 ${
                bars ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <p
                className="text-right p-4 cursor-pointer text-3xl"
                onClick={toggleBarsClose}
              >
                x
              </p>
              <h1 id="bars_text" className="text-white text-xl px-5 py-2">
                <NavLink to="/" onClick={toggleBarsClose}>
                  Asosiy
                </NavLink>
              </h1>
              <h1 id="bars_text" className="text-white text-xl px-5 py-2">
                <NavLink to="/about" onClick={toggleBarsClose}>
                  Toifalar
                </NavLink>
              </h1>
              <h1 id="bars_text" className="text-white text-xl px-5 py-2">
                <NavLink to="/biz" onClick={toggleBarsClose}>
                  Biz Haqimizda
                </NavLink>
              </h1>
              <h1 id="bars_text" className="text-white text-xl px-5 py-2">
                <NavLink to="/oav" onClick={toggleBarsClose}>
                  OAV
                </NavLink>
              </h1>
              <h1 id="bars_text" className="text-white text-xl px-5 py-2">
                <NavLink to="/aloqa" onClick={toggleBarsClose}>
                  Aloqa
                </NavLink>
              </h1>
              <h1 id="bars_text" className="text-white text-xl px-5 py-2">
                <NavLink to="/blog" onClick={toggleBarsClose}>
                  Blog
                </NavLink>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-blue-950 text-white py-10">
        <div
          id="salom"
          className="flex items-center justify-between my-20 bg-amber-50 text-black py-6 px-6 rounded-4xl"
        >
          <div>
            <h2 className="text-2xl">Telefon Raqam qoldirish</h2>
          </div>
          <div className="bg-yellow-400  px-8 rounded-full">
            <form
              id="footer_input_btn_dav"
              className="flex"
              onSubmit={handleSubmit1}
            >
              <PhoneInput
                country={"uz"}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                inputStyle={{
                  borderRadius: "8px",
                  border: "2px solid black",
                  width: "240px",
                  background: "none",
                  border: "none",
                }}
                buttonStyle={{
                  background: "none",
                  border: "none",
                }}
                containerStyle={{
                  borderRadius: "8px",
                 
                }}
              />
              <button type="submit" className="text-2xl cursor-pointer">
                <FiSend />
              </button>
            </form>
          </div>
          <div>
            <h2>
              <h1 className="text-xl"> Telefon:</h1>{" "}
              <a href="tel: +998 77 324 30 09" className="flex items-center">
                <FaHeadphonesAlt className="text-orange-400" />
                (+998) 77 324 30 09
              </a>
            </h2>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 mt-20">
          <div>
            <img src={Logo} alt="Logo" className="w-32 sm:w-52" />
            {/* <h3 className="font-bold text-lg">YEВРО-VENT</h3> */}
            <p className="mt-2 text-sm">{t("nav8")}</p>
            <div className="flex space-x-4 mt-4">
              <FaGoogle className="text-2xl" />
              <FaFacebook className="text-2xl" />
              <FaInstagram className="text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">{t("nav9")}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <h1>
                <NavLink to="/" className="text-xl">
                  {t("nav4")}
                </NavLink>
              </h1>
              <h1>
                <NavLink to="/about" className="text-xl">
                  {t("nav5")}
                </NavLink>
              </h1>
              <h1>
                <NavLink to="/blog" className="text-xl">
                  Blog
                </NavLink>
              </h1>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">{t("nav10")}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <h1>
                {" "}
                <NavLink to="/oav" className="text-xl">
                  OAV
                </NavLink>
              </h1>
              <h1>
                {" "}
                <NavLink to="/biz" className="text-xl">
                  Biz haqimizda
                </NavLink>
              </h1>
              <h1>
                {" "}
                <NavLink to="/hizmatlar" className="text-xl">
                  Xizmatlar
                </NavLink>
              </h1>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Manzil</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <p className="mt-2 text-xl">{t("nav8")}</p>
              <a href="tel:+998948895355" className="flex items-center">
                Telefon raqam: (+998) 77 324 30 09
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NavbarLayout;
