import {
  Box,
  Button,
  colors,
  Container,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Icons } from "../assets/Icons";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{ py:10, backgroundColor: "background.grey1", color: "text.white1" }}
    >
      <Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: {xs:"column",md:"row"},
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  md: "70%",
                  lg: "70%",
                  xl: "80%",
                },
              }}
            >
              <Typography
                sx={{ fontSize: "30px" }}
                fontWeight="bold"
                marginBottom="12px"
              >
                Start Your Real Estate Journey Today
              </Typography>
              <Typography>
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </Typography>
            </Box>

            <Button
              color="primary"
              variant="contained"
              sx={{ alignSelf: "center", height: "63px", margin: "20px" }}
            >
              Explore Properties
            </Button>
          </Box>
        </Container>
      </Box>

      <Box sx={{ marginTop: "100px", marginBottom: {xs:"20px",lg:"100px"}}}>
        <Container maxWidth="xl" sx={{ display: "flex", flexDirection: { xs: "column",lg:"row"}, gap:{xs:"20px",lg:"80px"} ,justifyContent:"space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5, marginTop:"5px" }}>
            <Box component="img" src={Icons.Logo} sx={{ maxWidth: "100px" }} />
            <Box>
              <TextField
                sx={{ color: "text.white1" }}
                id="outlined-adornment-password"
                label="Enter your Email"
                variant="outlined"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <NearMeIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{display:'flex',flexWrap:"wrap" ,justifyContent:{xs:"start",sm:"center"}  }}>
            <Box sx={{ fontSize: "12px", minWidth:{xs:"100px",md:"150px"}}}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px",marginTop:"20px" }}
              >
                <Link underline="none" color="grey">
                  {"Home"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Hero Section"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Features"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Properties"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Testimonial"}
                </Link>
                <Link underline="none" color="inherit">
                  {"FAQs"}
                </Link>
              </Box>
            </Box>
            <Box sx={{ fontSize: "12px",minWidth:{xs:"100px",md:"150px"}  }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px",marginTop:"20px" }}
              >
                <Link underline="none" color="grey">
                  {"About US"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Our Story"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Our works"}
                </Link>
                <Link underline="none" color="inherit">
                  {"How it works"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Our team"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Our clients"}
                </Link>
              </Box>
            </Box>
            <Box sx={{ fontSize: "12px",minWidth:{xs:"100px",md:"150px"} }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" ,marginTop:"20px"}}
              >
                <Link underline="none" color="grey">
                  {"Properties"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Portfolio"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Categories"}
                </Link>
              </Box>
            </Box>
            <Box sx={{ fontSize: "12px",minWidth:{xs:"100px",md:"150px"}  }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop:"20px" }}
              >
                <Link underline="none" color="grey">
                  {"Services"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Valuation Mastery"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Strategic marketing"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Negotiation wizardry"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Our Closing success"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Property management"}
                </Link>
              </Box>
            </Box>
            <Box sx={{ fontSize: "12px"  }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px",marginTop:"20px" }}
              >
                <Link underline="none" color="grey">
                  {"Contact US"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Contact Form"}
                </Link>
                <Link underline="none" color="inherit">
                  {"Our offices"}
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: {xs:"column",md:"row"},
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: {xs:"5px",sm:"20px"},
            padding: {xs:"20px",md:"30px"},
            
          }}
        >
          <Typography sx={{fontSize:{xs:"10px",sm:"14px"}}}>@2023 Estatein. All Rights Reserved.</Typography>
          <Typography sx={{fontSize:{xs:"10px",sm:"14px"}}}>Terms & Conditions</Typography>
        </Box>
        <Box sx={{ display:'flex', justifyContent:"start" }}>
          <IconButton >
            <FacebookOutlinedIcon sx={{ color: "white", margin: "10px" }} />
            <LinkedInIcon sx={{ color: "white", margin: "10px" }} />
            <TwitterIcon sx={{ color: "white", margin: "10px" }} />
            <SmartDisplayIcon sx={{ color: "white", margin: "10px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
