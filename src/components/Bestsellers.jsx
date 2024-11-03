import Container from './Container'
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ApiData } from './ContextApi';
import BestsellersComponent from './BestsellersComponent';
const Bestsellers = () => {
    let Data = useContext(ApiData)
    const settings = {
        infinite: true,
        speed: 2300,
        arrows: false,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <>
            <section className="lg:h-[500px] mt-[15px]">
                <Container>
                    <h2 className='font-dm text-[20px] lg:text-[39px] font-bold'>Our Bestsellers</h2>
                    <Slider {...settings}>
                        {Data.map((item) => (
                            <Link to="/shop">
                                <BestsellersComponent item={item} />
                            </Link>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Bestsellers

