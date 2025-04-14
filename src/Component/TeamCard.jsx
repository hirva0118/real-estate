import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import TwitterIcon from "@mui/icons-material/Twitter";

const TeamCard = ({ carditem }) => {
  const { photo, name, domain } = carditem;
  return (
    <Card
      sx={{
        height: "auto ",
        backgroundColor: "black",
        border: "1px solid, grey",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <Box sx={{ padding: "24px" }}>
        <CardContent>
          <Box sx={{position:"relative"}}>
            <CardMedia
              component="img"
              image={photo}
              sx={{ maxWidth: "100%", height: "220px", paddingBottom: "50px" }}
            />
            <IconButton sx={{height:"40px",width:"60px",borderRadius:"43px",backgroundColor:"primary.main",position:"absolute", top:"70%",left:"42%"}}>
              <TwitterIcon sx={{color:"white"}} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>{name}</Typography>
            <Typography sx={{ fontSize: "15px", color: "text.grey60" }}>
              {domain}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              variant="outlined"
              placeholder="Say Hello 👋"
              sx={{
                borderRadius: "100px",
                backgroundColor: "background.grey1",
                width: "100%",
                color: "white",
              }}
            ></TextField>
            <IconButton>
              <NearMeIcon  sx={{width:"36px",height:"36px",backgroundColor:"primary.main",color:"white",borderRadius:"100px",padding:"8px"}}/>
            </IconButton>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TeamCard;
