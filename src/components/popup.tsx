import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface ModalProp {
  open: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

function MyPopup({ onOpen, onClose, open }: ModalProp) {
  return (
    <Dialog
      PaperProps={{
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "300px",
        },
      }}
      open={open}
      onClose={() => onClose && onClose()}
    >
      <DialogTitle>Registration successful</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to try login with new username and password
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose && onClose()} color="primary">
          Home
        </Button>
        <Button onClick={() => onOpen && onOpen()} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyPopup;
