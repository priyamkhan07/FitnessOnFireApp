import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/mybanner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="75px">FITNESS ON FIRE</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '64px', xs: '60px' } }} mb="23px" mt="30px">
      Always Keep That <br />
      Fire Alive!
    </Typography>
    <Typography fontSize="27px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '70px', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '28px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '100px' }}>
      Don't Limit Your Challenges, <br />
      Challenge Your Limit
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
