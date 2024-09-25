import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Slide,
  Button,
  Typography,
} from "@mui/material";

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Slide
        direction="down"
        timeout={{ enter: 1000, exit: 1000 }} // Slower enter and exit
        easing={{ enter: "ease-in-out", exit: "ease-in-out" }}
        ref={ref}
        {...props}
      />
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setOpen(true); // Delay modal opening
    }, 500); // Delay for 500ms
  }, []);

  const handleClose = () => {
    setOpen(false); // Close the modal
    document.body.style.overflow = 'auto';
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogContent>
        <center>
          <img
            src={require("../assets/images/Picture3.jpg")}
            alt="Popup"
            width="90%"
          />
          <br />
          <br />
          <Button
            variant="contained"
            href="https://forms.gle/DUqS9sinVoFZBt8H9"
            target="_blank"
            sx={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#3e8e41",
              },
            }}
          >
            Click to Register for FREE G-SAT Scholarship Test
          </Button>
        </center>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="error"
          sx={{
            backgroundColor: "#ff8c00",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#ff9900",
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalComponent;
