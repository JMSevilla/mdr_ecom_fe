import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AppButton from "../Buttons/Button";

const SystemDialog = (props) => {
  const {
    open,
    handleClose,
    title,
    children,
    buttonCancelText,
    buttonAgreeText,
    handleDisagree,
    fullWidth,
    maxWidth,
    handleAgree,
    testid,
  } = props;

  return (
    <div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AppButton
            handleClick={handleDisagree}
            buttonName={buttonCancelText}
          />
          <AppButton
            testid={testid}
            handleClick={handleAgree}
            buttonName={buttonAgreeText}
            autoFocus={true}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SystemDialog;
