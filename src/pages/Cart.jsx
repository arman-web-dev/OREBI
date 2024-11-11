import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import SunGlass from "../assets/sunglass.png";

const Cart = () => {
  return (
    <section className="py-[55px]">
      <Container>
        <div className="">
          <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
            Cart
          </h3>
          <div className="flex items-center py-4">
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/">Home</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/myaccount">Cart</Link>
            </h2>
          </div>
        </div>
        <div className="py-[55px]">
          <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Product
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Price
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Quantity
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                Total
              </h4>
            </div>
          </div>
          <div className="flex items-center py-[32px] pl-3 border">
            <div className="w-1/4">
              <div className="">
                <div className="flex justify-between items-center">
                  <div className="w-[10%]">
                    <button className="">
                      <ImCross />
                    </button>
                  </div>
                  <div className="w-[25%]">
                    <img src={SunGlass} alt="" className="w-full" />
                  </div>
                  <div className="w-[50%]">
                    <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                      Product name
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                $44.00
              </h4>
            </div>
            <div className="w-1/4">
              <div className="inline-block border">
                <button className="px-5 py-1 border-none">-</button>
                <span className="px-4">1</span>
                <button className="px-5 py-1 border-none">+</button>
              </div>
            </div>
            <div className="w-1/4">
              <h4 className="font-sans font-bold text-[16px] text-[#262626] ">
                $44.00
              </h4>
            </div>
          </div>
          <div className="flex items-center py-[20px] pl-3 border justify-between">
            <div className="flex items-center">
              <div className="">
                <select className="border p-2 w-[250px] h-[50px] outline-none shadow focus:!rounded-none focus:ring-0 focus:outline-none focus:ring-[#fff] text-[#767676] font-sans font-normal text-[16px] ">
                  <option>Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <h4 className="font-sans font-bold text-[#262626] text-[14px] px-4">
                Apply coupon
              </h4>
            </div>
            <div className="font-sans font-bold text-[#262626] text-[14px] px-4">
              <h4>Update cart</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
