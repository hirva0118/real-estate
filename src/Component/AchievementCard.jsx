import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AchievementCard = ({ carditem }) => {
  const { title, para } = carditem;
  return (
    <Card
      sx={{
        border: "1px solid",
        height: "auto ",
        width:{md:"40%"},
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Box sx={{padding:{xs:"20px",md:"40px"}}}>
      <CardContent
        sx={{ display: "flex", gap: "24px", flexDirection: "column" }}
      >
        <Typography sx={{ fontSize: "24px" }}>{title}</Typography>
        <Typography sx={{ fontSize: "16px", color: "text.grey60" }}>
          {para}
        </Typography>
      </CardContent>
      </Box>
    </Card>
  );
};

export default AchievementCard;
