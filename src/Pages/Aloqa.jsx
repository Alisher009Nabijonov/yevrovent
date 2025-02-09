import React, { useState } from "react";
import oav1 from "../assets/500.jpg";
import oav2 from "../assets/501.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Oav = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="text-center">
        <h1 className="text-4xl mt-8">MEDIA</h1>
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
          <h3 className="text-2xl">Media</h3>
        </div>
      </div>
      <div className="px-10   gap-10">
        <button
          className={` rounded-t-sm py-2 px-8 text-xl   cursor-pointer border-1  ${
            selectedCategory === 1
              ? "bg-blue-600 text-amber-50 border-none"
              : ""
          }`}
          onClick={() => handleCategoryClick(1)}
        >
          Mijozlar Uchun
        </button>
        <button
          className={` rounded-t-sm py-2 px-8 text-xl   cursor-pointer border-1  ${
            selectedCategory === 2
              ? "bg-blue-600 text-amber-50 border-none"
              : ""
          }`}
          onClick={() => handleCategoryClick(2)}
        >
          Ariza Beruvchilar uchun
        </button>
        <hr className="px-10" />
      </div>
      <div>
        {selectedCategory === 1 && (
          <div id="aloqa_glavniy" className="flex px-10">
            <div id="aloqa" className="w-1/2 p-3 rounded-xl">
              <h1 className="text-4xl p-3">yevro-vent ofisi</h1>
              <p className="text-xl p-3 flex items-center">
                {" "}
                <FaLocationDot className="text-red-600" />
                O'zbekiston, Toshkent sh., Yashnobod, Boysun ko'chasi, 67
              </p>
              <p className="text-xl p-2 flex">
                <FaPhoneAlt className="text-red-600 items-center" />
                +998 97 033 34 55
              </p>
              <p className="text-xl p-2 flex items-center">
                <FaPhoneAlt className="text-red-600" />
                +998 97 033 34 55
              </p>
              <div className="mt-15 p-4 bg-blue-800 text-amber-50">
                <h1 className="text-3xl">Tarmoqlar</h1>
                <div className="flex py-10 gap-10">
                  <div className="border-2 rounded-sm py-3 px-3 text-xl">
                    <a href="">
                      {" "}
                      <FaFacebookF />
                    </a>
                  </div>
                  <div className="border-2 rounded-sm py-3 px-3 text-xl">
                    <a href="">
                      {" "}
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="border-2 rounded-sm py-3 px-3 text-xl">
                    <a href="">
                      {" "}
                      <FaTelegramPlane />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="aloqa" className="w-1/2 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1374.6577436910584!2d69.31906942905556!3d41.28384416624742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zWWFzaG5vYm9kIFR1bWFuaSwg0KLQsNGI0LrQtdC90YIgYm95c3VuIDYw!5e0!3m2!1sru!2s!4v1665028772127!5m2!1sru!2s"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}
        {selectedCategory === 2 && (
          <div
            id="ariza_bg_orqa"
            className="text-center items-center justify-center px-10 "
          >
            <h1 className="text-4xl pt-10">Ariza qoldirish</h1>
            <form
              className="flex items-center justify-center py-10"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const phone = e.target.phone.value;
                const comment = e.target.comment.value;

                const token = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
                const chatId = "5900769240";
                const message = `Yangi ariza:\n\nIsmi: ${name}\nTelefon: ${phone}\nIzoh: ${comment}`;

                fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                  }),
                })
                  .then((response) => {
                    if (response.ok) {
                      toast.success("Xabar mufaqiyatli jonatildi");
                    } else {
                      toast.error("Xabar yuborishda xatolik yuz berdi");
                    }
                  })
                  .catch((error) => {
                    console.error("Telegramga ulanishda xatolik:", error);
                    toast.error("Telegram ulanishda xatolik yuz berdi");
                  });
              }}
            >
              <div>
                <div className="flex-col flex">
                  <input
                    id="ariza_input_orqa"
                    name="name"
                    placeholder="Isim"
                    type="text"
                    className="rounded-sm w-120 py-2 px-6"
                    required
                  />
                  <input
                    id="ariza_input_orqa"
                    name="phone"
                    placeholder="Telefon"
                    type="text"
                    className="rounded-sm w-120 py-2 px-6"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="ariza_input_orqa"
                    name="comment"
                    placeholder="Izoh"
                    className="rounded-sm w-120 py-5 px-6"
                  ></textarea>
                </div>
                <button className="py-3 px-8 bg-red-500 mt-5 rounded-sm text-amber-50">
                  Yuborish
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Oav;
