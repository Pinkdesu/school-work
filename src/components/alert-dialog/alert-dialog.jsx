import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertDialog = ({
  isAlertDeployed,
  setAlertDeployed,
  setDialogDeployed,
  handleTextSave,
}) => {
  const toggleDialogClose = () => {
    setAlertDeployed(false);
  };

  const handleAgreeClick = () => {
    toggleDialogClose();
    handleTextSave();
  };

  const handleDisagreeClick = () => {
    toggleDialogClose();
    setDialogDeployed(false);
  };

  return (
    <Dialog
      open={isAlertDeployed}
      onClose={toggleDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Сохранить текст?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Вы пытайтесь завершить работу с текстом без дальнейшего сохранения!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialogClose} color="primary">
          Отмена
        </Button>
        <Button onClick={handleDisagreeClick} color="primary">
          Нет
        </Button>
        <Button onClick={handleAgreeClick} color="primary" autoFocus>
          Да
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
