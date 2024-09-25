import React from "react";
import { Grid, Box, Typography, Button, Card, CardContent, Icon } from "@mui/material";
import { Web, DesignServices, Code, PhoneIphone, ArtTrack, BarChart, People, TrendingUp } from "@mui/icons-material";
import TopHeader from "../components/TopHeader";
import MainNavbar from "../components/MainNavbar";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import './HomePage.css';

const categories = [
  { icon: <Web />, title: "Web Design", courses: "25 Courses" },
  { icon: <DesignServices />, title: "Graphic Design", courses: "25 Courses" },
  { icon: <People />, title: "Personal Development", courses: "25 Courses" },
  { icon: <Code />, title: "IT And Software", courses: "25 Courses" },
  { icon: <TrendingUp />, title: "Sales Marketing", courses: "25 Courses" },
  { icon: <ArtTrack />, title: "Art & Humanities", courses: "25 Courses" },
  { icon: <PhoneIphone />, title: "Mobile Application", courses: "25 Courses" },
  { icon: <BarChart />, title: "Finance & Accounting", courses: "25 Courses" },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <TopHeader />
      <MainNavbar />
      <HomeCarousel />
      <Box sx={{ padding: "40px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Browse By Categories
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Find the perfect course for you
        </Typography>

        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ textAlign: "center", padding: "20px", boxShadow: 3 }}>
                <Icon sx={{ fontSize: "50px", color: "#fc940b", marginBottom: "10px" }}>
                  {category.icon}
                </Icon>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.courses}
                  </Typography>
                  <Button variant="contained" sx={{ marginTop: "10px", backgroundColor: "#fc940b" }}>
                    View Courses
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
