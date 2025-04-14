import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ExperienceCard = ({ carditem }) => {
  const { step, title, para } = carditem;
  return (
    <Box
      sx={{
        padding: "1px",
        background:
          "linear-gradient(128deg, #703BF7 -19.01%, rgba(112, 59, 247, 0) 83.65%)",
      }}
    >
      <Card
        sx={{
          height: "auto ",
          backgroundColor: "black",
          paddingBottom: "10px",
          color: "white",
        }}
      >
        <Box>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ padding: "14px" }}>{step}</Typography>
            <Box
              sx={{
                padding: { xs: "10px", sm: "20px", md: "40px" },
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
              <Typography sx={{ fontSize: "16px", color: "text.grey60" }}>
                {para}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ExperienceCard;
