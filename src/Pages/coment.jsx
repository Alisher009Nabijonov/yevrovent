// import React, { useState, useEffect } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaChevronLeft } from "react-icons/fa6";
// const CommentCard = () => {
//   const [card, setCard] = useState({
//     id: 1,
//     comments: [],
//   });

//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     const storedCard = localStorage.getItem("card");
//     if (storedCard) {
//       setCard(JSON.parse(storedCard));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("card", JSON.stringify(card));
//   }, [card]);

//   const handleAddComment = () => {
//     if (comment.trim() === "") return;
//     setCard((prevCard) => ({
//       ...prevCard,
//       comments: [...prevCard.comments, comment],
//     }));
//     setComment("");
//   };

//   return (
//     <>
//       <div className="text-center">
//         <h1 className="text-4xl mt-8">Biz Haqimizda</h1>
//         <div className="flex items-center text-center justify-center">
//           <NavLink to="/">
//             <h1
//               id="info_h1"
//               className="text-2xl flex items-center text-center underline hover:text-orange-400 transition-all-0.5s"
//             >
//               Asosiy
//             </h1>
//           </NavLink>
//           <FaChevronLeft className="text-orange-400 text-2xl" />
//           <h3 className="text-2xl">Mahsulotlar Kataolgi</h3>
//         </div>
//       </div>
//       <div className="max-w-md mx-auto p-4 shadow-lg rounded-2xl border mb-10">

//         {card.comments.length > 0 && (
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">Izohlar:</h3>
//             <ul className=" list-disc pl-5">
//               {card.comments.map((cmt, index) => (
//                 <li key={index} className="text-green-600 mb-3">
//                   {cmt}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <input
//           className="w-full p-2 border rounded-lg mb-4"
//           rows="4"
//           placeholder="Izohingizni kiriting..."
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         ></input>
//         <button
//           className="w-full bg-blue-800 text-white py-2 rounded-lg"
//           onClick={handleAddComment}
//         >
//           Izoh Qo'shish
//         </button>
//       </div>
//     </>
//   );
// };

// export default CommentCard;




// import React, { useState } from "react";

// const App = () => {
//   const [isGrid, setIsGrid] = useState(true);

//   const cards = Array.from({ length: 6 }, (_, index) => ({
//     id: index + 1,
//     title: `Card ${index + 1}`,
//     description: `This is the description for card ${index + 1}.`,
//   }));

//   return (
//     <div className="p-4">
//       <div className="flex justify-end mb-4">
//         <button onClick={() => setIsGrid(!isGrid)}>
//           {isGrid ? "Switch to List" : "Switch to Grid"}
//         </button>
//       </div>
//       <div
//         className={
//           isGrid
//             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//             : "flex flex-col gap-4"
//         }
//       >
//         {cards.map((card) => (
//           <div key={card.id} className="p-4">
//             <div>
//               <h3 className="text-lg font-bold">{card.title}</h3>
//               <p className="text-sm text-gray-600">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
