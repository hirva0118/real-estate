import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const ClientCard = ({ carditem }) => {
  const { year, title, category, feedback } = carditem;
  return (
    
    <Card
      sx={{
        border: "1px solid, grey",
        height: "auto ",
        backgroundColor: "black",
        color: "white",
        
      }}
    >
      <Box sx={{ padding: {xs:"20px",sm:"40px"} }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "24px",padding:"40px"}}
        >
          <Box sx={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{display:'flex',flexDirection:'column'}}>
              <Typography sx={{ fontSize: "16px" ,color:"text.grey60"}}>{year}</Typography>
              <Typography sx={{ fontSize: {xs:"16px",sm:"20px",md:"24px"} }}>
                {title}
              </Typography>
            </Box>
            <Button sx={{border:"1px solid, grey",px:{xs:"10px",sm:"20px"},py:{xs:"10px",sm:"14px"}, borderRadius:"8px", color:"white",fontSize:{xs:"10px",sm:"14px"}}}>Visit Website</Button>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row',gap:"40px"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
                <Typography sx={{color:"text.grey60"}}>Domain</Typography>
                <Typography>Commercial real estate</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column"}}>
                <Typography sx={{color:"text.grey60"}}>Category</Typography>
                <Typography>{category}</Typography>
            </Box>
          </Box>
          <Box sx={{border:"1px solid, #383838"}}>
            <Box sx={{padding:"24px"}}>
              <Typography sx={{color:"text.grey60",fontSize:"16px",marginBottom:"10px"}}>What They Said 🤗</Typography>
              <Typography sx={{fontSize:"16px"}}>{feedback}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
    
  );
};

export default ClientCard;
