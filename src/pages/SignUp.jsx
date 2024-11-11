import React, { useState } from "react";
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  let navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [postalCode, setPostalCode] = useState("");
  let [country, setCountry] = useState("");
  let [region, setRegion] = useState("");
  let [password, setPassword] = useState("");
  let [repeatPassword, setRepeatPassword] = useState("");

  const handleClickSignup = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !name ||
      !lastName ||
      !phone ||
      !address ||
      !city ||
      !postalCode ||
      !country ||
      !region
    ) {
      toast.error("Please fill out all fields!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    } else if (password !== repeatPassword) {
      toast.error("Passwords do not match!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const writeUserData = () => {
            const userId = email.replace(/[@.]/g, "_"); // Use a sanitized email as userId
            set(ref(db, "users/" + userId), {
              username: name,
              first_name: name,
              last_name: lastName,
              phone: phone,
              address: address,
              city: city,
              postal_code: postalCode,
              country: country,
              region: region,
            })
              .then(() => {
                toast.success("User signed up successfully!", {
                  position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Flip,
                });
              })
              .catch((error) => {
                toast.error("Error signing up: " + error.message, {
                  position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Flip,
                });
              });
          };
          writeUserData();
          setTimeout(() => {
            navigate("/");
          }, 6000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode === "auth/email-already-in-use") {
            toast.error(`email-already-in-use`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Flip,
            });
          }
        });

      writeUserData();
    }
  };

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
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
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
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
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
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
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
                        value={address}
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
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
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
                        onChange={(e) => setPostalCode(e.target.value)}
                        value={postalCode}
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
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
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
                        onChange={(e) => setRegion(e.target.value)}
                        value={region}
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
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
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        value={repeatPassword}
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
                    <label for="scales" className="pl-3">
                      I have read and agree to the Privacy Policy
                    </label>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={handleClickSignup}
                    className="h-[50px] w-[200px] font-sans font-bold text-[14px] border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </section>
  );
};

export default SignUp;
