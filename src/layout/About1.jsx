import React, { useState } from "react";
import { homeItem1 } from "../Malumotlar1";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ToifaLogo from "../assets/10000.png";
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

const About = ({ handleSelectCard }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(homeItem1);

  const handleSearch = () => {
    const filtered = homeItem1.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <>
      <div className="toifa_about_main">
        <div className="text-center">
          <h1 className="text-4xl mt-8">Mahsulotlar Katalogi</h1>
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
        <div id="toifalat1" className="flex w-full pl-5">
          <div id="toifala1_link" className="w-70 my-10 p-5 h-240">
            <div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(1)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />

                  <h1> Barchasi</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
            </div>
            <div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(2)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />

                  <h1> Vemtilatsion Mahsulotlar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
            </div>

            <div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(3)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1> Ventilatorlar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(4)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1> Klapnlar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(5)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1> Shovqin Yutgich</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(6)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1> Ventilyatsion panjaralar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(7)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1> Isitish Uskunalari</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(8)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1>Kanal Uskunalari</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(9)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1>Isiqlik Almashinish</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(10)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1>Konditsanerlar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(11)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />
                  <h1> Muzlatgich Uskunalari</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(12)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />

                  <h1>Aspiratsiya Uskunalari</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(13)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />

                  <h1> Filterlar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
              <div>
                <h1
                  className="flex items-center"
                  onClick={() => handleCategoryClick(14)}
                >
                  <img src={ToifaLogo} alt="" className="w-6" />

                  <h1> Qo'shimcha Jihozlar</h1>
                </h1>
                <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
              </div>
            </div>
          </div>
          <div id="toifa_card_cata_oraptur_div" className="w-full px-10 py-8">
            <div
              id="mahsulot_holadi_va_search"
              className="w-full flex justify-between items-center pr-5"
            >
              <div className="f-full text-start">
                <div
                  id="grid_list_link"
                  className="flex items-center w-full text-start"
                >
                  <div className="text-center">
                    <h2 className="text-xl my-3 text-center">
                      Malumot holati:
                    </h2>
                  </div>
                  <div>
                    <NavLink to="/about">
                      <h2>
                        <BsFillGrid3X3GapFill />
                      </h2>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="/about1">
                      <h2>
                        <FaListUl />
                      </h2>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div id="toifa_search_btn_form" className="w-1/2">
                <form
                  className="flex w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                >
                  <input
                    type="search"
                    placeholder="Qidiruv"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-2 border-gray-400 py-2 px-2 rounded-xl bg-amber-50"
                  />
                  <button
                    type="submit"
                    className="bg-blue-800 cursor-pointer rounded-xl py-2 border-gray-400 px-6 text-amber-50 text-2xl"
                  >
                    <IoSearchSharp />
                  </button>
                </form>
              </div>
            </div>

            {selectedCategory === 1 && (
              <div>
                <p className="text-xl">
                  Malumotlar soni: {filteredItems.length}
                </p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {filteredItems.slice(0, 12).map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="toifalar1_card1 flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink to={`/batafsil/${item.id}`}>
                            <button className="cursor-pointer ml-2 mt-2 border-2 py-2 px-4 text-xl rounded-sm">
                              <IoMdEye />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 2 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem12.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem12.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 3 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem13.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem13.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === 4 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem14.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem14.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 5 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem15.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem15.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 6 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem16.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem16.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 7 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem17.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem17.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 8 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem18.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem18.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 9 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem19.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem19.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 10 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem20.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem20.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCategory === 11 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem21.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem21.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 12 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem22.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem22.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 13 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem23.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem23.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === 14 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem24.length}</p>
                <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
                  {homeItem24.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg my-4 p-4 transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="object-cover rounded-md w-full h-auto"
                        />
                      </div>
                      <div className="w-full md:w-2/3 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4">
                          {item.title}
                        </h2>
                        <div className="flex space-x-2">
                          <NavLink href={`/batafsil/${item.id}`}>
                            <button className="border-2 py-2 px-4 rounded-md transition mt-2 ease-in-out">
                              <IoMdEye className="text-xl" />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleSelectCard(item)}
                            className=" py-2 px-4 rounded-md transition duration-300 ease-in-out"
                          >
                            <i className="fa-solid fa-bookmark cursor-pointer    border-2 py-2 px-4 text-xl rounded-sm"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div
              id="toifa_pagination_btn_son"
              className="flex text-center w-full pl-15 pb-10 gap-5"
            >
              <div id="qqqqqq" className="flex ">
                <h1
                  onClick={() => handleCategoryClick(2)}
                  className={`cursor-pointer text-2xl  border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 2
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  1
                </h1>
                <h1
                  onClick={() => handleCategoryClick(3)}
                  className={`cursor-pointer text-2xl  border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 3
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  2
                </h1>
              </div>
              <div id="qqqqqq" className="flex">
                <h1
                  onClick={() => handleCategoryClick(4)}
                  className={`cursor-pointer text-2xl border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 4
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  3
                </h1>
                <h1
                  onClick={() => handleCategoryClick(5)}
                  className={`cursor-pointer text-2xl border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 5
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  4
                </h1>
              </div>
              <div id="qqqqqq" className="flex">
                <h1
                  onClick={() => handleCategoryClick(6)}
                  className={`cursor-pointer text-2xl border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 6
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  5
                </h1>
                <h1
                  onClick={() => handleCategoryClick(7)}
                  className={`cursor-pointer text-2xl border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 7
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  6
                </h1>
              </div>
              <div id="qqqqqq" className="flex">
                <h1
                  onClick={() => handleCategoryClick(8)}
                  className={`cursor-pointer text-2xl border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 8
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  7
                </h1>
                <h1
                  onClick={() => handleCategoryClick(9)}
                  className={`cursor-pointer text-2xl border-2 rounded-2xl border-black p-3 mr-3 px-4 py-2  ${
                    selectedCategory === 9
                      ? "bg-blue-600 text-amber-50 border-none"
                      : ""
                  }`}
                >
                  8
                </h1>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default About;
