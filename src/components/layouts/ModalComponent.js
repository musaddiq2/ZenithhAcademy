import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogActions, Slide, Button } from "@mui/material";

const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const ModalComponent = () => {
  const [open, setOpen] = useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Slide
        direction="down"
        timeout={{ enter: 1000, exit: 1000 }}
        easing={{ enter: "ease-in-out", exit: "ease-in-out" }}
        ref={ref}
        {...props}
      />
    );
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when modal opens
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal closes
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scroll is reset on unmount
    };
  }, [open]);

  useEffect(() => {
    // Open the modal with a delay
    setTimeout(() => {
      setOpen(true);
    }, 500);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted={false}
          onClose={handleClose}
        >
          <DialogContent>
            <center>
              <img src={`${baseUrl}/Picture3.jpg`} alt="Popup" width="90%" />
              <br /><br />
              <Button
                variant="contained"
                href="https://forms.gle/bZLAmtaJP4PaFq2i8"
                target="_blank"
                sx={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#3e8e41",
                  },
                }}
              >
                Click to Register for FREE Z-SAT Scholarship Test
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
      )}
    </>
  );
};

export default ModalComponent;
