import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";
import "animate.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Container>
        <div className="flex items-center lg:py-[32px] py-[20px] relative">
          <div className="w-1/4">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-3/4 lg:hidden flex justify-end">
            <button onClick={toggleMenu} className="z-10">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute left-0 top-[40px] z-10 w-full bg-white lg:flex lg:static lg:w-2/4 lg:bg-transparent justify-end`}
          >
            <ul className="flex flex-col lg:flex-row items-center lg:justify-end py-4 lg:py-0">
              <li
                className={`relative group px-[20px] py-2 lg:py-0 font-sans text-[14px] font-normal text-[#767676] ${
                  isOpen ? "animate__animated animate__backInLeft" : ""
                } lg:animate-none`}
              >
                <Link to="/" className="relative inline-block hover:text-black transition-colors duration-300 ease-in-out">
                  Home
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li
                className={`relative group px-[20px] py-2 lg:py-0 font-sans text-[14px] font-normal text-[#767676] ${
                  isOpen ? "animate__animated animate__backInLeft" : ""
                } lg:animate-none`}
              >
                <Link to="/shop" className="relative inline-block hover:text-black transition-colors duration-300 ease-in-out">
                  Shop
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li
                className={`relative group px-[20px] py-2 lg:py-0 font-sans text-[14px] font-normal text-[#767676] ${
                  isOpen ? "animate__animated animate__backInLeft" : ""
                } lg:animate-none`}
              >
                <Link to="/about" className="relative inline-block hover:text-black transition-colors duration-300 ease-in-out">
                  About
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li
                className={`relative group px-[20px] py-2 lg:py-0 font-sans text-[14px] font-normal text-[#767676] ${
                  isOpen ? "animate__animated animate__backInLeft" : ""
                } lg:animate-none`}
              >
                <Link to="/contact" className="relative inline-block hover:text-black transition-colors duration-300 ease-in-out">
                  Contact
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
              <li
                className={`relative group px-[20px] py-2 lg:py-0 font-sans text-[14px] font-normal text-[#767676] ${
                  isOpen ? "animate__animated animate__backInLeft" : ""
                } lg:animate-none`}
              >
                <Link to="/" className="relative inline-block hover:text-black transition-colors duration-300 ease-in-out">
                  Journals
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
