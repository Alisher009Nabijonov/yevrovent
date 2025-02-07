import React from 'react'
import { homeItem1 } from '../Malumotlar1'
import { NavLink, Outlet } from 'react-router-dom';

const Toifa1 = () => {
  return (
      <div id='toifa_card_cata' className='my-10'>
           {homeItem1.slice(0,12).map((item) => (
             <div key={item.id} id='card1' className="text-center w-90 h-100 justify-between mx-2  rounded-sm my-3 p-3">
               <div>
   
                 <img src={item.img} alt={item.title} className=" pl-15 object-cover flex items-center justify-center" />
               </div>
               <div>
                 <h2 className='text-2xl'>{item.title}</h2>
               </div>
               {/* <NavLink to={`information/${item.id}`}><button className="mt-6 border-2 py-1 px-8 text-xl rounded-sm">Batafsil</button></NavLink> */}
             </div>
           ))}
         </div>
  )
}

export default Toifa1