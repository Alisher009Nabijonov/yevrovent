import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import "./App.css";
import Home from "./Pages/Home";
import About from "./layout/About";
import Blog from "./Pages/Blog";
import Sahifalar from "./Pages/Sahifalar";
import BizHaqimizda from "./Pages/BizHaqimizda";
import en from "./Language/en";
import ru from "./Language/ru";
import uz from "./Language/uz";
import Swiper1 from "./Homesiwiper/swiper1";
import Swiper2 from "./Homesiwiper/swiper2";
import Swiper3 from "./Homesiwiper/swiper3";
import NavbarLayout from "./layout/NavbarLayout";
import Information from "./Pages/Information";
import Batafsil from "./Pages/Batafsil";
import Aloqa from './Pages/Aloqa'
import { TbMessageChatbotFilled } from "react-icons/tb";
import Oav from "./Pages/Oav";

const languages = { uz, en, ru };

function App() {
  const [language, setLanguage] = useState("uz");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = (key) => languages[language][key] || key;

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <NavbarLayout setLanguage={setLanguage} language={language} t={t} />
        }
      >
        <Route
          path="/"
          element={<Home t={t} setLanguage={setLanguage} language={language} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sahifalar" element={<Sahifalar />} />
        <Route path="/biz" element={<BizHaqimizda />} />
        <Route path="/swiper/1" element={<Swiper1 />} />
        <Route path="/swiper/2" element={<Swiper2 />} />
        <Route path="/swiper/3" element={<Swiper3 />} />
        <Route path="information/:id" element={<Information />} />
        <Route path="batafsil/:id" element={<Batafsil />} />
        <Route path="/oav" element={<Oav />} />
        <Route path="/aloqa" element={<Aloqa/>}/>
      </Route>
    )
  );

  const steps = [
    {
      id: "0",
      message: "Salom! Qanday yordam bera olaman?",
      trigger: "1",
    },
    {
      id: "1",
      user: true,
      trigger: "2",
    },
    {
      id: "2",
      message:
        "Iltimos, telefon raqamingizni qoldiring. Adminlar siz bilan bog‘lanadi.",
      trigger: "3",
    },
    {
      id: "3",
      user: true,
      trigger: "4",
    },
    {
      id: "4",
      message:
        "Adminlarimiz Siz bilan 24-soat ichida boglanadi. Sizga hizmat korsatganimdan Mamnunman",
      end: true,
    },
  ];

  return (
    <div className="App">
      <RouterProvider router={routes} />
      <div id="chatbot_div">
        <button
          id="animation_btn"
          className="fixed bottom-4 right-4 p-4 rounded-full w-15 h-15 bg-blue-800 text-white shadow-lg z-999"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          {isModalOpen ? (
            <i class="fa-solid fa-x text-2xl"></i>
          ) : (
            <i>
              <TbMessageChatbotFilled className="text-3xl" />
            </i>
          )}
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-opacity-50 flex justify-end  items-center z-40">
            <ChatBot steps={steps} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
