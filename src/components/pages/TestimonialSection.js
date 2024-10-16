import React from 'react';
import { Container, Grid, Box, Typography, Avatar, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
const testimonials = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: `${baseUrl}/team.jpg`,
    name: "Laurie Duncanr",
    position: "Software Developer",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: `${baseUrl}/team.jpg`,
    name: "Jorge Carter",
    position: "Software Developer",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: `${baseUrl}/team.jpg`,
    name: "Gloria Burnett",
    position: "Software Developer",
  },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: '#ff9e0e', py: 8 }}>
       
      <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4,  }}>
          Our Testimonials
        </Typography>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
            <Box component="img" src={`${baseUrl}/thumb1.jpg`} alt="Testimonial" sx={{ maxWidth: '100%' }} />
            
          </Grid>
          <Grid item xs={12} md={7}>
            <Carousel indicators={true} navButtonsAlwaysVisible={true}>
              {testimonials.map((testimonial, index) => (
                <Paper key={index} elevation={0} sx={{ p: 4, backgroundColor: 'white', borderRadius: 2 }}>
                  <Box sx={{ mb: 2, textAlign: 'center' }}>
                    <FormatQuoteIcon sx={{ width: '140px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {testimonial.content}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="h6">{testimonial.name}</Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
