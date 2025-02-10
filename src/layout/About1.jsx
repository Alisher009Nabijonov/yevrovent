import React, { useState } from "react";
import { homeItem1 } from "../Malumotlar1";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";

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
      <div className="text-center">
        <h1 className="text-4xl mt-8">Mahsulotlar Katalogi</h1>
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
          <h3 className="text-2xl">Mahsulotlar Kataolgi</h3>
        </div>
      </div>
      <div id="toifalat1" className="flex w-full pl-10">
        <div id="toifala1_link" className="w-70 my-10 p-5 h-180">
          <div>
            <h1 className="" onClick={() => handleCategoryClick(2)}>
              Vemtilatsion Mahsulotlar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(3)}>
              Ventilatorlar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(4)}>
              Klapnlar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(5)}>
              Shovqin Yutgich
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(6)}>
              Ventilyatsion panjaralar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(7)}>
              Isitish Uskunalari
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(8)}>
              Kanal Uskunalari
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(9)}>
              Isiqlik Almashinish
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(10)}>
              Konditsanerlar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(11)}>
              Muzlatgich Uskunalari
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(12)}>
              Aspiratsiya Uskunalari
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(13)}>
              Filterlar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
          <div>
            <h1 className="" onClick={() => handleCategoryClick(14)}>
              Qo'shimcha Jihozlar
            </h1>
            <div id="cccccc" className="w-full bg-black h-0.5 mb-5"></div>
          </div>
        </div>

        <div id="toifa_card_cata_oraptur_div" className="w-full px-10 py-10">
          <div className="">
            <form
              className="flex "
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
          <div id="grid_list_link" className="flex items-center">
            <div>
              <h2 className="text-xl my-3">Malumot holati:</h2>
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

          {selectedCategory === 1 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(0, 12).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 2 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(12, 20).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 3 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(20, 26).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}

          {selectedCategory === 4 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(38, 43).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 5 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(27, 30).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 6 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(30, 35).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 7 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(43, 48).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 8 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(48, 67).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 9 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(67, 69).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 10 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(69, 70).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}

          {selectedCategory === 11 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(70, 72).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 12 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(72, 74).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 13 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(74, 76).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
          )}
          {selectedCategory === 14 && (
            <div id="toifa_card_cata2" className="max-w-3xl ml-0 mr-auto">
              {filteredItems.slice(76, 78).map((item) => (
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
                    <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
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
    </>
  );
};

export default About;
