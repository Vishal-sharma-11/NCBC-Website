import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Carousel from "../../Components/Carousel/Carousel";
import LatestEvents from "../../Components/LatestEvents/LatestEvents";
import Fheader from "../../Components/Fheader/Fheader";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <LatestEvents />
      <SocialMedia />
      <Fheader />
    </div>
  );
};

export default Homepage;
