import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const MyAccount = () => {
  return (
    <section>
      <Container>
        <div className="lg:py-[55px]">
          <div className="">
            <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
              My Account
            </h3>
            <div className="flex items-center py-4">
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/">Home</Link>
              </h2>
              <IoIosArrowForward />
              <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
                <Link to="/myaccount">My Account</Link>
              </h2>
            </div>
          </div>
          <div className="flex justify-between pt-[50px]">
            <div className="w-1/4">
              <ul className="">
                <li className="font-sans font-bold text-[16px] text-[#262626] pb-[20px] border-b border-b-[#F0F0F0]  ">
                  <Link to="#">
                    Dashboard
                  </Link>
                </li>
                <li className="font-sans font-normal text-[16px] text-[#767676] py-[20px] border-b border-b-[#F0F0F0]  ">
                  <Link to="#">
                    Orders
                  </Link>
                </li>
                <li className="font-sans font-normal text-[16px] text-[#767676] py-[20px] border-b border-b-[#F0F0F0]  ">
                  <Link to="#">
                    Downloads
                  </Link>
                </li>
                <li className="font-sans font-normal text-[16px] text-[#767676] py-[20px] border-b border-b-[#F0F0F0]  ">
                  <Link to="#">
                    Addresses
                  </Link>
                </li>
                <li className="font-sans font-normal text-[16px] text-[#767676] py-[20px] border-b border-b-[#F0F0F0]  ">
                  <Link to="#">
                    Account details
                  </Link>
                </li>
                <li className="font-sans font-normal text-[16px] text-[#767676] py-[20px] border-b border-b-[#F0F0F0]  ">
                  <Link to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[70%]">
              <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
              <p className="mb-4 font-sans font-normal text-[16px] text-[#767676]">
                Hello <span className="font-sans font-normal text-[16px] text-[#262626]">admin</span> (not <span className="font-sans font-normal text-[16px] text-[#262626]">admin? </span>
                <Link to="#" className="font-sans font-bold text-[16px] text-[#262626]">
                  Log out
                </Link>
                )
              </p>
              <p className="text-gray-600">
                From your account dashboard you can view your
                <span className="font-semibold"> recent orders</span>, manage
                your 
                <span className="font-semibold"> 
                &nbsp; shipping and billing addresses
                </span>
                , and
                <span className="font-semibold">
                &nbsp; edit your password and account details
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyAccount;
