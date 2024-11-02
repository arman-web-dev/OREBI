import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PromoBar from "../components/PromoBar";
import ImageSec from "../components/ImageSec";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <PromoBar />
      <ImageSec />
      <NewArrival />
    </div>
  );
};

export default Home;