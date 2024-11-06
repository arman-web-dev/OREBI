import React, { useState, useEffect, useRef } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import {
  FaSearch,
  FaUser,
  FaCaretDown,
  FaShoppingCart,
  FaCaretUp,
} from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useAuth } from "./ContextApi";
import { SlUserFollowing } from "react-icons/sl";

const Navbar = () => {
  let { isLogin, setIsLogin } = useAuth();
    let [show, setShow] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  let logOut =()=>{
    setIsLogin(false);
    
  }

  const categoryDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target)
      ) {
        setShow(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <section className="bg-[#F5F5F3] lg:py-[25px] py-[10px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="lg:w-1/4 flex items-center relative">
            <div
              onClick={handleCategoryClick}
              ref={categoryDropdownRef}
              className="flex items-center cursor-pointer"
            >
              {show ? <RiBarChartHorizontalLine /> : <HiMiniBars3CenterLeft />}
              <h3 className="px-3 hidden lg:block">Shop by Category</h3>
            </div>
            {show && (
              <ul className="absolute top-[30px] left-0 mt-2 bg-[#262626] shadow-lg py-2 w-48 z-10">
                <li className="px-4 py-2 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Accessories
                </li>
                <li className="px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Furniture
                </li>
                <li className="px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Electronics
                </li>
                <li className="px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white border-b-[1px] border-[#2D2D2D]">
                  Clothing
                </li>
                <li className="px-4 py-2 text-[rgba(225,255,255,0.7)] cursor-pointer hover:text-white">
                  Bags
                </li>
              </ul>
            )}
          </div>

          <div className="lg:w-2/4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products....."
                className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans focus:ring-0"
              />
              <FaSearch className="absolute top-[50%] right-[16px] translate-y-[-50%] lg:text-[16px] md:text-[16px] text-[12px]" />
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="flex justify-end gap-x-6">
              <div className="flex items-center">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  ref={userDropdownRef}
                  className="relative cursor-pointer flex items-center"
                >
               {
                  isLogin ?<SlUserFollowing className="text-[]"/>

                  : <FaUser />
                }
                  {isOpen ? <FaCaretUp /> : <FaCaretDown />}
                  {isOpen && (
                    <ul className="absolute top-[30px] left-[-35px] sm:left-[-40px] mt-2 w-[98px] sm:w-[103px] md:w-[102px] bg-[#262626] shadow-lg z-10">
                      {
                        isLogin ?
                        <Link to='/myaccount' >
                        <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                        My Account
                      </li> 
                        </Link>:
                        <Link to='/login'>
                      <li  className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                            Log In
                    </li>
                        </Link>
                    
                      }
                      {
                        isLogin ? <li onClick={()=>setIsLogin(false)} className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                        Log Out
                      </li> : <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                        <Link to="/signup">
                            Sign up
                        </Link>
                      </li>
                      }
                    </ul>
                  )}
                </div>
              </div>
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
