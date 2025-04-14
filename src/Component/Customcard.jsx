import { Box, Button, CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import VillaIcon from "@mui/icons-material/Villa";

const CustomCard = ({ carditem }) => {
  const { bedroomCount, bathroomCount, photo, title, paragraph, price } =
    carditem;
  return (
    <Card
      sx={{
        border: "1px solid, grey",
        // maxWidth: "413px",
        backgroundColor: "black",
        paddingBottom:"10px",
        height:"100%"
        
      }}
    >
      <Box sx={{ padding: "30px" }}>
        <CardMedia
          component="img"
          image={photo}
          alt={title}
          sx={{ maxWidth: "100%" }}
        />
        <CardContent sx={{padding:"0px", marginTop:"20px", paddingBottom:"0px","&.MuiCardContent-root:last-child":{
            paddingBottom:"0px"
        }}}>
          <Typography sx={{ fontSize: "20px", color: "white" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "text.grey60" }}>
            {paragraph}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "24px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <BedIcon sx={{ fontSize: "24px", color: "white" }} />
              <Typography sx={{ color: "white" }}>{bedroomCount}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <BathtubIcon sx={{ fontSize: "22px", color: "white" }} />
              <Typography sx={{ color: "white" }}>{bathroomCount}</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <VillaIcon sx={{ fontSize: "22px", color: "white" }} />
              <Typography sx={{ color: "white" }}>Villa</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
              gap: "40px",
            }}
          >
            <Box>
              <Typography sx={{ color: "text.grey60" }}>Price</Typography>
              <Typography sx={{ fontSize: "20px", color: "white" }}>
                {price}
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  maxWidth: "227px",
                  maxHeight:"50px",
                  px: "20px",
                  py: "14px",
                  borderRadius: "10px",
                  fontSize: "10px",
                  marginTop:"6px"
                }}
                color="primary"
                variant="contained"
              >
                View Properties Details
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CustomCard;
