import React from "react";
import SVGRoadmap from "../../Assets/images/Roadmap2.png";
import { Container, Box } from "@mui/material";
import lastsidebar from "../../Assets/images/LAst-sidebar.svg";

export default function Image() {
  return (
    <Container className=" ImageTry">
      <div id="roadmap" style={{ height: 60 }}>
        <Box component="img" src={lastsidebar} className=" lastsidebar" style={{marginTop:"-400px"}}/>
      </div>
    </Container>
  );
}
