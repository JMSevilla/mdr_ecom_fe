import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SystemDialog = (props) => {
  const { open, handleClose, title, children, buttonCancelText, buttonAgreeText, handleDisagree, fullWidth, maxWidth } = props

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
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDisagree()}>{buttonCancelText}</Button>
          <Button onClick={handleClose} autoFocus>
            {buttonAgreeText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default SystemDialog