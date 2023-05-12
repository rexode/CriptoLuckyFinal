import React from 'react'
import {Button, Container ,Box ,Grid ,List, ListItem ,Hidden,Typography} from '@mui/material';
import nftlottery from '../../Assets/images/nftlottery.svg'

export default function Hero() {
  return (
    <>
        <Container>

        <Grid container justifyContent="center" >
        <Grid item xs={12} lg={6} >
            <div className='hero-main' >
              <Button className="Welcome" >
   
        Welcome to Cripto Lucky
 
      </Button>
      <Typography variant="h1" gutterBottom  className="winning" >
      Do you like to win?
      </Typography>

      <Typography variant="h1" gutterBottom  className="CriptoLucky" >
      Play with CriptoLucky for your chance to win huge $ETH prizes and $CLT 
      </Typography>
    <Button color="primary" variant='contained' className='getstarted'  >
    Get started
    </Button>
    </div>

 
        </Grid>
        <Grid item xs={12} md={8} lg={6} >
            <Box component="img" src={nftlottery} className='heroimg'  />
        </Grid>
        </Grid>
   
        </Container>
    </>
  )
}
