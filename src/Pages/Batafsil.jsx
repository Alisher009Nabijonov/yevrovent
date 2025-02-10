import { homeItem1 } from "../Malumotlar1"
import { NavLink, useParams } from "react-router-dom"
import { FaArrowLeft, FaChevronLeft } from "react-icons/fa6"

const Batafsil = () => {
  const { id } = useParams()
  const product = homeItem1.find((pro) => pro.id == id)

  if (!product) {
    return <p>Mahsulot topilmadi</p>
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-wrap gap-4 mb-6">
      <NavLink
        href="/"
        className="text-lg sm:text-xl flex items-center text-gray-600 hover:text-gray-900 transition duration-300"
      >
        <FaChevronLeft className="text-orange-400 mr-1" />
        Asosiy
      </NavLink>
      <NavLink
        href="/about"
        className="text-lg sm:text-xl flex items-center text-gray-600 hover:text-gray-900 transition duration-300"
      >
        <FaChevronLeft className="text-orange-400 mr-1" />
        Toifalar
      </NavLink>
    </div>
    <div className="flex flex-col md:flex-row border-2 border-gray-200 rounded-xl p-4 sm:p-6">
      <div className="w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0">
        <img
          src={product.img || "/placeholder.svg"}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">{product.info}</p>
        </div>
        <NavLink href="/about" className="self-start">
          <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white py-2 px-6 rounded-xl flex items-center text-lg sm:text-xl transition duration-300">
            <FaArrowLeft className="mr-2" />
            Qaytish
          </button>
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default Batafsil

