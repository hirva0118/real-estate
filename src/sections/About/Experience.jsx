import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import ExperienceCard from "../../Component/ExperienceCard";

const Experience = () => {
  const cardData = [
    {
      step: "Step 01",
      title: "Discover the world of Possibilities",
      para: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
    },
    {
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      para: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      step: "Step 03",
      title: "Personalized Guidance",
      para: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      step: "Step 04",
      title: "See It for Yourself",
      para: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      step: "step 05",
      title: "Making Informed Decisions",
      para: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
    },
    {
      step: "Step 06",
      title: "Getting the Best Deal",
      para: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box sx={{marginBottom:"120PX"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            color: "white",
            // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
            marginBottom: "60px",
          }}
        >
          <Typography
            sx={{ fontSize: "38px", paddingTop: { xs: "20px", md: "0px" } }}
          >
            Navigating the Estatein Experience
          </Typography>
          <Typography sx={{ color: "text.grey60" }}>
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, }}>
          <Grid2 container spacing={2}>
            {cardData.map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
                <ExperienceCard key={index} carditem={item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};

export default Experience;
