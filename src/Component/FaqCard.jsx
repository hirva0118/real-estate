import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const FaqCard = ({ carditem }) => {
  const { title, para } = carditem;
  return (
    <Card
      sx={{
        border: "1px solid, grey",
        // maxHeight: { md: "290px", lg: "282px" },
        // height:"auto ",
        // height:"100%",
        height:"280px",
        backgroundColor: "black",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <Box sx={{ padding: "40px" }}>
        <CardContent sx={{display:"flex",flexDirection:"column",gap:"24px"}}>
          <Typography sx={{fontSize:"20px"}}>{title}</Typography>
          <Typography sx={{fontSize:"16px",color:"text.grey60"}}>{para}</Typography>
          <Button sx={{maxWidth:"100px",maxHeight:"46px",color:"white", fontSize:"10px",py:"14px", px:"20px"}} variant="outlined" >
            Read More
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default FaqCard;
