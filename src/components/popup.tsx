import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { fetchImage } from "utils/urlFormatter";
interface ButtonSet {
  label: string;
  color?: string;
  onClick: () => void;
}
interface Redirection {
  duration: number;
  to: () => void;
}
interface ModalProp {
  open: boolean;
  content: string;
  headerText: string;
  type: "success" | "fail" | "information";
  buttonSet: ButtonSet[];
  onClose: () => void;
  perform?: Redirection;
}

function MyPopup({
  buttonSet,
  open,
  onClose,
  content,
  headerText,
  perform,
  type,
}: ModalProp) {
  useEffect(() => {
    if (perform && open) {
      setTimeout(() => {
        perform.to();
      }, perform.duration);
    }
  }, [open]);
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
      <DialogTitle>{headerText}</DialogTitle>
      <DialogContent>
        <img
          src={fetchImage([
            "icons",
            type === "success" ? "success.svg" : "fail.svg",
          ])}
        ></img>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttonSet.map((item, i) => (
          <Button onClick={item.onClick} style={{ background: item.color }}>
            {item.label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

export default MyPopup;
