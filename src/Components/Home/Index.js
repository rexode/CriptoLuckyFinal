import React from 'react'
import Navbar from './Navbar'
import { Homestyle } from './Style'
import Hero from './Hero'
import Doyou from './Doyou'
import Image from "./Image";

import Aboutus from './Aboutus'
import topsidebar from '../../Assets/images/topsidebar.svg';
import "../../App.css"

import {Box} from '@mui/material';
import Roadmap from './Roadmap'


export default function Index() {
  return (
    <Homestyle>
      <Navbar />
      <Hero />
      <Doyou />
      <Aboutus />
      <Roadmap />
      <Image className=" ImageTry" />

      <Box component="img" src={topsidebar} className=" topsidebr" />
    </Homestyle>
  );
}
