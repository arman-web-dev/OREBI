import React, { useState, useEffect, useRef } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import Container from "./Container";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./ContextApi";
import { SlUserFollowing } from "react-icons/sl";
import ImgI from "../assets/item1.jpg";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {
  FaSearch,
  FaUser,
  FaCaretDown,
  FaShoppingCart,
  FaCaretUp,
} from "react-icons/fa";
import { removeFromCart } from "./slice/productSlice";

const Navbar = () => {
  let { info } = useAuth();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { isLogin, setIsLogin } = useAuth();
  let data = useSelector((state) => state.product.cartItems);
  let [searchQuery, setSearchQuery] = useState("");
  let [searchFilter, setSearchFilter] = useState([]);
  let [show, setShow] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [cart, setCart] = useState(false);

  let logOut = () => {
    setIsLogin(false);
  };

  const categoryDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const cartDropdownRef = useRef(null);

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
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target)
      ) {
        setCart(false);
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
  let handleCartClick = () => {
    navigate("/cart");
    setCart(false);
  };
  let handleCheckoutClick = () => {
    navigate("/checkout");
    setCart(false);
  };
  let handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  const totalPrice = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value == "") {
      setSearchFilter([]);
    } else {
      let searchOneByOne = info.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchFilter(searchOneByOne);
    }
  };
  let handleSearchId = (id) =>{
      navigate(`/shop/${id}`)
      setSearchFilter([])
      setSearchQuery('')
  }

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
                onChange={handleSearch}
                value={searchQuery}
                type="text"
                placeholder="Search Products....."
                className="w-full lg:py-[16px] py-[10px] px-[20px] outline-none border-none lg:text-[16px] md:text-[16px] text-[12px] font-normal font-sans focus:ring-0"
              />
              <FaSearch className="absolute top-[50%] right-[16px] translate-y-[-50%] lg:text-[16px] md:text-[16px] text-[12px]" />
              {searchFilter.length > 0 && (
                <div className="absolute z-30 w-full h-[180px] overflow-y-auto cursor-pointer">
                  {searchFilter.map((item) => (
                    <div onClick={()=>handleSearchId(item.id)} className="bg-white py-[10px] px-3">
                      <h1>{item.title}</h1>
                    </div>
                  ))}
                </div>
              )}
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
                  {isLogin ? <SlUserFollowing /> : <FaUser />}
                  {isOpen ? <FaCaretUp /> : <FaCaretDown />}
                  {isOpen && (
                    <ul className="absolute top-[30px] left-[-35px] sm:left-[-40px] mt-2 w-[98px] sm:w-[103px] md:w-[102px] bg-[#262626] shadow-lg z-10">
                      {isLogin ? (
                        <Link to="/myaccount">
                          <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                            My Account
                          </li>
                        </Link>
                      ) : (
                        <Link to="/login">
                          <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                            Log In
                          </li>
                        </Link>
                      )}
                      {isLogin ? (
                        <li
                          onClick={() => setIsLogin(false)}
                          className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]"
                        >
                          Log Out
                        </li>
                      ) : (
                        <li className="px-3 sm:px-4 py-2 hover:bg-gray-700 text-white cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-[12px]">
                          <Link to="/signup">Sign up</Link>
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
              <div ref={cartDropdownRef} className="relative cursor-pointer">
                {data.length > 0 && (
                  <div className="absolute top-[-7px] left-[8px] h-[15px] w-[15px] rounded-full leading-[15px] bg-red-400 text-center text-white text-[10px] ">
                    {data.length}
                  </div>
                )}
                <FaShoppingCart onClick={() => setCart(!cart)} />
                {cart && (
                  <div className="absolute top-[15px] right-0 z-20 w-[360px] bg-white shadow-lg">
                    <div className="">
                      {data.map((item) => (
                        <div className="flex justify-between items-center bg-[#F5F5F3] py-2 px-3">
                          <img
                            src={item.thumbnail}
                            alt="product"
                            className="h-[80px] w-[80px]"
                          />
                          <div className="flex-1 px-3">
                            <h3 className="font-sans font-bold text-[14px] text-[#262626]">
                              {item.title}
                            </h3>
                            <h4 className="font-sans font-bold text-[14px] text-[#262626]">
                              ${item.price} ({item.quantity})
                            </h4>
                          </div>
                          <button onClick={() => handleRemoveItem(item.id)}>
                            <ImCross />
                          </button>
                        </div>
                      ))}
                      <div className="bg-white p-3">
                        <div className="flex justify-between items-center">
                          <h3 className="font-sans font-normal text-[16px] text-[#767676]">
                            Subtotal:
                          </h3>
                          <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                            ${totalPrice}
                          </h3>
                        </div>
                        <div className="flex space-x-4 pt-5">
                          <button
                            onClick={handleCartClick}
                            className="h-[50px] w-[160px] font-sans font-bold text-[14px] border-2 border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
                          >
                            View Cart
                          </button>

                          <button
                            onClick={handleCheckoutClick}
                            className="h-[50px] w-[160px] font-sans font-bold text-[14px] border-2 border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
                          >
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Navbar;
