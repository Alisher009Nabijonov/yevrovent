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
import { motion } from "framer-motion";
const Oav = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [errors, setErrors] = useState({ name: false, phone: false, comment: false });
  const [errorMessage, setErrorMessage] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: form.name.trim() === "",
      phone: form.phone.trim() === "",
      comment: form.comment.trim() === "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      setErrorMessage("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";

    const message = `
      📝 Yangi ariza:
      🔹 Ism: ${form.name}
      🔹 Telefon: ${form.phone}
      🔹 Izoh: ${form.comment}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        toast("Arizangiz yuborildi!");
        setForm({ name: "", phone: "", comment: "" });
      } else {
        toast("Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      }
    } catch (error) {
      console.error("Telegram bilan ulanishda xatolik:", error);
      toast("Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className="media-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="media-title" variants={itemVariants}>
            MEDIA
          </motion.h1>
          <motion.div className="breadcrumb" variants={itemVariants}>
            <NavLink to="/">
              <h1 className="breadcrumb-link">Asosiy</h1>
            </NavLink>
            <FaChevronLeft className="breadcrumb-icon" />
            <h3 className="breadcrumb-current">Media</h3>
          </motion.div>

          <motion.div className="category-buttons" variants={itemVariants}>
            <motion.button
              className={`category-button ${
                selectedCategory === 1 ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mijozlar Uchun
            </motion.button>
            <motion.button
              className={`category-button ${
                selectedCategory === 2 ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(2)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ariza Beruvchilar uchun
            </motion.button>
          </motion.div>
          <motion.hr className="divider" variants={itemVariants} />

          {selectedCategory === 1 && (
            <motion.div
              className="contact-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="contact-details" variants={itemVariants}>
                <motion.h1 className="contact-title" variants={itemVariants}>
                  Yevro-Vent Ofisi
                </motion.h1>
                <motion.p className="contact-info" variants={itemVariants}>
                  <FaLocationDot className="contact-icon" /> O'zbekiston,
                  Toshkent sh., Yashnobod, Boysun ko'chasi, 67
                </motion.p>
                <motion.p className="contact-info" variants={itemVariants}>
                  <FaPhoneAlt className="contact-icon" /> +998 97 033 34 55
                </motion.p>
                <motion.p className="contact-info" variants={itemVariants}>
                  <FaPhoneAlt className="contact-icon" /> +998 97 033 34 55
                </motion.p>
                <motion.div className="social-links" variants={itemVariants}>
                  <motion.h1 className="social-title" variants={itemVariants}>
                    Tarmoqlar
                  </motion.h1>
                  <motion.div
                    className="social-icons"
                    variants={containerVariants}
                  >
                    <motion.a
                      href=""
                      className="social-icon"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaFacebookF />
                    </motion.a>
                    <motion.a
                      href=""
                      className="social-icon"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaInstagram />
                    </motion.a>
                    <motion.a
                      href=""
                      className="social-icon"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaTelegramPlane />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className="map-container" variants={itemVariants}>
                <motion.iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1374.6577436910584!2d69.31906942905556!3d41.28384416624742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zWWFzaG5vYm9kIFR1bWFuaSwg0KLQsNGI0LrQtdC90YIgYm95c3VuIDYw!5e0!3m2!1sru!2s!4v1665028772127!5m2!1sru!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.iframe>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
        {selectedCategory === 2 && (
            <motion.div
              className="max-w-130 mx-auto mt-10 p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="w-full text-3xl font-extrabold mb-8 text-center text-indigo-800 tracking-wide"
                variants={itemVariants}
              >
                Ariza qoldirish
              </motion.h1>
              {errorMessage && (
                <motion.p
                  className="text-red-500 font-semibold text-center mb-4"
                  variants={itemVariants}
                >
                  {errorMessage}
                </motion.p>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Isim"
                    type="text"
                    className={`w-full px-5 py-3 rounded-lg border-2 ${
                      errors.name ? "border-red-500" : "border-indigo-300"
                    } focus:outline-none focus:ring-2 ${
                      errors.name ? "focus:ring-red-500" : "focus:ring-indigo-500"
                    } focus:border-transparent transition duration-300 placeholder-indigo-300 text-indigo-800`}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon"
                    type="nuber"
                    className={`w-full px-5 py-3 rounded-lg border-2 ${
                      errors.phone ? "border-red-500" : "border-indigo-300"
                    } focus:outline-none focus:ring-2 ${
                      errors.phone ? "focus:ring-red-500" : "focus:ring-indigo-500"
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
                      errors.comment ? "border-red-500" : "border-indigo-300"
                    } focus:outline-none focus:ring-2 ${
                      errors.comment ? "focus:ring-red-500" : "focus:ring-indigo-500"
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
            </motion.div>
          )}
      </div>
    </>
  );
};

export default Oav;
