import React from "react";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const items = [
    {
      img: require("../../assets/images/thumb.png"),
      alt: "Slide 1",
      isFirst: true,
    },
    {
      img: require("../../assets/images/thumb.png"),
      alt: "Slide 1",
      isFirst: true,
    },
    {
      img: require("../../assets/images/thumb.png"),
      alt: "Slide 1",
      isFirst: true,
    },
    {
      img: require("../../assets/images/thumb.png"),
      alt: "Slide 1",
      isFirst: true,
    },
    {
      img: require("../../assets/images/thumb.png"),
      alt: "Slide 1",
      isFirst: true,
    },
  ];
  return (
    <footer>
      {/* Footer Main Area */}
      <Box sx={{ backgroundColor: "black", color: "white", pt: 8, pb: 4 }}>
        <Container>
          <Grid2 container spacing={4}>
            {/* Logo and Description */}
            <Grid2 item xs={12} sm={6} md={4}>
              <Box>
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="Logo"
                  style={{ marginBottom: "20px",width:"50px" }}
                />
                <Typography>
                  Zenithh Academy was founded in 2021 by a group of like-minded
                  teachers already engaging individual classes. Since past 30
                  years and have been blessed by a very large number of students
                  who have qualified for MBBS / BDS as well as various field of
                  engineering including IIT. The academy feels really grateful
                  to the society for its support throughout, we intend to serve
                  you even better.
                </Typography>
              </Box>
              <Box mt={2}>
                <IconButton color="inherit" href="#">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <PinterestIcon />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Grid2>

            {/* Services */}
            <Grid2 item xs={12} sm={6} md={3}>
              <Typography variant="h6">Our Services:</Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link href="#" color="inherit">
                    JEE Adv. (IIT)
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    JEE Main
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    NEET
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Foundation
                  </Link>
                </li>
              </ul>
            </Grid2>

            {/* Quick Links */}
            <Grid2 item xs={12} sm={6} md={2}>
              <Typography variant="h6">Quick Links:</Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <Link href="#" color="inherit">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Blog and Article
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit">
                    Privacy & Policy
                  </Link>
                </li>
              </ul>
            </Grid2>

            {/* Gallery */}
            <Grid2 item xs={12} sm={6} md={3}>
              <Typography variant="h6">Gallery:</Typography>

              <Grid2 container spacing={1}>
                {items.map((item, index) => (
                  <Grid2 item xs={4}>
                    <img src={item.img} alt={item.alt} width="100%" />
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* Copyright Area */}
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          py: 2,
          textAlign: "center",
        }}
      >
        <Typography>© 2023 Zenithh Academy. All Rights Reserved</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
