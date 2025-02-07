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
    <div className=" mx-auto px-10">
      <div className="flex gap-4 my-4">
        <NavLink to="/">
          <h1 className="text-2xl flex items-center">
            <FaChevronLeft className="text-orange-400 mr-1" />
            Asosiy
          </h1>
        </NavLink>
        <NavLink to="/about">
          <h1 className="text-2xl flex items-center">
            <FaChevronLeft className="text-orange-400 mr-1" />
            Toifalar
          </h1>
        </NavLink>
      </div>
      <div className="flex border-2 rounded-xl p-6">
        <div className="w-150 pr-6">
          <img src={product.img } alt={product.title} className="w-full object-cover rounded-lg" />
        </div>
        <div className="w-300 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl mb-6">{product.title}</h1>
            <p className="text-xl mb-6">{product.info}</p>
          </div>
          <NavLink to="/about">
            <button className="border-2 py-2 px-6 rounded-xl flex items-center text-xl hover:bg-orange-100 transition-colors">
              <FaArrowLeft className="text-orange-400 mr-2" />
              Qaytish
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Batafsil

