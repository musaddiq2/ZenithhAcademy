import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  colors,
} from "@mui/material";
import {
  LocationOn,
  AccessTime,
  Phone,
  Email,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const ContactPage = () => {
  return (
    <main>
      {/* Breadcrumb Area */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
           rgba(0, 0, 0, 0.5)), url(${baseUrl}/breadcrumb.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: 6,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Contact Us
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
            Contact
          </Typography>
        </Box>
      </Box>

      {/* Contact Area */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Get in Touch
              </Typography>
              <Typography sx={{ mb: 5 }}>
                Get in touch with us now and send a message!
              </Typography>
              <Box sx={{ mb: 5 }}>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {/* Contact Information List */}
                  <li style={{ display: "flex", marginBottom: "20px" }}>
                    <LocationOn
                      sx={{ fontSize: 30, color: "#1c5739", mr: 2 }}
                    />
                    <Box>
                      <Typography>Our Address</Typography>
                      <Typography>
                        Y.N Tower Opposite Pacific Hospital, Maulana Azad
                        College Road, Himayat Bagh, Aurangabad.
                      </Typography>
                    </Box>
                  </li>
                  {/* Repeat similar structure for other items */}
                  <li style={{ display: "flex", marginBottom: "20px" }}>
                    <AccessTime
                      sx={{ fontSize: 30, color: "#1c5739", mr: 2 }}
                    />
                    <Box>
                      <Typography>Hours of Operation</Typography>
                      <Typography>Mon - Fri: 9.00am to 5.00pm</Typography>
                    </Box>
                  </li>
                  <li style={{ display: "flex", marginBottom: "20px" }}>
                    <Phone sx={{ fontSize: 30, color: "#1c5739", mr: 2 }} />
                    <Box>
                      <Typography>Contact</Typography>
                      <Typography>+91 8308489629</Typography>
                      <Typography>supportinfo@zenithhacademy.com</Typography>
                    </Box>
                  </li>
                </ul>
              </Box>
              <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
                <Button
                  href="#it-newsletter"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff9e0e",
                    color: "white",
                    mb: { xs: 2, sm: 0 },
                    mr: { sm: 2 },
                    "&:hover": { backgroundColor: "#ff8c00" },
                  }}
                  endIcon={<Phone />}
                >
                  Customer Care
                </Button>
                <Box>
                  <IconButton
                    href="#"
                    sx={{
                      backgroundColor: "#333931",
                      color: "#fff",
                      mx: 0.5,
                      "&:hover": { backgroundColor: "#ff8c00" },
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  {/* Repeat for other icons */}
                  <IconButton
                    href="#"
                    sx={{
                      backgroundColor: "#333931",
                      color: "#fff",
                      mx: 0.5,
                      "&:hover": { backgroundColor: "#ff8c00" },
                    }}
                  >
                    <Instagram />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box component="form">
              <Grid container spacing={2}>
                {/* Form Fields */}
                <Grid item xs={12}>
                  <TextField label="Name" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Phone" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Subject" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} fullWidth />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  backgroundColor: "#ff9e0e",
                  color: "white",
                  "&:hover": { backgroundColor: "#ff8c00" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Newsletter Area */}
      <Box
        sx={{
          py: 6,
          backgroundColor: "#333",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          px: 4,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box mb={{ xs: 3, md: 0 }}>
          <Typography variant="h4">Join Our Newsletter</Typography>
          <Typography>Subscribe to get our latest updates & news.</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <TextField
            placeholder="Enter your email"
            sx={{
              backgroundColor: "#fff",
              borderRadius: 1,
              width: { xs: "100%", sm: 250 },
              mb: { xs: 2, sm: 0 },
            }}
          />
          <Button
            variant="contained"
            sx={{
              ml: { sm: 2 },
              width: { xs: "100%", sm: "auto" },
              backgroundColor: "#ff9e0e",
              color: "white",
              "&:hover": { backgroundColor: "#ff8c00" },
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Box>
    </main>
  );
};

export default ContactPage;
