import React, { useState } from "react";
import { homeItem1 } from "../Malumotlar1";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
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
        </motion.div>
        <div id="toifalat1" className="flex w-full pl-10">
          <div id="toifala1_link" className="w-70 my-10 p-5 h-210">
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
          <div
            id="toifa_card_cata_oraptur_div"
            className="w-full px-10 py-5 flex flex-col"
          >
            <div className="w-full flex justify-between">
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
              <div className="w-1/2">
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
            <div>
              {selectedCategory === 1 && (
                <div>
                  <p className="text-xl">
                    Malumotlar soni: {filteredItems.length}
                  </p>

                  <div id="toifa_card_cata">
                    {filteredItems.slice(0, 12).map((item) => (
                      <div
                        key={item.id}
                        id="card1"
                        className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                      >
                        <div>
                          <img
                            src={item.img || "/placeholder.svg"}
                            alt={item.title}
                            className=" pl-15 object-cover flex items-cems-items-startify-center"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl">{item.title}</h2>
                          <div className="flex justify-center">
                            <div>
                              <NavLink to={`/batafsil/${item.id}`}>
                                <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                  <IoMdEye />
                                </button>
                              </NavLink>
                              {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                        <NavLink to="/coment">
                        <FaComment />
                        </NavLink>
                        </button> */}
                            </div>
                            <div>
                              <button onClick={() => handleSelectCard(item)}>
                                <i className="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {selectedCategory === 2 && (
              <div>
                <p className="text-xl"> Malumotlar soni: {homeItem12.length}</p>
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem12.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-15 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem13.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-15 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem14.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-15 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem15.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-15 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem16.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-15 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem17.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-15 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem18.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-10 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem19.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-10 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem20.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-10 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem21.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" pl-10 object-cover flex items-cems-items-startify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem22.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" h-60 pl-18 object-cover flex items-start justify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>{" "}
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem23.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" h-60 pl-18 object-cover flex items-start justify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
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
                <div id="toifa_card_cata" className="mb-10">
                  {homeItem24.map((item) => (
                    <div
                      key={item.id}
                      id="card1"
                      className="text-center w-90 h-120 justify-between mx-2 rounded-sm my-3 p-3"
                    >
                      <div>
                        <img
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          className=" h-60 pl-18 object-cover flex items-start justify-center"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl">{item.title}</h2>
                        <div className="flex justify-center">
                          <div>
                            <NavLink to={`/batafsil/${item.id}`}>
                              <button className="cursor-pointer ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                                <IoMdEye />
                              </button>
                            </NavLink>
                            {/* <button className="cursor-pointer ml-4 mt-6 border-2 py-2 px-4 text-xl rounded-sm">
                          <NavLink to="/coment">
                            <FaComment />
                          </NavLink>
                        </button> */}
                          </div>
                          <div>
                            <button onClick={() => handleSelectCard(item)}>
                              <i class="fa-solid fa-bookmark cursor-pointer  ml-2 mt-6 border-2 py-2 px-4 text-xl rounded-sm"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <motion.div variants={itemVariants}>
              <div
                id="toifa_pagination_btn_son"
                className="flex text-center w-full  pb-10 gap-5"
              >
                <div id="qqqqqq" className="flex ">
                  <button
                    onClick={() => handleCategoryClick(selectedCategory - 1)}
                    disabled={selectedCategory === 2} // Birinchi sahifada "Prev" tugmasini o'chirib qo'yamiz
                    className={`text-sm border-2 rounded-full p-3 px-5 mr-3 ${
                      selectedCategory === 2
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer border-black"
                    }`}
                  >
                    <FaArrowLeft />
                  </button>
                  <h1
                    onClick={() => handleCategoryClick(2)}
                    className={`cursor-pointer text-sm  border-2 rounded-full border-black p-3 px-5 mr-3   ${
                      selectedCategory === 2
                        ? "bg-blue-600 text-amber-50 border-none"
                        : ""
                    }`}
                  >
                    1
                  </h1>
                  <h1
                    onClick={() => handleCategoryClick(3)}
                    className={`cursor-pointer text-sm  border-2 rounded-full border-black p-3 px-5 mr-3   ${
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
                    className={`cursor-pointer textsml border-2 rounded-full border-black p-3 px-5 mr-3   ${
                      selectedCategory === 4
                        ? "bg-blue-600 text-amber-50 border-none"
                        : ""
                    }`}
                  >
                    3
                  </h1>
                  <h1
                    onClick={() => handleCategoryClick(5)}
                    className={`cursor-pointer textsml border-2 rounded-full border-black p-3 px-5 mr-3   ${
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
                    className={`cursor-pointer textsml border-2 rounded-full border-black p-3 px-5 mr-3   ${
                      selectedCategory === 6
                        ? "bg-blue-600 text-amber-50 border-none"
                        : ""
                    }`}
                  >
                    5
                  </h1>
                  <h1
                    onClick={() => handleCategoryClick(7)}
                    className={`cursor-pointer textsml border-2 rounded-full border-black p-3 px-5 mr-3   ${
                      selectedCategory === 7
                        ? "bg-blue-600 text-amber-50 border-none"
                        : ""
                    }`}
                  >
                    6
                  </h1>
                </div>
                <div id="qqqqqq" className="flex">
                  <button
                    onClick={() => handleCategoryClick(selectedCategory + 1)}
                    disabled={selectedCategory === 9} // Oxirgi sahifada "Next" tugmasini o'chirib qo'yamiz
                    className={`text-sm border-2 rounded-full p-3 px-5 mr-3 ${
                      selectedCategory === 7
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer border-black"
                    }`}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <Outlet />
        </div>
      </motion.div>
    </>
  );
};

export default About;
