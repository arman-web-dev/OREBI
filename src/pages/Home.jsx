import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PromoBar from "../components/PromoBar";
import ImageSec from "../components/ImageSec";
import NewArrival from "../components/NewArrival";
import Bestsellers from "../components/Bestsellers";
import Phone from "../components/Phone";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <PromoBar />
      <ImageSec />
      <NewArrival />
      <Bestsellers />
      <Phone />
      <NewArrival />
    </div>
  );
};

export default Home;