import Container from "./Container";
import React, { useContext } from "react";
import Slider from "react-slick";
import { useAuth } from "./ContextApi";
import BestsellersComponent from "./BestsellersComponent";
const Bestsellers = () => {
  let {info} = useAuth();
  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="lg:h-[500px] mt-[15px]">
        <Container>
          <h2 className="font-dm text-[20px] lg:text-[39px] font-bold">
            Our Bestsellers
          </h2>
          <Slider {...settings}>
            {info.map((item) => (
              <BestsellersComponent item={item} />
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Bestsellers;
