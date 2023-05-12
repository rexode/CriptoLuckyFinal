import React from 'react'
import {Button, Container ,Box ,Grid ,List, ListItem ,Hidden,Typography} from '@mui/material';
import Aboutimg from '../../Assets/images/Aboutus.svg'
import Aboutsideimg from '../../Assets/images/About-sidebar.svg'

export default function Aboutus() {
  return (
    <>      
        <div className=' about-main ' >
        <Container>
            <Grid container spacing={5} justifyContent="center"  >
                <Grid item  md={8} lg={6} >
                    <Box  component="img" src={Aboutimg} className=' about-img-main '  />
            
                </Grid>
                <Grid item md={8} lg={6} >
                <Button variant="contained" color="secondary"  className='aboutbtn' > About Us </Button>
                <Typography variant="h1" gutterBottom  className="LUCKY-text" >
                Get to know the Power of CRIPTO LUCKY 
      </Typography>
      <Typography variant="h1" gutterBottom  className="Blockchain-text" >
      We are a group of developers specialized in Blockchain with a long experience in technology. We created the idea of CriptoLucky in 2021 and after a lot of hard work, dedication and research we managed to create CriptoLucky, the first platform dedicated exclusively to Lotteries, completely decentralized and transparent
      </Typography>
      <Button color="primary" variant='contained' className='getstarted'  >
      Know More
    </Button>

 
                </Grid>
            </Grid>
        </Container>

        <Box component="img" src={Aboutsideimg}  className=' aboutsidebr' />
        </div>
    </>
  )
}
