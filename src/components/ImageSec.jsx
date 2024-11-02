import React from 'react'
import AddOne from '../assets/Ad_1.jpg'
import AddTwo from '../assets/Ad_2.jpg'
import AddThree from '../assets/Ad_3.jpg'
import Container from './Container'

const ImageSec = () => {
  return (
    <section className='lg:py-[120px] py-[40px]'>
        <Container>
            <div className="flex justify-between">
                <div className="w-[49.5%] ">
                    <img src={AddOne} alt="" className='w-full'/>
                </div>
                <div className="w-[49.5%] ">
                    <div className="">
                        <img src={AddTwo} alt="" className='w-full'/>
                    </div>
                    <div className="lg:pt-8 pt-[10px]">
                        <img src={AddThree} alt="" className='w-full'/>

                    </div>
                </div>
            </div>
        </Container>
      
    </section>
  )
}

export default ImageSec