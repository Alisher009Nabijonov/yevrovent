import React from 'react'
import HomeImg3 from '../assets/ulitka.jpg'
import { NavLink, Outlet } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";


const swiper3 = () => {
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
          <img src={HomeImg3} alt="" className='w-250'/>
        </div>
        <div>
          <h1 className='text-3xl mb-10'>Kanalli ventilyator Ulitka</h1>
          <p className='text-xl mb-10'>Plastinkasimon mis-alyuminiydan ishlangan VNV va VOV tipidagi issiqlik almashtirgichlarning isitish yelementi plastinka shaklida, alyuminiy qanotli mis trubadan yasalgan, turli xil konstruksiyali havoni isitish, ventilyasiyalash hamda kondisioner tizimda havoni isitish va sovutish uchun mo‘ljallangan.
          </p>
          <NavLink to='/'>  <button className='border-2 py-1 px-12 rounded-xl flex items-center text-2xl mt-6'><FaArrowLeft className='text-orange-400 text-2xl' />Qaytish</button></NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default swiper3