import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Customcard from "../../Component/Customcard";
import { Images } from "../../assets/Images";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Discover = () => {
  const cardData = [
    {
      photo: Images.house1,
      title: "Seaside Serenity Villa",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "4-Bedroom",
      bathroomCount: "3-Bathroom",
      price: "$550,000",
    },
    {
      photo: Images.house2,
      title: "Metropolitan Heaven",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "2-Bedroom",
      bathroomCount: "2-Bathroom",
      price: "$550,000",
    },
    {
      photo: Images.house3,
      title: "Rustric Retreat Cottage",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "3-Bedroom",
      bathroomCount: "3-Bathroom",
      price: "$550,000",
    },
    {
      photo: Images.house1,
      title: "Metropolitan Heaven",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "2-Bedroom",
      bathroomCount: "2-Bathroom",
      price: "$550,000",
    },
    {
      photo: Images.house2,
      title: "Metropolitan Heaven",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "2-Bedroom",
      bathroomCount: "2-Bathroom",
      price: "$550,000",
    },
    {
      photo: Images.house3,
      title: "Metropolitan Heaven",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "2-Bedroom",
      bathroomCount: "2-Bathroom",
      price: "$550,000",
    },
    {
      photo: Images.house1,
      title: "Metropolitan Heaven",
      paragraph:
        "A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More",
      bedroomCount: "2-Bedroom",
      bathroomCount: "2-Bathroom",
      price: "$550,000",
    },
  ];

  return (
    <Container
      sx={{
        backgroundColor: "black",
        maxWidth: { xs: "600px", sm: "800px", md: "1000px", lg: "1480px" },
        marginTop:"40px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "lg" }}>
          <Typography
            sx={{ fontSize: "38px", color: "white", marginBottom: "10px" }}
          >
            Discover a World of Possibilities
          </Typography>
          <Typography
            sx={{
              color: "text.grey60",
              marginBottom: { xs: "20px", lg: "60px" },
            }}
          >
            Our portfolio of properties is as diverse as your dreams. Explore
            the following categories to find the perfect property that resonates
            with your vision of home
          </Typography>
        </Box>
      </Box>
      <Box>
        <Swiper
          pagination={{
            type: "fraction",
            el: ".swiper-paginat",
            clickable: true,
            renderFraction: (currentClass, totalClass) => {
              return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
            },
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <Customcard key={index} carditem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
          <span className="swiper-paginat"></span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
              marginTop: "18px",
            }}
          >
            <Box className="swiper-prev">
              <IconButton sx={{ color: "white", backgroundColor: "gray" }}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box className="swiper-next">
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

export default Discover;
