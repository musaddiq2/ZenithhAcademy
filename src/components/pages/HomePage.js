import React, { useEffect, useState } from "react";
import {
  Grid2,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Icon,
  Fab,
  IconButton,
} from "@mui/material";
import {
  Web,
  DesignServices,
  Code,
  PhoneIphone,
  ArtTrack,
  BarChart,
  People,
  TrendingUp,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TopHeader from "../layouts/topHeader/TopHeader";
import MainNavbar from "../layouts/MainNavbar/MainNavbar";
import HomeCarousel from "../layouts/Carousel/HomeCarousel";
import Slider from "react-slick";
import TestimonialSection from "./TestimonialSection";
import InstituteSection from "./InstituteSection";
import "./HomePage.css";
import { GiTeacher, GiBookmarklet } from "react-icons/gi";

const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const categories = [
  { icon: <Web />, title: "Web Design", courses: "25 Courses" },
  { icon: <DesignServices />, title: "Graphic Design", courses: "25 Courses" },
  { icon: <People />, title: "Personal Development", courses: "25 Courses" },
  { icon: <Code />, title: "IT And Software", courses: "25 Courses" },
  { icon: <TrendingUp />, title: "Sales Marketing", courses: "25 Courses" },
  { icon: <ArtTrack />, title: "Art & Humanities", courses: "25 Courses" },
];

const newSectionCategories = [
  { icon: <Web />, title: "New Course 1", description: "Learn something new." },
  {
    icon: <DesignServices />,
    title: "New Course 2",
    description: "Master design skills.",
  },
  {
    icon: <People />,
    title: "New Course 3",
    description: "Develop personally.",
  },
  {
    icon: <Code />,
    title: "New Course 4",
    description: "Upgrade your IT skills.",
  },
  {
    icon: <TrendingUp />,
    title: "New Course 5",
    description: "Boost your career.",
  },
  {
    icon: <ArtTrack />,
    title: "New Course 6",
    description: "Explore art & humanities.",
  },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

// Animated Counter Component
const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    // Scroll Event Listener
    window.addEventListener("scroll", handleScroll);

    // Count Animation Logic
    let start = 0;
    const duration = 4000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, [end]);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Typography variant="h4">{count}</Typography>
      {showScroll && (
        <Fab
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            backgroundColor: "#116e63",
            color: "#fff",

            "&:hover": {
              backgroundColor: "#fc9f0b",
              opacity: 0.9,
              color: "#fff",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

const HomePage = () => {
  return (
    <div className="homepage-container">
      <TopHeader />
      <MainNavbar />
      <HomeCarousel />
      <Box
  sx={{
    padding: { xs: "90px", sm: "30px", md: "40px" },
    textAlign: "center",
  }}
>
  <Typography variant="h4" gutterBottom>
    Browse By Categories
  </Typography>
  <Typography variant="subtitle1" gutterBottom>
    Find the perfect course for you
  </Typography>

  <Grid2 container spacing={{ xs: 2, sm: 4, md: 6 }}>
    {categories.map((category, index) => (
      <Grid2 item xs={12} sm={6} md={4} lg={3} key={index}>
        <Card
          sx={{
            textAlign: "center",
            padding: { xs: "15px", md: "20px" },
            boxShadow: 3,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <Icon
            sx={{
              fontSize: { xs: "40px", md: "50px" },
              color: "#116e63",
              marginBottom: { xs: "5px", md: "10px" },
            }}
          >
            {category.icon}
          </Icon>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              noWrap
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              {category.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category.courses}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "10px",
                backgroundColor: "#116e63",
                padding: { xs: "5px 10px", md: "8px 16px" },
              }}
            >
              View Courses
            </Button>
          </CardContent>
        </Card>
      </Grid2>
    ))}
  </Grid2>
</Box>


      {/* Numbers and Images*/}
      <Box
        className="numbers-section"
        sx={{ py: 6, backgroundColor: "#1c1c1c" }}
      >
        <Box className="numbers-content">
          <Grid2 container spacing={4} justifyContent="center">
            <Grid2 item xs={6} sm={3}>
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    border: "2px solid #fff",
                    color: "#fff",
                    mr: 2, // margin right to create space between icon and text
                  }}
                >
                  <GiTeacher />
                </IconButton>
                <Box>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    <AnimatedCounter end={30} />
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    Successfully Trained
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    border: "2px solid #fff",
                    color: "#fff",
                    mr: 2,
                  }}
                >
                  <HandshakeIcon />
                </IconButton>
                <Box>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    <AnimatedCounter end={43} />
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    Classes Completed
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    border: "2px solid #fff",
                    color: "#fff",
                    mr: 2,
                  }}
                >
                  <GiBookmarklet />
                </IconButton>
                <Box>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    <AnimatedCounter end={23} />
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    Satisfaction Rate
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 item xs={6} sm={3}>
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    border: "2px solid #fff",
                    color: "#fff",
                    mr: 2,
                  }}
                >
                  <Diversity3Icon />
                </IconButton>
                <Box>
                  <Typography variant="h4" sx={{ color: "#fff" }}>
                    <AnimatedCounter end={93} />
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    Students Community
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <TestimonialSection />
      {/* Auto Carousel Section */}
      <Box sx={{ padding: "40px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Featured Courses
        </Typography>

        <Slider {...carouselSettings}>
          {newSectionCategories.map((category, index) => (
            <Box key={index} sx={{ padding: "0 20px" }}>
              <Card
                sx={{
                  textAlign: "center",
                  padding: "10px",
                  margin: "5px",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: "#116e63",
                    color: "#fff",
                  },
                }}
              >
                <Icon
                  sx={{
                    fontSize: "50px",
                    color: "#116e63",
                    marginBottom: "10px",
                  }}
                >
                  {category.icon}
                </Icon>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ marginTop: "10px", backgroundColor: "#116e63" }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      <InstituteSection/>
    </div>
  );
};

export default HomePage;
