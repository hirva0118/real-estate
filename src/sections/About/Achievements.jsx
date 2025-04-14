import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AchievementCard from "../../Component/AchievementCard";

const Achievements = () => {
  const cardData =[
    {
      title:"3+ Years of Excellence",
      para:"With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
    },
    {
      title:"Happy Clients",
      para:"Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
    },
    {
      title:"Industry Recognition",
      para:"We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
    }
  ]
  return (
    <Container maxWidth="xl">
      <Box sx={{marginBottom:{sm:"60px",lg:"120px"}}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap:"10px",
            color: "white",
            // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
            marginBottom:"60px"
          }}
        >
          <Typography
            sx={{ fontSize: "38px", paddingTop: { xs: "20px", md: "0px" } }}
          >
            Our Achievements
          </Typography>
          <Typography sx={{ color: "text.grey60" }}>
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:{xs:"column",md:"row"},gap:"30px",  }}>
          {cardData.map((item,index)=>(
            <AchievementCard key={index} carditem={item}/>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Achievements;
