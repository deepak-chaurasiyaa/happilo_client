import React from 'react';
import { Typography, Box } from '@mui/material';
import { JOURNEY_TEXT } from '../../shared/constant';
import { styled } from '@mui/system';

const JourneyPage = () => {
  const PaperJourney = styled(Box)(({ theme }) => ({
    color: 'black',
  }));

  return (
    <Box
      sx={{
        width: '97%',
        margin: '1rem auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#f0e7f6',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        }}
      >
        <Box>
          <Typography variant='h4' align='center' className='journey'>
            HAPPILO’S JOURNEY
          </Typography>
        </Box>
        <PaperJourney className='journey-mid'>
          <Box>
            <iframe
              className='journey-video-container'
              src='https://www.youtube.com/embed/Mh7yQNcSbbE?controls=0'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </Box>
          <Box
            className='journey-textContainer'
            style={{ border: '1px solid #3e3d3d6b' }}
          >
            <Typography variant='body1' className='journey-text'>
              {JOURNEY_TEXT.JOURNEY_MESSAGE}
            </Typography>
            <button className='journey-button'>SHOP NOW</button>
            <img
              style={{
                width: 80,
                height: 79,
                position: 'relative',
                bottom: '24rem',
                left: '15rem',
              }}
              alt=''
              src='https://cdn.shopify.com/s/files/1/0569/6867/5527/files/nut-emoji.png?v=1671441267'
              loading='lazy'
            ></img>
            <img
              style={{
                width: 80,
                height: 83,
                position: 'relative',
                bottom: '22rem',
                left: '26rem',
              }}
              alt=''
              src='https://cdn.shopify.com/s/files/1/0569/6867/5527/files/nut-emoji-1.png?v=1671442683'
              loading='lazy'
            ></img>
            <img
              style={{
                width: 80,
                height: 79,
                position: 'relative',
                bottom: '2rem',
                left: '25rem',
              }}
              alt=''
              src='https://cdn.shopify.com/s/files/1/0569/6867/5527/files/nut-emoji-2.png?v=1671442683'
              loading='lazy'
            ></img>
            <img
              style={{
                width: 80,
                height: 79,
                position: 'relative',
                bottom: '-2rem',
                left: '15rem',
              }}
              alt=''
              src='https://cdn.shopify.com/s/files/1/0569/6867/5527/files/nut-emoji-3.png?v=1671442684'
              loading='lazy'
            ></img>
            <img
              style={{
                width: 80,
                height: 79,
                position: 'relative',
                bottom: '-2rem',
                left: '-16rem',
              }}
              alt=''
              src='	https://cdn.shopify.com/s/files/1/0569/6867/5527/files/nut-emoji-4.png?v=1671442684'
              loading='lazy'
            ></img>
          </Box>
        </PaperJourney>
      </Box>
      <Box sx={{ padding: '2rem 0 0 0' }}>
        <img
          alt=''
          src='sc_.png'
          style={{ width: '100%', padding: '20px 0 -20px 0' }}
        />
      </Box>
    </Box>
  );
};

export default JourneyPage;
