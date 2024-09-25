import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  preloader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  logo: {
    width: '100px',
    height: '100px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: '6px solid rgba(255, 255, 255, 0.8)', // Increased border thickness and made it semi-transparent
    borderRadius: '50%',
    animation: '$rotate 3s linear infinite',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)', // Added a glow effect
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg) scale(1)', // Start at scale 1
    },
    '50%': {
      transform: 'rotate(180deg) scale(1.1)', // Scale up at halfway point
    },
    '100%': {
      transform: 'rotate(360deg) scale(1)', // Return to original scale
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

function Preloader() {
  const classes = useStyles();

  return (
    <div className={classes.preloader}>
      <div className={classes.logo}>
        <div className={classes.border}></div>
        <img className={classes.image} src={require("../assets/images/logo.png")} alt="Logo" />
      </div>
    </div>
  );
}

export default Preloader;
