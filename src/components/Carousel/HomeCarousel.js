// MUICarousel.js
import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./HomeCarousel.css";
const HomeCarousel = () => {
  const items = [
    {
      img: require("../../assets/images/Picture1.png"),
      alt: "Slide 1",
      isFirst: true,
    },
  ];

  return (
    <Box className="main-banner header-text" id="top">
      <Carousel>
        {items.map((item, index) => (
          <Box key={index}>
            <img
              style={{ width: "100%", top: 0 }}
              src={item.img}
              alt={item.alt}
              className="carousel-img"
            />
            {item.isFirst && (
              <div className="carousel-overlay">
                <img
                  src={require("../../assets/images/logo.png")}
                  alt="Logo"
                  className="logo"
                />
                <h1 className="bold overlay-text">Welcome to Zenithh Academy</h1>
                <h4 className="bold italic custom-font">
                  Rise Above the rest with Excellence.
                </h4>
                <button className="overlay-button">Learn More</button>
              </div>
            )}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default HomeCarousel;
