import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import FaqCard from "../../Component/FaqCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Faq = () => {
  const cardData = [
    {
      title: "How do I search for properties on Estatein?",
      para: "Learn how to use our user-friendly search tools to find out properties with us.",
    },
    {
      title: "What documents do I need?",
      para: "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      para: "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How can I contact an Estatein agent?",
      para: "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How can I contact an Estatein agent?",
      para: "Discover the different ways you can get in touch with our experienced agents.",
    },
  ];
  return (
    <Container
      sx={{
        backgroundColor: "black",
        maxWidth: { xs: "600px", sm: "800px", md: "1000px", lg: "1480px" },
        marginBottom: "100px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs:"column",lg:"row"},
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "38px", color: "white", marginBottom: "10px" }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ color: "text.grey60",maxWidth:"950px", marginBottom: {xs:"20px",lg:"60px"} }}>
              Find answers to common questions about Estatein's services,
              property listings, and the real estate process. We're here to
              provide clarity and assist you every step of the way.
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
            View all FAQ's
          </Button>
        </Box>
        <Swiper
          pagination={{
            type: "fraction",
            el: ".swiper-pagin",
            clickable: true,
            renderFraction: (currentClass, totalClass) => {
              return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
            },
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev2",
            nextEl: ".swiper-next2",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <FaqCard key={index} carditem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
          <span className="swiper-pagin"></span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
              marginTop: "18px",
            }}
          >
            <Box className="swiper-prev2">
              <IconButton sx={{ color: "white", backgroundColor: "gray" }}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box className="swiper-next2">
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

export default Faq;
