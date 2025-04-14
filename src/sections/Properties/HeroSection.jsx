import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "black",
        maxWidth: { xs: "600px", sm: "800px", md: "1000px", lg: "1480px" },
        marginTop: "60px",
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
            Find your Dream Property
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "text.grey60",
              marginBottom: { xs: "20px", lg: "60px" },
            }}
          >
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
