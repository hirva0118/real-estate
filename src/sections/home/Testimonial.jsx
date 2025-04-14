import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import TestimonialCard from "../../Component/TestimonialCard";
import { Icons } from "../../assets/Icons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Testimonial = () => {
  const cardData = [
    {
      title: "Exceptional Service",
      para: "The Estatein team guided us through the entire buying process.Their knowledge to our needs were impressive.Thank you for support!",
      profile: Icons.profile,
      name: "Wade Warren",
      location: "USA, California",
    },
    {
      title: "Exceptional Service",
      para: "The Estatein team guided us through the entire buying process.Their knowledge to our needs were impressive.Thank you for support!",
      profile: Icons.profile1,
      name: "Emelie Thomson",
      location: "USA, Florida",
    },
    {
      title: "Trusted Advisors",
      para: "The Estatein team guided us through the entire buying process.Their knowledge to our needs were impressive.Thank you for support!",
      profile: Icons.profile3,
      name: "John Mans",
      location: "USA, Nevada",
    },
    {
      title: "Trusted Advisors",
      para: "The Estatein team guided us through the entire buying process. Their knowledge to our needs were impressive. Thank you for support!",
      profile: Icons.profile3,
      name: "John Mans",
      location: "USA, Nevada",
    },
    {
      title: "Trusted Advisors",
      para: "The Estatein team guided us through the entire buying process. Their knowledge to our needs were impressive. Thank you for support!",
      profile: Icons.profile3,
      name: "John Mans",
      location: "USA, Nevada",
    },
  ];
  return (
    <Container
      sx={{
        backgroundColor: "black",
        maxWidth: { xs: "600px", sm: "800px", md: "1000px", lg: "1480px" },
        marginBottom: "120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column",lg:"row"},
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "lg" }}>
          <Typography
            sx={{ fontSize: "38px", color: "white", marginBottom: "10px" }}
          >
            What Our Clients say
          </Typography>
          <Typography sx={{ color: "text.grey60", marginBottom:{xs:"10px",lg:"60px"} }}>
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </Typography>
        </Box>
        <Button
          sx={{
            display: "flex",
            height: "fit-content",
            color: "white",
            backgroundColor: "background.grey1",
            padding: "20px",
            marginBottom:{xs:"20px",lg:"0px"}
          }}
        >
          View all Testimonials
        </Button>
      </Box>
      <Box>
        <Swiper
          pagination={{
            type: "fraction",
            el: ".swiper-pagi",
            clickable: true,
            renderFraction: (currentClass, totalClass) => {
              return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
            },
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev1",
            nextEl: ".swiper-next1",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard key={index} carditem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
          <span className="swiper-pagi"></span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
              marginTop: "18px",
            }}
          >
            <Box className="swiper-prev1">
              <IconButton sx={{ color: "white", backgroundColor: "gray" }}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box className="swiper-next1">
              <IconButton sx={{ color: "white", backgroundColor: "grey" }}>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonial;
