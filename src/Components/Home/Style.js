import { styled } from "@mui/material/styles";
import Getstardimg from "../../Assets/images/getstarted.svg";
import douo from "../../Assets/images/douo.svg";
import whitepaper from "../../Assets/images/whitepaper.svg";
import whitepaper2 from "../../Assets/images/white-2.svg";
import twitterbtn from "../../Assets/images/twitterbtn.svg";

export const Homestyle = styled("div")(({ theme }) => ({
  "& .MuiButton-textPrimary": {
    fontSize: "16px",
    color: "white",
    fontFamily: "Inter-Regular",
    textTransform: "capitalize",
  },
  "& .MuiButton-textBlocked": {
    fontSize: "16px",
    color: "grey",
    fontFamily: "Inter-Regular",
    textTransform: "capitalize",
  },
  "& .nav-btn": {
    "& .MuiButton-textPrimary": {
      marginTop: "20px",
    },
  },
  "& .appbar-setting": {
    background: "none",
    boxShadow: "none",
    marginTop: "25px",
    "& .listnavbar": {
      float: "right",
      "& .MuiList-root": {
        display: "inline-flex",
      },
    },
    "& .connect-btn": {
      width: "239px",
      height: " 46px",
      color: " #F6851B",
      background: " rgba(0, 0, 0, 0.38)",
      border: "1px solid #FFB600",
      borderRadius: "26px",
      textTransform: "capitalize",
      fontSize: "16px",
      fontFamily: "Inter-Regular",
    },
    "& .connect-icon": {
      position: "relative",
      left: "-10px",
    },
  },

  "& .Welcome": {
    fontSize: "14px",
    color: "#FB6BFF",
    fontFamily: "Inter-SemiBold",
    marginTop: "200px",
    letterSpacing: " 0.2em",
    background: "#1A171B",
    borderRadius: "37px",
    padding: " 7px 17px",
  },
  "& .winning": {
    fontSize: "56px",
    color: "#FFCD00",
    fontFamily: "Inter-Regular",
    fontStyle: "italic",
    marginTop: "20px",
  },
  "& .CriptoLucky": {
    fontSize: "22px",
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    lineHeight: "32px",
  },
  "& .getstarted": {
    fontSize: "16px",
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    width: "210px",
    height: "58px",
    background:
      "linear-gradient(95.71deg, rgba(218, 16, 255, 0.71) -0.06%, rgba(0, 26, 255, 0.71) 113.1%)",
    borderRadius: "29px",
    backgroundImage: `url(${Getstardimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "22px",
    marginBottom: " 22px",
    textTransform: "capitalize",
  },
  "& .heroimg": {
    height: "auto",
    width: "130%",
  },

  "& .doyourdr": {
    backgroundImage: `url(${douo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "30px",
    marginBottom: "30px",
    height: "168px",
  },
  "& .about-text": {
    fontSize: "26px",
    color: "#FFCD00",
    fontFamily: "Inter-SemiBold",
  },
  "& .doyou-inner": {
    padding: "50px 50px",
  },
  "& .Whitepaper": {
    fontSize: "16px",
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    width: "167px",
    height: "47px",
    background:
      "linear-gradient(95.71deg, rgba(218, 16, 255, 0.71) -0.06%, rgba(0, 26, 255, 0.71) 113.1%)",
    borderRadius: "29px",
    backgroundImage: `url(${whitepaper})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "22px",
    marginBottom: " 22px",
    textTransform: "capitalize",
  },

  "& .Whitepaper-2": {
    fontSize: "16px",
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    width: "167px",
    height: "47px",
    background:
      "linear-gradient(95.71deg, rgba(218, 16, 255, 0.71) -0.06%, rgba(0, 26, 255, 0.71) 113.1%)",
    borderRadius: "29px",
    backgroundImage: `url(${whitepaper2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "22px",
    marginBottom: " 22px",
    textTransform: "capitalize",
  },

  "& .twitter": {
    fontSize: "16px",
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    width: "167px",
    height: "47px",
    background:
      "linear-gradient(95.71deg, rgba(218, 16, 255, 0.71) -0.06%, rgba(0, 26, 255, 0.71) 113.1%)",
    borderRadius: "29px",
    backgroundImage: `url(${twitterbtn})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "22px",
    marginBottom: " 22px",
    textTransform: "capitalize",
  },
  " & .about-main ": {
    marginTop: "150px",
    marginBottom: "150px",
    position: "relative",
  },

  "& .about-img-main": {
    width: "477px",
    height: "398px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  "& .aboutbtn": {
    fontSize: "14px",
    color: "#FB6BFF",
    fontFamily: "Inter-SemiBold",
    width: "125px",
    height: "34px",
    background: "#2C242E",
    borderRadius: "37px",
  },

  "& .LUCKY-text": {
    fontSize: "46px",
    color: "#FFFFFF",
    fontFamily: "Inter-Regular",
    marginTop: "20px",
    marginBottom: " 20px",
  },
  "& .Blockchain-text": {
    fontSize: "16px",
    color: "#FFFFFF",
    fontFamily: "Inter-Regular",
    lineHeight: "22px",
  },
  "& .topsidebr": {
    left: 0,
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  "& .aboutsidebr": {
    right: "-30px",
    position: "absolute",
    top: " -154px",
    zIndex: -1,
  },

  "& .Bottompic": {
    right: 0,
    position: "absolute",

    zIndex: -1,
  },
  "& .Cripto-bg": {
    background: "#1A171B",
    borderRadius: "37px",
    height: "34px",
  },
  "& .lastsidebar": {
    right: 0,
    position: "absolute",
    zIndex: -1,
  },

  // xl down
  [theme.breakpoints.down("xl")]: {
    "& .heroimg": {
      height: "auto",
      width: "100%",
    },
    "& .Welcome": {
      marginTop: "161px",
    },
    "& .topsidebr": {
      display: "none",
    },

    "& .ImageTry": {
      display: "none",
    },
    "& .aboutsidebr": {
      display: "none",
    },
  },

  // lg down
  [theme.breakpoints.down("lg")]: {
    "& .hero-main": {
      textAlign: "center",
    },
    "& .doyourdr": {
      backgroundImage: "unset",
      background:
        "linear-gradient(175.11deg, rgba(218, 16, 255, 0.08) 11%, rgba(0, 26, 255, 0.11) 96.99%)",
      border: " 3px solid #D710FF",
      borderRadius: "30px",
      height: "auto",
      "& .MuiGrid-item": {
        paddingTop: "3px",
      },
    },
    "& .about-text": {
      textAlign: "center",
    },
    "& .about-main ": {
      textAlign: "center",
    },
    "& .about-img-main": {
      width: "100%",
      height: "auto",
    },
  },
  // lg down
  [theme.breakpoints.down("sm")]: {
    "& .winning": {
      fontSize: "42px",
    },
    "& .doyou-inner": {
      padding: "0px 4px",
    },
    "& .about-text": {
      paddingTop: "50px",
    },
    "& .Whitepaper": {
      width: "144px",
    },
    "& .Whitepaper-2": {
      width: "144px",
    },
    "& .twitter": {
      width: "144px",
    },
    "& .about-img-main": {
      width: "83%",
      height: "auto",
    },
    "& .LUCKY-text": {
      fontSize: "37px",
    },
  },
}));
