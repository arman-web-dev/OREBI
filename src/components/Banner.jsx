import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from "./Container";
import Slide1 from "../assets/Hero.jpg";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "50px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "#262626",
          borderRight: "3px white solid",
          padding: "10px 0",
          color: "transparent",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <section className="bg-[#f5f7f9]">
      <Container>
        <Slider {...settings}>
          <Link to="/shop">
            <div>
              <img src={Slide1} alt="" className="w-full" />
            </div>
          </Link>
          <Link to="/shop">
            <div>
              <img src={Slide1} alt="" className="w-full" />
            </div>
          </Link>
          <Link to="/shop">
            <div>
              <img src={Slide1} alt="" className="w-full" />
            </div>
          </Link>
          <Link to="/shop">
            <div>
              <img src={Slide1} alt="" className="w-full" />
            </div>
          </Link>
        </Slider>
      </Container>
    </section>
  );
};

export default Banner;
