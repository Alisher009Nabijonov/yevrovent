import {
  FaShoppingCart,
  FaHeart,
  FaSearchPlus,
  FaSearch,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaComment } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
const SearchItem12 = ({ filteredCards, handleSelectCard }) => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mt-8">Qidirish</h1>
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
          <h3 className="text-2xl">Qidirish</h3>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center  bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  className="w-50 h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate ">
                    {item.title}
                  </h2>
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
        ) : (
          <div className="flex flex-col items-center justify-center h-64 bg-gray-100 rounded-lg">
            <FaSearch className="text-5xl text-gray-400 mb-4" />
            <h1 className="text-xl text-gray-600 text-center">
              The information you are looking for was not found.
            </h1>
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default SearchItem12;
