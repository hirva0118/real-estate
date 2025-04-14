import React from "react";
import { Images } from "../../assets/Images";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Container maxWidth="xl">
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          backgroundColor: "black",
          color: "text.white1",
          gap: { xs: "12px", sm: "20px", md: "60px" },
          
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "55%" ,md:"50%"},
            marginTop: { xs: "10px", sm: "20px", md: "60px", lg: "98px" },
            // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "30px", lg: "38px" },
              lineHeight: { md: "50px", lg: "72px" },
              fontStyle: "bold",
            }}
          >
            Our Journey
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              marginTop: "24px ",
              color: "text.grey60",
            }}
          >
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: { xs: "10px", sm: "30px", lg: "50px" },
              gap: { xs: "8px", lg: "20px" },
            }}
          >
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              flexDirection: "row",
            //   marginTop: { xs: "26px", md: "40px", lg: "50px" },
              marginBottom: { xs: "20px", sm: "36px", md: "60px", lg: "98px" },
              gap: { xs: "10px", md: "14px", lg: "20px" },
            }}
          >
            <Box
              sx={{
                borderColor: "grey",
                backgroundColor: "background.grey1",
                px: { xs: "10px", sm: "12px", md: "16px", lg: "20px" },
                py: "14px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "18px", md: "24px", lg: "30px" } }}
              >
                200+
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                  color: "text.grey60",
                }}
              >
                Happy Customers
              </Typography>
            </Box>
            <Box
              sx={{
                borderColor: "grey",
                backgroundColor: "background.grey1",
                px: { xs: "10px", sm: "12px", md: "16px", lg: "20px" },
                py: "14px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "18px", md: "24px", lg: "30px" } }}
              >
                10K+
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                  color: "text.grey60",
                }}
              >
                Properties for clients
              </Typography>
            </Box>
            <Box
              sx={{
                borderColor: "grey",
                backgroundColor: "background.grey1",
                px: { xs: "10px", sm: "12px", md: "16px", lg: "20px" },
                py: "14px",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{ fontSize: { xs: "18px", md: "24px", lg: "30px" } }}
              >
                16+
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                  color: "text.grey60",
                }}
              >
                Years of experiance
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ maxWidth: { xs: "100%", sm: "45%" ,md:"50%"}, height: "50%" }}>
          <Box
            // sx={{ maxWidth: "690px", height: "670px" }}
            sx={{
              width: "100%",
              height: "435px",
            //   maxWidth: { xs: "100%", sm: "300px", md: "600px", lg: "700px" },
              maxHeight: { xs: "320px", sm: "380px", md: "500px", lg: "700px" },
            }}
            component="img"
            src={Images.About}
          ></Box>
        </Box>
      </Box>
    </Box>
    </Container>
  );
};

export default HeroSection;
