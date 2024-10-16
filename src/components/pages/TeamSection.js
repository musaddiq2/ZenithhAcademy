import React from "react";
import { Grid, Box, Typography, Card, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";
import "./TeamSection.css";
import { Article } from "@mui/icons-material";
const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
const teamMembers = [
  { name: "Nathan Allen", role: "Teacher", image: "team-3-1.jpg" },
  { name: "Esther Boyd", role: "Teacher", image: "team-3-2.jpg" },
  { name: "Jamie Keller", role: "Teacher", image: "team-3-3.jpg" },
  { name: "Jesus Pendley", role: "Teacher", image: "team-3-4.jpg" },
];

const TeamSection = () => {
  return (
    <Box className="team-section">
      <Box className="team-header" textAlign="center">
        <Box sx={{ margin: "50px", display: "flex", justifyContent: "center" }}>
          <Article />
          <Typography variant="subtitle1" className="section-subtitle">
            Teacher
          </Typography>
          <Article />
        </Box>
        <Typography variant="h3" className="section-title">
          Meet Our Expert Instructors
        </Typography>
      </Box>

      <Grid container spacing={4} className="team-container">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="team-card" sx={{ position: "relative" }}>
              <Box className="team-thumb">
                <img
                  src={`${baseUrl}/team.jpg`}
                  alt={member.name}
                  className="team-image"
                />
              </Box>
              <Box className="team-content">
                <Box className="social-icons">
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Box className="social-links">
                    <IconButton href="#">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton href="#">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton href="#">
                      <PinterestIcon />
                    </IconButton>
                    <IconButton href="#">
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="h6" className="team-name">
                  {member.name}
                </Typography>
                <Typography variant="subtitle2" className="team-role">
                  {member.role}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
