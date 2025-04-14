import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import React from "react";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box sx={{backgroundColor:"black"}}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
export default Layout;
