import React from "react";
import TeamCard from "../../Component/TeamCard";
import { Box, Container, Grid2, Typography } from "@mui/material";

const Team = () => {
  const carddata = [
    {
      photo:
        "https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-red-shirt-with-ash-tie-suit-for-mens-passport-size-photo-png-image_11732068.png",
      name: "Max Mitchell",
      domain: "Founder",
    },
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrR-arbug28y93uFHUAIA8xCXKPXygmGdmsw&s",
      name: "Sarah Johnson",
      domain: "Chief officer",
    },
    {
      photo:
        "https://thumbs.dreamstime.com/b/photo-document-passport-id-mature-caucasian-man-suit-white-shirt-126121929.jpg",
      name: "David Brown",
      domain: "Head of Property management",
    },
    {
      photo:
        "https://t4.ftcdn.net/jpg/07/57/59/25/360_F_757592568_v96NBkRahyTl9QFa99qpcmePYnfoXwZq.jpg",
      name: "Michael Turner",
      domain: "Legal Counsel",
    },
  ];
  return (
    <Container maxWidth="xl">
      <Box sx={{ marginBottom: "120PX" }}>
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
            Meet the Estatein Team
          </Typography>
          <Typography sx={{ color: "text.grey60" }}>
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
          }}
        >
          <Grid2 container spacing={2}>
            {carddata.map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
                <TeamCard key={index} carditem={item} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
};

export default Team;
