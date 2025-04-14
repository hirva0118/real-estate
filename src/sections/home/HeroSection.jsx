import { Box, Button, Grid2, Icon, Typography } from "@mui/material";
import React from "react";
import { Images } from "../../assets/Images";
import { Icons } from "../../assets/Icons";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          backgroundColor: "black",
          color: "text.white1",
          gap: { xs: "12px", sm: "20px", md: "6px" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "50%" },
            marginTop: { xs: "10px", sm: "20px", md: "60px", lg: "98px" },
            marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "60px" },
              lineHeight: { md: "50px", lg: "72px" },
              fontStyle: "bold",
            }}
          >
            Discover your dream property with Estatein
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              marginTop: "24px ",
              color: "text.grey60",
            }}
          >
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: { xs: "10px", sm: "30px", lg: "50px" },
              gap: { xs: "8px", lg: "20px" },
            }}
          >
            <Button sx={{ color: "white" }} onClick={() => navigate('/about')}>Learn More</Button>
            <Button
              sx={{
                height: { xs: "40px", md: "50px", lg: "63px" },
                borderRadius: "10px",
              }}
              color="primary"
              variant="contained"
              onClick={() => navigate('/properties')}
            >
              Browse Properties
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              flexDirection: "row",
              marginTop: { xs: "26px", md: "40px", lg: "50px" },
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

        <Box sx={{ maxWidth: { xs: "100%", sm: "50%" }, height: "50%" }}>
          <Box
            // sx={{ maxWidth: "690px", height: "670px" }}
            sx={{
              width: "100%",
              height: "670px",
              maxWidth: { xs: "100%", sm: "400px", md: "600px", lg: "700px" },
              maxHeight: { xs: "320px", sm: "400px", md: "500px", lg: "700px" },
            }}
            component="img"
            src={Images.Building}
          ></Box>
        </Box>
      </Box>
  
      <Grid2
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          backgroundColor: "black",
          color: "text.white1",
          marginBottom: "50px",
        }}
      >
        {[
          { icon: Icons.first, text: "Find your dream home" },
          { icon: Icons.second, text: "Unlock property value" },
          { icon: Icons.third, text: "Effortless property management" },
          { icon: Icons.fourth, text: "Smart investments, informed Decisions" },
        ].map((item, index) => (
          <Grid2  size={{xs:12,sm:6,md:6,lg:3}} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                px: "16px",
                py: "30px",
                backgroundColor: "background.grey1",
                borderRadius: "10px",
                width: "100%",
                height: "160px",
              }}
            >
              <Box sx={{ maxWidth: "70px" }} component="img" src={item.icon} />
              <Typography
                sx={{
                  marginTop: "16px",
                  fontSize: { xs: "14px", md: "15px", lg: "16px" },
                  textAlign: "center",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
      ;
    </Box>
  );
};

export default HeroSection;
