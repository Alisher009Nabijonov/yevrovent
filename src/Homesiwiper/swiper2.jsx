import React from 'react'
import HomeImg1 from '../assets/jvk.png'
import { NavLink, Outlet } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


const swiper2 = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex px-10'>
        <NavLink to='/'>
        
          <h1 id='info_h1' className='text-2xl flex items-center '><FaChevronLeft className='text-orange-400' />Home</h1>
        </NavLink>
        <NavLink to='/about'>
          <h1 id='info_h1' className='text-2xl flex items-center '><FaChevronLeft className='text-orange-400' />Toifalar</h1>
        </NavLink>
      </div>
      <div className='flex items-center'>
        <div className='w-400'>
          <img src={HomeImg1} alt="" className='w-250'/>
        </div>
        <div>
          <h1 className='text-3xl mb-10'>Kompressor-kondensator bloki JVK</h1>
          <p className='text-xl mb-10'>Kompressor va kondensator bloki (KKB) Markaziy konditsioner tizimlarida xladogentni bevosita bug‘lash maqsadida foydalanish uchun mo‘ljallangan. Asosiy komponentlar kompressor va kondensator bo‘lib, tashqi bug‘latgichdan foydalaniladi. U suyuq freon tayyorlanishi uchun mas'uldir va MKPK, kanal sovutgichi va boshqalar kabi konditsioner uchun tashqi sovituvchi manba sifatida ishlatiladi.
          </p>
          <NavLink to='/'>  <button className='border-2 py-1 px-12 rounded-xl flex items-center text-2xl mt-6'><FaArrowLeft className='text-orange-400 text-2xl' />Qaytish</button></NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default swiper2