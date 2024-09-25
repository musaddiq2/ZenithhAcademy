import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RiArrowDownSFill } from "react-icons/ri"; 
import "./MainNavbar.css";
const MainNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [aboutMenu, setAboutMenu] = React.useState(null);
  const [coursesMenu, setCoursesMenu] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAboutMenuOpen = (event) => {
    setAboutMenu(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    setAboutMenu(null);
  };

  const handleCoursesMenuOpen = (event) => {
    setCoursesMenu(event.currentTarget);
  };

  const handleCoursesMenuClose = () => {
    setCoursesMenu(null);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is mobile

  return (
    <div className="header-container">
    <AppBar
      position="static"
      sx={{
        borderRadius: "10px",
        bgcolor: "#000",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "10px",
        overflow: "hidden",
        maxWidth: "1380px", 
        boxShadow:"0 4px 8px rgba(255, 158, 14, 0.9)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={require("../assets/images/logo.png")}
            alt="Logo"
            style={{ width: "50px", visibility: "none" }}
            className="hidden-mobile"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zenithh Academy
          </Typography>
        </div>
        <div style={{ display: "flex",flexGrow:1, alignItems: "center",justifyContent:"center", gap: "30px" }}>
          {isMobile ? ( // Show only MenuIcon on mobile
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ display: { xs: "block", md: "none", color:'#fff' } }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Show full menu items
            <>
              <Button color="inherit">Home</Button>
              <Button color="inherit" onClick={handleAboutMenuOpen}>
                About Us <RiArrowDownSFill style={{ marginLeft: '5px' }} />
              </Button>
              <Menu
                anchorEl={aboutMenu}
                open={Boolean(aboutMenu)}
                onClose={handleAboutMenuClose}
              >
                <MenuItem onClick={handleAboutMenuClose}>
                  Director Message
                </MenuItem>
                <MenuItem onClick={handleAboutMenuClose}>
                  Vision, Mission & Philosophy
                </MenuItem>
                <MenuItem onClick={handleAboutMenuClose}>
                  Infrastructure
                </MenuItem>
                <MenuItem onClick={handleAboutMenuClose}>FAQ</MenuItem>
                <MenuItem onClick={handleAboutMenuClose}>Hostel</MenuItem>
              </Menu>
              <Button color="inherit" onClick={handleCoursesMenuOpen}>
                Courses <RiArrowDownSFill style={{ marginLeft: '5px' }} />
              </Button>
              <Menu
                anchorEl={coursesMenu}
                open={Boolean(coursesMenu)}
                onClose={handleCoursesMenuClose}
              >
                <MenuItem onClick={handleCoursesMenuClose}>
                  JEE Adv.(IIT)
                </MenuItem>
                <MenuItem onClick={handleCoursesMenuClose}>JEE Main</MenuItem>
                <MenuItem onClick={handleCoursesMenuClose}>NEET</MenuItem>
                <MenuItem onClick={handleCoursesMenuClose}>Foundation</MenuItem>
              </Menu>
              <Button color="inherit" sx={{ bgcolor: "#fc940b", color: "white" }}>
                Contact Us
              </Button>
            </>
          )}
          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: "block", md: "none" , color:"#fff" } }}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleAboutMenuOpen}>About Us</MenuItem>
            <MenuItem onClick={handleCoursesMenuOpen}>Courses</MenuItem>
            <MenuItem onClick={handleMenuClose}>Achievement</MenuItem>
            <MenuItem onClick={handleMenuClose}>G-SAT</MenuItem>
            <MenuItem onClick={handleMenuClose}>TITANS</MenuItem>
            <MenuItem onClick={handleMenuClose}>Media</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default MainNavbar;
