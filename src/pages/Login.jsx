import React, { useState } from "react";
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../components/ContextApi";


const Login = () => {
  let {setIsLogin} = useAuth();
  const auth = getAuth();
  let navigate = useNavigate();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  let handleClickLogin = async (e) => {
    e.preventDefault();
    if(!email || !password) {
      toast.error('Please enter email or password!', {
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
        return
    }
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      toast.success('LogIn successfull!', {
        position: "bottom-left",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
          setTimeout(()=>{
              navigate("/")
          },5000)
    })
    .then(()=>{
      setIsLogin(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      
      const errorMessage = error.message;
      if(errorCode === 'auth/wrong-password') {
        toast.error('Incorrect password! please try again!', {
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
        
      }else if(errorCode === 'auth/invalid-credential'){
        toast.error('Invalid email or password!', {
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
      }else if(errorCode === "auth/user-not-found"){
        toast.error('User Not Found', {
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
    

  };

  return (
    <section>
      <Container>
        <div className="">
          <h3 className="font-sans text-[49px] font-bold text-[#262626] ">
            Login
          </h3>
          <div className="flex items-center py-4">
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/">Home</Link>
            </h2>
            <IoIosArrowForward />
            <h2 className="font-sans font-normal text-[12px] text-[#767676] ">
              <Link to="/login">Login</Link>
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
        <div className="lg:py-[55px] border-b border-b-[#f0f0f0]">
          <div className="lg:w-[67%]">
            <h3 className="font-sans font-bold text-[#262626] text-[39px] ">
              Returning Customer
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
                        Email address
                      </label>
                      <input  onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="company@domain.com"
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
                        Password
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="password here"
                        className="border-transparent border-b border-b-[#f0f0f0] pl-0 focus:ring-transparent focus:border-transparent focus:border-b focus:border-b-[#f0f0f0]
                font-sans font-normal text-[14px] text-[#767676] "
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <button onClick={handleClickLogin}
                    className="px-[70px] py-4 border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="lg:py-[55px]">
            <h3 className="font-sans font-bold text-[#262626] text-[39px]">
              New Customer
            </h3>
          </div>
          <div className="pb-[55px]">
            <p className="w-[644px] font-sans font-normal text-[16px] text-[#767676] leading-[30px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
          </div>
          <div className="">
            <button className="px-[70px] py-4 border-[2px] border-[#2b2b2b] text-[#262626] bg-white transition hover:bg-black hover:text-white duration-300">
              Continue
            </button>
          </div>
        </div>
      </Container>
      <ToastContainer />

    </section>
  );
};

export default Login;
