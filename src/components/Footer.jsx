import React from "react";
import Container from "./Container";
import LogoB from "../assets/b_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] py-[60px] mt-10">
      <Container>
        <div className="flex justify-between">
          <div className="lg:w-[12%]">
            <ul>
              <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                MENU
              </h3>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-[17px] text-left">
                Home
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Shop
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                About
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Contact
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Journal
              </li>
            </ul>
          </div>

          <div className="lg:w-[12%]">
            <ul>
              <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                SHOP
              </h3>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-[17px] text-left">
                Category 1
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Category 2
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Category 3
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Category 4
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Category 5
              </li>
            </ul>
          </div>

          <div className="lg:w-[12%]">
            <ul>
              <h3 className="font-sans font-bold text-[16px] text-[#262626]">
                HELP
              </h3>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-[17px] text-left">
                Privacy Policy
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Terms & Conditions
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Special E-shop
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Shipping
              </li>
              <li className="font-sans font-normal text-[14px] text-[#6D6D6D] pt-2 text-left">
                Secure Payments
              </li>
            </ul>
          </div>
          <div className="lg:w-[40%] lg:pl-10">
            <h3 className="font-sans font-bold text-[16px] text-[#262626]">
              (052) 611-5711
            </h3>
            <p className="font-sans font-bold text-[16px] text-[#262626]">
              company@domain.com
            </p>
            <p className="font-sans font-normal text-[14px] text-[#6d6d6d] pt-[15px]">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div className="lg:w-[24%]">
            <img src={LogoB} alt="logo" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;