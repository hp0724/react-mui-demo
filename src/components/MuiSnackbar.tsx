import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={300} ref={ref} {...props} />;
  }
);

export const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit </Button>
      {/* <Snackbar
        message="Form submitted successfully !"
        autoHideDuration={1000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <SnackAlert onClose={handleClose} severity="success">
          Form submitted successfully!
        </SnackAlert>
      </Snackbar>
    </>
  );
};
