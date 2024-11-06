import Container from "./Container";
import React, { useContext } from "react";
import Slider from "react-slick";
import { useAuth } from "./ContextApi";
import ArrivalComponent from "./ArrivalComponent";
const NewArrival = () => {
  let {info} = useAuth();
  const settings = {
    infinite: true,
    speed: 2500,
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
            New Arrivals
          </h2>
          <Slider {...settings}>
            {info.map((item) => (
              <ArrivalComponent item={item} />
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default NewArrival;
