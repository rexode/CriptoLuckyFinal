import React from 'react'
import Navbar from './Navbar'
import { Homestyle } from './Style'
import Hero from './Hero'
import Doyou from './Doyou'
import Aboutus from './Aboutus'
import topsidebar from '../../Assets/images/topsidebar.svg'
import {Box} from '@mui/material';
import Roadmap from './Roadmap'


export default function Index() {
  return (
    <Homestyle>

       <Navbar/>
       <Hero/>
       <Doyou/>
       <Aboutus/>
       <Roadmap/>
       <Box component="img" src={topsidebar}  className=' topsidebr' />

    </Homestyle>
  )
}
