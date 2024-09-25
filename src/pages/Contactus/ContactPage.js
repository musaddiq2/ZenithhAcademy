import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
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
import breadcrumbImage from "../../assets/images/breadcrumb.png";
const ContactPage = () => {
  return (
    <main>
      {/* Breadcrumb Area */}
      <Box
        sx={{
          background: `url(${breadcrumbImage}) no-repeat center/cover`,
          py: 6,
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography component="span">
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </a>
          </Typography>
          <Typography component="span" sx={{ mx: 1, color: "#000" }}>
            //
          </Typography>
          <Typography component="span" sx={{color:"#fff"}}>Contact</Typography>
        </Box>
      </Box>

      {/* Contact Area */}
      <Box sx={{ py: 10 }}>
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
                  <li style={{ display: "flex", marginBottom: "20px" }}>
                    <LocationOn
                      sx={{
                        fontSize: 30,
                        color: "#1c5739",
                        marginRight: "10px",
                      }}
                    />
                    <Box>
                      <Typography>Our Address</Typography>
                      <Typography>
                        Y.N Tower Opposite Pacific Hospital Maulana Azad College
                        Road, Himayat Bagh, Aurangabad, (Chh. Sambhaji nagar)
                        Maharashtra.
                      </Typography>
                    </Box>
                  </li>
                  <li style={{ display: "flex", marginBottom: "20px" }}>
                    <AccessTime
                      sx={{
                        fontSize: 30,
                        color: "#1c5739",
                        marginRight: "10px",
                      }}
                    />
                    <Box>
                      <Typography>Hours of Operation</Typography>
                      <Typography>Mon - Fri: 9.00am to 5.00pm</Typography>
                      <Typography>[2nd Sat Holiday]</Typography>
                    </Box>
                  </li>
                  <li style={{ display: "flex", marginBottom: "20px" }}>
                    <Phone
                      sx={{
                        fontSize: 30,
                        color: "#1c5739",
                        marginRight: "10px",
                      }}
                    />
                    <Box>
                      <Typography>Contact</Typography>
                      <Typography>+91 8308489629</Typography>
                      <Typography>+91 9226967646</Typography>
                      <Typography>supportinfo@zenithhacademy.com</Typography>
                    </Box>
                  </li>
                </ul>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  href="#it-newsletter"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff9e0e",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#ff8c00",
                    },
                  }}
                  endIcon={<Phone />}
                >
                  Customer Care
                </Button>
                <Box>
                  <IconButton href="#" sx={{background:"#333931",color:"#fff"}}>
                    <Facebook />
                  </IconButton>
                  <IconButton href="#" sx={{background:"#333931",color:"#fff"}}>
                    <Instagram />
                  </IconButton>
                  <IconButton href="#" sx={{background:"#333931",color:"#fff"}}>
                    <Pinterest />
                  </IconButton>
                  <IconButton href="#" sx={{background:"#333931",color:"#fff"}}>
                    <Twitter />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box component="form">
              <Grid container spacing={2}>
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
                  backgroundColor: "#ff9e0e", // Custom background color
                  color: "white", // Text color
                  "&:hover": {
                    backgroundColor: "#ff8c00", // Change color on hover
                  },
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
          justifyContent: "space-between",
          px: 4,
        }}
      >
        <Box>
          <Typography variant="h4">Join Our Newsletter</Typography>
          <Typography>Subscribe to get our latest updates & news.</Typography>
        </Box>
        <Box>
          <TextField
            placeholder="Enter your email"
            variant="filled"
            sx={{ backgroundColor: "#fff", borderRadius: 1, mr: 2 }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9e0e",
              color: "white",
              "&:hover": {
                backgroundColor: "#ff8c00",
              },
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
