import React from 'react';
import { Container, Grid, Box, Typography, IconButton } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const InstituteSection = () => {
  return (
    <Container sx={{ py: 8 , border: '1px solid', borderColor: 'grey.300',boxShadow:4,marginBottom:"5px" }}>
      <Grid container spacing={4} alignItems="center">
        
        {/* Left Section - Image with Play Button */}
        <Grid item xs={12} md={6} position="relative">
          <Box
            component="img"
            src="assets/img/institute.jpg"
            alt="Institute"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 2,
            }}
          />
          <IconButton
            href="https://your-video-link.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `${pulse} 2s infinite`,
              color: 'white',
              fontSize: 64,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            <PlayCircleFilledIcon fontSize="inherit" />
          </IconButton>
        </Grid>
        
        {/* Right Section - Vision and Mission */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Vision
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Our vision is to be a leading educational institution that fosters innovative and lifelong learning, creating opportunities for students to excel and contribute to society.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
            Mission
          </Typography>
          <Typography variant="body1">
            Our mission is to provide a holistic educational experience that nurtures intellectual, social, and emotional growth, empowering students to reach their full potential and become responsible global citizens.
          </Typography>
        </Grid>

      </Grid>
    </Container>
  );
};

export default InstituteSection;
