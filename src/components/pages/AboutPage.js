import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import BorderInnerIcon from "@mui/icons-material/BorderInner";
import { Link } from "react-router-dom";
import TeamSection from "./TeamSection.js";

const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

// Styled component for icons
const IconBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
  fontSize: "24px",
  color: "#007bff",
});

const AboutPage = () => {
  return (
    <section>
      {/* About Section Header */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
           rgba(0, 0, 0, 0.5)), url(${baseUrl}/breadcrumb.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 10,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography
            component={Link}
            to="/"
            variant="h5" // Increase font size by setting a variant (h5, h4, etc.)
            sx={{
              color: "#fff",
              textDecoration: "none",
              "&:hover": {
                color: "#ff9e0e",
                borderRadius: 1, // Optional: to add a subtle hover effect
                padding: "0 8px", // Optional: adjust padding to match background on hover
              },
            }}
          >
            Home
          </Typography>
          <Typography
            component="span"
            variant="h5"
            sx={{ mx: 2, color: "#1c5739" }}
          >
            //
          </Typography>
          <Typography component="span" variant="h5" sx={{ color: "#fff" }}>
            About Us
          </Typography>
        </Box>
      </Box>

      <Box sx={{ py: 5 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Column with Images */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", mr: 2 }}>
                <img
                  src={`${baseUrl}/thumb2.jpg`}
                  alt="Thumbnail 1"
                  style={{
                    width: "100%",
                    borderRadius: "100px",
                    marginBottom: "10px",
                  }}
                />
                <img
                  src={`${baseUrl}/thumb2.jpg`}
                  alt="Thumbnail 2"
                  style={{ width: "100%", borderRadius: "100px" }}
                />
              </Box>
              <Box>
                <img
                  src={`${baseUrl}/thumb1.jpg`}
                  alt="Thumbnail 3"
                  style={{ width: "100%", borderRadius: "100px" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Column with Content */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: "none" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#1c5739", fontSize: "30px" }}
                  gutterBottom
                >
                  <BorderInnerIcon
                    sx={{ color: "#1c5739", marginRight: "10px" }}
                  />
                  About us
                </Typography>
                <Typography variant="h4" gutterBottom>
                  We are always ensuring the best course for your{" "}
                  <span style={{ color: "#ff9e0e" }}>learning</span>
                </Typography>
                <Typography variant="p">
                  <span style={{ color: "#1c5739",fontWeight:"bold" }}>Zenithh Academy </span>
                  was founded in 2021 by a group of like-minded teachers already
                  engaging individual classes. Since past 30 years and have been
                  blessed by a very large number of students who have qualified
                  for MBBS / BDS as well as various field of engineering
                  including IIT. The academy feels really grateful to the
                  society for its support throughout, we intend to serve you
                  even better.
                </Typography>

                {/* Features List */}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} display="flex">
                    <IconBox>
                      <i className="flaticon-video-1"></i>
                    </IconBox>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Sharing a Screen
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} display="flex">
                    <IconBox>
                      <i className="flaticon-puzzle"></i>
                    </IconBox>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Presenter Control
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Button */}
                <Box mt={3}>
                  <Button
                    component={Link}
                    variant="contained"
                    sx={{ backgroundColor: "#ff9e0e" }}
                    to="/contact"
                    endIcon={<i className="flaticon-right-arrow"></i>}
                  >
                    Admission Open
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <TeamSection />
    </section>
  );
};

export default AboutPage;
