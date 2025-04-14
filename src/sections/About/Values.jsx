import {
  Box,
  colors,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import Groups2Icon from "@mui/icons-material/Groups2";

const Values = () => {
  const gridData = [
    {
      icon: StarIcon,
      text: "Trust",
      para: "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      icon: SchoolIcon,
      text: "Excellence",
      para: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    },
    {
      icon: Groups2Icon,
      text: "Client-centric",
      para: "Your dreams and needs are at the center of our universe. We listen, understand.",
    },
    {
      icon: StarIcon,
      text: "Our Commitment",
      para: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "20px", md: "80px" },
          alignItems: "center",
          marginBottom: {xs:"60px",sm:"120px"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
          }}
        >
          <Typography
            sx={{ fontSize: "38px", paddingTop: { xs: "20px", md: "0px" } }}
          >
            Our Values
          </Typography>
          <Typography sx={{ color: "text.grey60" }}>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </Typography>
        </Box>
        <Box>
          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              backgroundColor: "black",
              color: "text.white1",
              border: "1px solid grey",
              boxShadow: "5px 5px 10px  rgba(219, 191, 191, 0.2)  ",
              padding: "40px",
            }}
          >
            {gridData.map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={index}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                        alignItems: "center",
                      }}
                    >
                      <item.icon
                        sx={{
                          border: "1px solid ",
                          borderRadius: "100%",
                          width: "40px",
                          height: "40px",
                          padding: "8px",
                        }}
                        color="primary"
                      />
                      <Typography
                        sx={{
                          fontSize: { xs: "14px", md: "15px", lg: "20px" },
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        marginTop: "16px",
                        color: "text.grey60",
                      }}
                    >
                      {item.para}
                    </Typography>
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};

export default Values;
