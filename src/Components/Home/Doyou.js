import React from 'react'
import {Button, Container ,Box ,Grid ,List, ListItem ,Hidden,Typography} from '@mui/material';
import Whitepaper from '../../Assets/images/Whitepaper.pdf'

export default function Doyou() {
  return (
    <>
    <Container>
        <div className='doyourdr' >
            <div className=' doyou-inner ' >
            <Grid container spacing={4}  >
                <Grid  item xs={12} lg={4}  className="line-aftr" >
                <Typography variant="h1" gutterBottom  className="about-text" >
                Do you want to know more about us?
      </Typography>
                </Grid>
                <Grid item xs={12} lg={8} >

                    <Grid container justifyContent="center">
                    <Grid item xs={6} sm={6} md={4} >
                        <Box textAlign="center" >
                        <Button color="primary" variant='contained' href={Whitepaper}  className='Whitepaper'  >
                        Whitepaper
    </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} >
                        <Box textAlign="center" >
                        <Button color="primary" variant='contained' className='twitter' href="https://twitter.com/criptoluckyreal"  >
                        Twitter
    </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} >
                        <Box textAlign="center" >
                        <Button color="primary" variant='contained' className='Whitepaper-2' href="#roadmap"  >
                        Roadmap
    </Button>
                        </Box>
                    </Grid>

                    </Grid>

                </Grid>
            </Grid>
            </div>
        </div>
    </Container>
    
    </>
  )
}
