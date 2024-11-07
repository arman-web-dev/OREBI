import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const SignUp = () => {
  return (
    <section>
      <Container>
        <div className="">
          <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
            Sign up
          </h3>
          <div className="flex items-center py-4">
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/">Home</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/signup">Sign up</Link>
            </h2>
          </div>
        </div>
        <div className="lg:py-[50px] border-b border-b-[#F0F0F0] ">
          <p className="w-[644px] font-sans font-normal text-[16px] text-[#767676] leading-[30px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="border-b border-b-[#f0f0f0] pb-[55px]">
          <div className="lg:w-[67%]">
            <div className="py-[55px]">
              <h3 className="font-sans font-bold text-[#262626] text-[39px] ">
                Your Personal Details
              </h3>
            </div>
            <div className="">
              <div>
                <div className="flex justify-between items-center flex-wrap">
                  <div className="w-[48%]">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                        font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                        font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%] py-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="company@domain.com"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                        font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%] py-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Telephone
                      </label>
                      <input
                        type="text"
                        placeholder="Your phone number"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                        font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-b-[#f0f0f0] pb-[55px]">
          <div className="lg:w-[67%]">
            <div className="py-[55px]">
              <h3 className="font-sans font-bold text-[#262626] text-[39px] ">
                New Customer
              </h3>
            </div>
            <div className="">
              <div>
                <div className="flex justify-between items-center flex-wrap">
                  <div className="w-[48%]">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Address 1
                      </label>
                      <input
                        type="text"
                        placeholder="4279 Zboncak Port Suite 6212"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                      font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Address 2
                      </label>
                      <input
                        type="text"
                        placeholder=" - "
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                      font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%] py-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Your city"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                      font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%] py-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Post Code
                      </label>
                      <input
                        type="text"
                        placeholder="05228"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                      font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%] py-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="Please select"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                      font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%] py-6">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Region/State
                      </label>
                      <input
                        type="text"
                        placeholder="Please select"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                      font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-[55px] border-b border-b-[#f0f0f0]">
          <div className="lg:w-[67%]">
            <h3 className="font-sans font-bold text-[#262626] text-[39px] ">
              Your Password
            </h3>
            <div className="">
              <div>
                <div className="flex justify-between items-center py-10">
                  <div className="w-[48%]">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                        font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="flex flex-col">
                      <label
                        htmlFor=""
                        className="font-sans font-bold text-[16px] text-[#262626]"
                      >
                        Repeat Password
                      </label>
                      <input
                        type="password"
                        placeholder="Repeat Password"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                        font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales">Scales</label>
                  </div>
                </div>
                <div className="">
                  <button className="px-[70px] py-4 border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
