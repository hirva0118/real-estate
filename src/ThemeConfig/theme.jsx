import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      grey1: "#1A1A1A",
    },
    text: {
      white1: "#ffff",
      grey60:"#999999",
    },
    primary:{
        main:"#703BF7"
    }
  },
  typography: {
    fontFamily: "Urbanist",
  },
  components:{
    MuiTextField:{
      styleOverrides:{
        root:{
          '& label':{
            color:"#fff"
          }
        }
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          '& label':{
            color:"#fff"
          }
        }
      }
    }
  }

});



export default theme;
