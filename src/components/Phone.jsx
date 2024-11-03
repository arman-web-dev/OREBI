import React from 'react';
import Container from './Container';
import Clock from '../assets/Ads_2.png';

const Phone = () => {
  return (
    <section className='py-6'>
        <Container>
           <div className="">
            <img src={Clock} alt="clock" className='w-full'/>
            </div> 
        </Container>
      
    </section>
  );
}

export default Phone;
