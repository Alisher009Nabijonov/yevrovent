import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";

const Wishlist = ({ selectedCards }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Saqlanganlar</h1>
        <div className="flex items-center justify-center space-x-2 text-lg">
          <NavLink
            to="/"
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <span className="flex items-center">
              Asosiy
              <FaChevronLeft className="ml-2 text-orange-400" />
            </span>
          </NavLink>
          <span className="text-gray-600">Saqlanganlar</span>
        </div>
      </div>

      <div className="wishlist">
        {selectedCards.length === 0 ? (
          <div className="text-center py-16 bg-gray-100 rounded-lg">
            <h1 className="text-2xl text-gray-600">
              Hozircha hech qanday ma'lumot saqlanmagan
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  className="w-50 h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
