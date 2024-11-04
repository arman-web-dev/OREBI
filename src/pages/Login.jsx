import React from 'react';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Login = () => {
  return (
    <section>
      <Container>
      <div className="">
          <h3 className="font-sans text-[49px] font-bold text-[#262626] ">Login</h3>
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
      </Container>
      
    </section>
  );
}

export default Login;
