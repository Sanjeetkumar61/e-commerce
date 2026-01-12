// import React, { useContext, useState } from "react";
// import { assets } from "../assets/frontend_assets/assets";
// import { NavLink, Link } from "react-router-dom";
// import { ShopContext } from "../contexts/ShopContext";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   const {
//     setShowSearch,
//     getCartCount,
//     navigate,
//     token,
//     setToken,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//     navigate("/login");
//   };

//   return (
//     <div className="flex items-center justify-between 
//                 px-4 sm:px-6 lg:px-10 
//                 py-4">
//       {/* LOGO */}
//       <Link to="/">
//         <img src={assets.logo2} className="w-40 sm:w-40 lg:w-76" alt="turuestyle_logo" />
//       </Link>

//       {/* NAV LINKS (DESKTOP) */}
//       <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
//         {["/", "/collection", "/about", "/contact"].map((path, index) => {
//           const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
//           return (
//             <NavLink
//               key={index}
//               to={path}
//               className="flex flex-col items-center gap-1"
//             >
//               <p>{labels[index]}</p>
//               <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//             </NavLink>
//           );
//         })}
//       </ul>

//       {/* RIGHT ICONS */}
//       <div className="flex items-center gap-6">
//         {/* SEARCH */}
//         <img
//           onClick={() => setShowSearch(true)}
//           src={assets.search_icon}
//           className="w-5 cursor-pointer"
//           alt="search"
//         />

//         {/* PROFILE */}
//         <div className="group relative">
//           <img
//             onClick={() => (!token ? navigate("/login") : null)}
//             src={assets.profile_icon}
//             className="w-5 cursor-pointer"
//             alt="profile"
//           />

//           {/* DROPDOWN */}
//           {token && (
//             <div className="group-hover:block hidden absolute right-0 pt-4 z-50">
//               <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow-md">
                
//                 <p
//                   onClick={() => navigate("/profile")}
//                   className="cursor-pointer hover:text-black"
//                 >
//                   My Profile
//                 </p>

//                 <p
//                   onClick={() => navigate("/orders")}
//                   className="cursor-pointer hover:text-black"
//                 >
//                   Orders
//                 </p>

//                 <p
//                   onClick={logout}
//                   className="cursor-pointer hover:text-black"
//                 >
//                   Logout
//                 </p>

//               </div>
//             </div>
//           )}
//         </div>

//         {/* CART */}
//         <Link to="/cart" className="relative">
//           <img src={assets.cart_icon} className="w-5" alt="cart" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
//             {getCartCount()}
//           </p>
//         </Link>

//         {/* MOBILE MENU */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-5 cursor-pointer sm:hidden"
//           alt="menu"
//         />
//       </div>

//       {/* MOBILE SIDEBAR */}
// {visible && (
//   <div
//     onClick={() => setVisible(false)}
//     className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
//   ></div>
// )}

// {/* MOBILE SIDEBAR */}
// <div
//   className={`fixed top-0 right-0 h-full w-[75%] max-w-xs 
//   bg-[#f9f9f9] shadow-2xl z-50
//   transform transition-transform duration-300 ease-in-out
//   ${visible ? "translate-x-0" : "translate-x-full"}`}
// >
//   <div className="flex flex-col text-gray-700">
    
//     {/* BACK BUTTON */}
//     <div
//       onClick={() => setVisible(false)}
//       className="flex items-center gap-4 p-4 border-b cursor-pointer"
//     >
//       <img
//         src={assets.dropdown_icon}
//         className="h-4 rotate-180"
//         alt="back"
//       />
//       <p className="font-medium">Back</p>
//     </div>

//     {/* MENU LINKS */}
//     {["/", "/collection", "/about", "/contact"].map((path, index) => {
//       const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
//       return (
//         <NavLink
//           key={index}
//           to={path}
//           onClick={() => setVisible(false)}
//           className="py-4 pl-6 border-b text-sm font-medium hover:bg-gray-100"
//         >
//           {labels[index]}
//         </NavLink>
//       );
//     })}
//   </div>
// </div>

//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <>
      {/* 🔥 NAVBAR ANIMATION */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between 
                   px-4 sm:px-6 lg:px-10 
                   py-4 bg-white relative z-50"
      >
        {/* LOGO */}
        <Link to="/">
          <img
            src={assets.logo2}
            className="w-40 sm:w-40 lg:w-76"
            alt="truestyle_logo"
          />
        </Link>

        {/* NAV LINKS (DESKTOP) */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {["/", "/collection", "/about", "/contact"].map((path, index) => {
            const labels = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
            return (
              <NavLink
                key={index}
                to={path}
                className="flex flex-col items-center gap-1 hover:text-black"
              >
                <p>{labels[index]}</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
              </NavLink>
            );
          })}
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6">
          {/* SEARCH */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search"
          />

          {/* PROFILE */}
          <div className="group relative">
            <img
              onClick={() => (!token ? navigate("/login") : null)}
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="profile"
            />

            {/* DROPDOWN */}
            {token && (
              <div className="group-hover:block hidden absolute right-0 pt-4 z-50">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow-md">
                  <p
                    onClick={() => navigate("/profile")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Profile
                  </p>

                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>

                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* CART */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5" alt="cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* MOBILE MENU */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="menu"
          />
        </div>
      </motion.div>

      {/* 🔥 OVERLAY */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* 🔥 MOBILE SIDEBAR */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-[75%] max-w-xs 
                       bg-[#f9f9f9] shadow-2xl z-50"
          >
            <div className="flex flex-col text-gray-700">
              {/* BACK */}
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-4 border-b cursor-pointer"
              >
                <img
                  src={assets.dropdown_icon}
                  className="h-4 rotate-180"
                  alt="back"
                />
                <p className="font-medium">Back</p>
              </div>

              {/* LINKS */}
              {["/", "/collection", "/about", "/contact"].map(
                (path, index) => {
                  const labels = [
                    "HOME",
                    "COLLECTION",
                    "ABOUT",
                    "CONTACT",
                  ];
                  return (
                    <NavLink
                      key={index}
                      to={path}
                      onClick={() => setVisible(false)}
                      className="py-4 pl-6 border-b text-sm font-medium hover:bg-gray-100"
                    >
                      {labels[index]}
                    </NavLink>
                  );
                }
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
