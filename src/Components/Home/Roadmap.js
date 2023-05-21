import React from 'react'
import SVGRoadmap from '../../Assets/images/Roadmap2.png'
import { Container, Box } from '@mui/material'


export default function Roadmap() {
  return (
    <Container>
      <div id="roadmap">
        <Box component="img" src={SVGRoadmap} width="100%" height="auto" />
      </div>
    </Container>
  );
}
