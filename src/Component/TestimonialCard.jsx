import {
  Avatar,
  Box,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TestimonialCard = ({ carditem }) => {
  const { title, para, profile, name, location  } = carditem;
  const [value, setvalue] = useState(5);
  return (
    <Card
      sx={{
        border: "1px solid, grey",
        // maxWidth: "413px",
        maxHeight:{md:"363px",lg:"362px"},
        backgroundColor: "black",
        paddingBottom: "10px",
        color:"white"
      }}
    >
      <Box sx={{ padding: "40px" }}>
        <CardContent sx={{display:'flex',gap:"30px", flexDirection:"column"}}>
          <Rating sx={{display:'flex',flexDirection:'row',gap:"8px"}} name="read-only" value={value} readOnly />
          <Typography sx={{fontSize:"20px"}}>{title}</Typography>
          <Typography sx={{fontSize:"16px"}}>{para}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row",gap:"14px" }}>
            <Avatar sx={{width:"50px",height:"50px"}} src={profile} />
            <Box sx={{ display: "flex", flexDirection: "column",gap:"10px" }}>
              <Typography sx={{fontSize:"18px"}}>{name}</Typography>
              <Typography sx={{fontSize:"16px"}}>{location}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TestimonialCard;
