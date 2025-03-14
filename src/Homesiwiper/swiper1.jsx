import React from 'react'
import HomeImg2 from '../assets/klapann.jpg'
import { NavLink, Outlet } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const swiper1 = () => {
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
        <div>
          <img src={HomeImg2} alt="" />
        </div>
        <div>
          <h1 className='text-3xl mb-10'>Qayta yo‘nalgan to‘g‘ri burchakli klapan QPK</h1>
          <p className='text-xl mb-10'>Shamollatish tizimlari uchun qayta yo‘nalgan to‘g‘ri burchakli klapanlar ventilyatorlarning kollektorlarga ulanganda havoning o‘chirilgan ventilyatorlarga (o‘chirilgan ventilyatorlardan) tirqish orqali o‘tishining oldini olish uchun mo‘ljallangan.
          </p>
          <NavLink to='/'>  <button className='border-2 py-1 px-12 rounded-xl flex items-center text-2xl mt-6'><FaArrowLeft className='text-orange-400 text-2xl' />Qaytish</button></NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default swiper1