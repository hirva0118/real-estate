import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClientCard from "../../Component/ClientCard";

const Client = () => {
  const cardData = [
    {
      year: "Since 2019",
      title: "ABC Corporation",
      category: "Luxury",
      feedback:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      year: "Since 2018",
      title: "GreenTech ",
      category: "Retail space",
      feedback:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      year: "Since 2019",
      title: "ABC Corporation",
      category: "Luxury",
      feedback:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      year: "Since 2019",
      title: "ABC Corporation",
      category: "Luxury",
      feedback:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
      year: "Since 2019",
      title: "ABC Corporation",
      category: "Luxury",
      feedback:
        "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
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
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "38px", color: "white", marginBottom: "10px" }}
            >
              Our Valued Clients
            </Typography>
            <Typography
              sx={{
                color: "text.grey60",
                marginBottom: { xs: "20px", lg: "60px" },
              }}
            >
              At Estatein, we have had the privilege of working with a diverse
              range of clients across various industries. Here are some of the
              clients we've had the pleasure of serving
            </Typography>
          </Box>
        </Box>
        <Swiper
          pagination={{
            type: "fraction",
            el: ".swiper-pagination3",
            clickable: true,
            renderFraction: (currentClass, totalClass) => {
              return `<span class="${currentClass}"></span> of <span class="${totalClass}"></span>`;
            },
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev3",
            nextEl: ".swiper-next3",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1440: { slidesPerView: 2 },
          }}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <ClientCard key={index} carditem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "40px" }}>
          <span className="swiper-pagination3"></span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
              marginTop: "18px",
            }}
          >
            <Box className="swiper-prev3">
              <IconButton sx={{ color: "white", backgroundColor: "gray" }}>
                <ArrowBackIcon />
              </IconButton>
            </Box>
            <Box className="swiper-next3">
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

export default Client;
