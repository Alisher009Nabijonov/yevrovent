import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoLocation } from "react-icons/io5";
import { IoStopwatch } from "react-icons/io5";
import { FaPhone, FaChevronDown, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import Logo from '../assets/logo.jpg';
import { Toaster, toast } from "react-hot-toast"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BsAirplaneFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";


const NavbarLayout = ({ setLanguage, language, t }) => {


  const [showDropdown, setShowDropdown] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [numbber, setNumbber] = useState('');



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
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  const toggleInfo = () => {
    setInfoVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const botToken = '7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ';
    const chatId = '5900769240';
    const text = `Ism: ${name}\nEmail: ${email}\nXabar: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Xabar mufaqiyatli jonatildi')
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        toast.error('Xabar yuborishda xatolik yuz berdi')
      });
  };


  const handleSubmit1 = (e) => {
    e.preventDefault();

    const botToken = '7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ';
    const chatId = '5900769240';
    const text = `Tel: ${numbber}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Xabar mufaqiyatli jonatildi')
        setNumbber('');
      })
      .catch((error) => {
        toast.error('Xabar yuborishda xatolik yuz berdi')
      });
  };





  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <header>
        {/* Top Info Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between my-4  mx-auto px-4">
          <div id='nav_987654321' className="flex sm:text-left">
            <p className="flex items-center justify-center sm:justify-start text-sm">
              <FaPhone className="mr-2" />+998 97 003 34 55
            </p>
            <p className="flex items-center justify-center sm:justify-start text-sm ">
              <IoStopwatch className="mr-2" />{t("nav")}
            </p>
          </div>
          <div id='nav_987654321' className="flex flex-col sm:flex-row items-center gap-3 mt-4 sm:mt-0 relative">
            <p className="flex items-center text-sm">
              <IoLocation className="mr-2" />{t("nav1")}
            </p>
            <div ref={dropdownRef}>
              <button
                onClick={toggleInfo}
                className="border-2 px-4 py-1 rounded-sm text-sm"
              >
               {t("nav2")}
              </button>
              {infoVisible && (
                <div className="z-99  absolute right-6 top-full mt-2 p-6 bg-white text-black shadow-lg rounded-md w-74 transition-opacity duration-300 ease-in-out opacity-100">
                <div className='flex pb-6 items-center justify-between'>
                <p className="text-2xl ">
                    Ariza Qoldirish
                  </p>

                  <p onClick={toggleInfo} className='text-2xl cursor-pointer'>X</p>
                </div>
                  <form className="mt-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                      <input
                        required
                        type="text"
                        placeholder="Ismingiz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded-md px-2 py-1"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-md px-2 py-1"
                      />
                      <textarea
                        required
                        placeholder="Xabar"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="border rounded-md px-2 py-1"
                      ></textarea>
                      <button
                        type="submit"
                        className="bg-blue-900 text-white py-1 rounded-md"
                      >
                        Yuborish
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Navbar */}
        <div className="bg-blue-900 py-4">
          <div className=" flex flex-wrap items-center justify-between  px-4">
            <div className="flex items-center gap-10 flex-1">
              {/* <img src={Logo} alt="Logo" className="w-32 sm:w-52" /> */}
              <h3 className="font-bold text-lg text-amber-50">YEВРО-VENT</h3>
              <div className="flex-1">
                <div className="rou">
                  <input type="text" placeholder="Qidirish" className="inp" />
                  <button className="btn">{t("nav3")}</button>
                </div>
              </div>
            </div>
            <nav id='nav_colect_123456' className="flex flex-wrap items-center text-amber-50 gap-6 sm:gap-6 mt-4 sm:mt-0">
              <NavLink to="/" className="text-xl">{t("nav4")}</NavLink>
              <NavLink to="/about" className="text-xl">{t("nav5")}</NavLink>
              <NavLink to="/biz" className="text-xl">{t("nav7")}</NavLink>
              <div className="relative" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="flex items-center gap-1 text-xl">
                  {t("nav6")}<FaChevronDown />
                </button>
                {showDropdown && (
                  <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded-md w-48 z-999">
                    <ul className='z-999'>
                      <li className="p-2 hover:bg-gray-200" onClick={toggleDropdown}>
                        <NavLink to="/oav">OAV</NavLink>
                      </li>
                      <li className="p-2 hover:bg-gray-200" onClick={toggleDropdown}>
                        <NavLink to="/aloqa">Aloqa</NavLink>
                      </li>
                      <li className="p-2 hover:bg-gray-200" onClick={toggleDropdown}>
                        <NavLink to="/sahifalar">Third Page</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Dropdown className=' '  autoClose="outside">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop text-xl'>
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className='bg-red-800 flex flex-col align-middle p-3 z-999'>
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
              </Dropdown>
          
            </nav>
              <h2 id='bars' className='text-xl'><FaBarsStaggered /></h2>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10">
      <div id='salom' className='flex items-center justify-between my-20 bg-amber-50 text-black py-6 px-6 rounded-4xl'>
        <div>
          <h2 className='text-2xl'>Aloqa Uchun Tel Raqam</h2>
        </div>
        <div className='bg-yellow-400 py-2 px-8 rounded-xl'>
          <form onSubmit={handleSubmit1}>
            
            <input value={numbber} onChange={(e) => setNumbber(e.target.value)} type="number" required className=' rounded-xl p-2 px-6 mr-3' placeholder='+998'/>
            <button type='submit' className='text-2xl cursor-pointer'><BsAirplaneFill /></button>
          </form>
        </div>
        <div>
          <h2>Tel: <a href="tel: +998 77 324 30 09">(+998) 77 324 30 09</a></h2>
        </div>
      </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 mt-20">
          <div>
            <h3 className="font-bold text-lg">YEВРО-VENT</h3>
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
              <li>Konditsionerlar</li>
              <li>Ventilyatorlar</li>
              <li>Isitish tizimlari</li>
              <li>Sovutish tizimlari</li>
              <li>Montaj ishlari</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">{t("nav10")}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Biz haqimizda</li>
              <li>Bog'lanish</li>
              <li>Qaytarish siyosati</li>
              <li>Maxfiylik siyosati</li>
              <li>To'lov siyosati</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">{t("nav11")}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Yangiliklar</li>
              <li>Xizmatlar</li>
              <li>Bizning siyosat</li>
              <li>Mijozlarga xizmat</li>
              <li>Ko'p so'raladigan savollar</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NavbarLayout;
