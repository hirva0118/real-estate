import { Box } from "@mui/material";
import React from "react";
import HeroSection from "../sections/home/HeroSection";
import Properties from "../sections/home/Properties";
import Testimonial from "../sections/home/Testimonial";
import Faq from "../sections/home/Faq";

const Home = () => {
  return (
    <Box>
      <HeroSection/>
      <Properties/>
      <Testimonial/>
      <Faq/>
    </Box>
  );
};

export default Home;
