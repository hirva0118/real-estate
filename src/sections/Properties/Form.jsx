import { CheckBox } from "@mui/icons-material";
import { Autocomplete, Box, Button, Checkbox, Container, FormControlLabel, FormGroup, Grid2, TextField, Typography } from "@mui/material";
import React from "react";

const Form = () => {
  const options1 = [
    { label: 'Delhi', id: 1 },
    { label: 'Mumbai', id: 2 },
  ];
  const options2 = [
    { label: 'Apartment', id: 1 },
    { label: 'TownHouse', id: 2 },
  ];
  const options3 = [
    { label: '2', id: 1 },
    { label: '3', id: 2 },
  ];
  const options4 = [
    { label: '40L-50L', id: 1 },
    { label: '50L-70L', id: 2 },
  ];
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "white",
          // marginLeft: { xs: "14px", sm: "16px", md: "40px", lg: "80px" },
          marginBottom: "60px",
          marginTop:"100px"
        }}
      >
        <Typography sx={{ fontSize: "48px" }}>Let's Make it Happen</Typography>
        <Typography sx={{ fontSize: "18px",color:"text.grey60" }}>
          Ready to take the first step toward your dream property? Fill out the
          form below, and our real estate wizards will work their magic to find
          your perfect match. Don't wait; let's embark on this exciting journey
          together.
        </Typography>
      </Box>

      <Box>
        <Box sx={{padding:{xs:"10px",sm:"20px",md:"50px",lg:"100px"}, color:"white"}}>
            <Grid2 container spacing={{xs:2,md:5}}>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>First Name:</Typography>
                    <TextField variant="outlined" placeholder="Enter First name" sx={{ backgroundColor:"background.grey1",width:"100%"}}></TextField>
                </Grid2>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>Last Name:</Typography>
                    <TextField variant="outlined" placeholder="Enter Last name" sx={{backgroundColor:"background.grey1",width:"100%"}}></TextField>
                </Grid2>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>Email</Typography>
                    <TextField variant="outlined" placeholder="Enter Email" sx={{backgroundColor:"background.grey1",width:"100%"}}></TextField>
                </Grid2>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>Phone:</Typography>
                    <TextField variant="outlined" placeholder="Enter Phone Number" sx={{backgroundColor:"background.grey1",width:"100%"}}></TextField>
                </Grid2>

                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px" ,fontSize:"14px"}}>Preferred location:</Typography>
                    <Autocomplete  sx={{backgroundColor:"background.grey1"}} disablePortal options={options1}  renderInput={(params) => <TextField {...params} label="Select location" variant="outlined" />} />
                </Grid2>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>Property Type:</Typography>
                    <Autocomplete  sx={{backgroundColor:"background.grey1"}} disablePortal options={options2}  renderInput={(params) => <TextField {...params} label="Select Property type" variant="outlined" />} />
                </Grid2>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>No. of Bedrooms:</Typography>
                    <Autocomplete  sx={{backgroundColor:"background.grey1"}} disablePortal options={options3}  renderInput={(params) => <TextField {...params} label="No.of Bedroooms" variant="outlined" />} />
                </Grid2>
                <Grid2 size={{xs:12,sm:6,md:3}}>
                    <Typography sx={{paddingBottom:"16px"}}>No.of Bathroom:</Typography>
                    <Autocomplete  sx={{backgroundColor:"background.grey1"}} disablePortal options={options3}  renderInput={(params) => <TextField {...params} label="No.of Bathroooms" variant="outlined" />} />
                </Grid2>

                <Grid2 size={{xs:12,sm:6}}>
                    <Typography sx={{paddingBottom:"16px"}}>Budget</Typography>
                    <Autocomplete  sx={{backgroundColor:"background.grey1"}} disablePortal options={options4}  renderInput={(params) => <TextField {...params} label="Budget" variant="outlined" />} />
                </Grid2>
                <Grid2 size={{xs:12,sm:6}} >
                    <Typography sx={{paddingBottom:"16px"}}>Preferred Contact method:</Typography>
                    <Box sx={{display:'flex',flexDirection:'row',gap:"16px"}}>
                        <TextField variant="outlined" placeholder="Enter your Number" sx={{backgroundColor:"background.grey1",width:"100%"}}></TextField>
                        <TextField variant="outlined" placeholder="Enter email " sx={{backgroundColor:"background.grey1",width:"100%"}}></TextField>
                    </Box>
                </Grid2>
                

                <Grid2 size={12}>
                    <Typography sx={{paddingBottom:"16px"}}>Message</Typography>
                    <TextField variant="outlined" placeholder="Enter Message" sx={{backgroundColor:"background.grey1",width:"100%"}}></TextField>
                </Grid2>

            </Grid2>

            <Box sx={{display:'flex',flexDirection:{xs:"column",sm:"row"},gap:"10px",justifyContent:"space-between", paddingTop:"30px",paddingLeft:"10px"}}>
              <FormGroup>
                <FormControlLabel  control={<Checkbox sx={{backgroundColor:"background.grey1",width:"20px",height:"20px"}}/>} label=" I agree with terms of use and privacy Policy "/>
              </FormGroup>
              <Button sx={{color:"white",fontSize:"14px"}} color="primary" variant="contained" onClick={() => alert("Message sent successfully!")} >Send your Message</Button>
            </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
