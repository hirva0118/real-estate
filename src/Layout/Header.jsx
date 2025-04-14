import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Close } from "@mui/icons-material";
import { Icons } from "../assets/Icons";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };
  const navigationList = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Properties",
      path: "/properties",
    },
  
  ];
  return (
    <Box sx={{ backgroundColor: "background.grey1", color: "text.white1" }}>
      <Box
        sx={{
          py: "18px",

          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          position="relative"
          sx={{ fontSize: { xs: "10px", sm: "20px" } }}
        >
          ✨Discover Your Dream Property with Estatein. Learn More
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            right: 28,
            color: "inherit",
            maxWidth: "40px",
            display: { xs: "none", md: "block" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: { xs: "12px", md: "22px" },
          }}
        >
          <Box component="img" src={Icons.Logo} sx={{ maxWidth: "160px" }} />
          <Box
            sx={{
              // display:'flex',
              flexDirection: "row",
              gap: "30px",
              display: { xs: "none", md: "flex" },
              alignContent: "center",

              ".active-link": {
                color: "white",
                backgroundColor: "black",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                borderRadius: "4px",
                height: "100%",
              },
              ".link-class": {
                color: "white",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                padding: "8px 16px",
                height: "100%",
              },
            }}
          >
            {navigationList.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link-class"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ alignContent: "center" }}>
            <Button
              sx={{
                color: "text.white1",
                backgroundColor: "black",
                display: { xs: "none", md: "block" },
              }}
            >
              Real-Estate
            </Button>
            {isMobile && (
              <IconButton
                id="demo-menu"
                aria-controls={open ? "demo-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon
                  sx={{ display: { xs: "block", md: "none", color: "white" } }}
                />
              </IconButton>
            )}
            <Menu
              id="demo-menu"
              anchorEl={anchorE1}
              aria-labelledby="demo-menu"
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiList-root": {
                  backgroundColor: "aliceblue",
                },
                "& .MuiButtonBase-root" : {
                  textDecoration: "none"
                }
              }}
            >
              {/* <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>About Us</MenuItem>
              <MenuItem onClick={handleClose}>Properties</MenuItem>
              <MenuItem onClick={handleClose}>Services</MenuItem> */}

              {navigationList.map((item) => (
                <NavLink
              
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link-class"
                  }
                >
                  <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
