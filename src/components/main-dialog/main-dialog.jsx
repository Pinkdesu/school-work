import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContextApp } from "../../reducers/reducer.jsx";
import { CHANGE_TEXT_NAME } from "../../constants";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import TextQuestion from "../text-question/text-question";
import AlertDialog from "../alert-dialog/alert-dialog";

const useStyles = makeStyles((theme) => ({
  questionsList: {
    marginTop: theme.spacing(4),
  },
  buttonWrapper: {
    margin: theme.spacing(4, 0, 4, 0),
  },
}));

const MainDialog = ({ isDialogDeployed, setDialogDeployed }) => {
  const { dispatch, state } = useContext(ContextApp);
  const [questions, setQuestion] = useState([]);
  const [isAlertDeployed, setAlertDeployed] = useState(false);
  const isNameEmpty = state.text.name.replace(/\s/g, "").length === 0;
  const classes = useStyles();
  console.log(state.text);
  const handleTextSave = () => {
    setDialogDeployed(false);
  };

  const toggleDialogClose = () => {
    if (isNameEmpty) {
      setDialogDeployed(true);
    } else {
      setAlertDeployed(true);
    }
  };

  const handleTextNameChange = (e) => {
    const value = e.target.value;
    dispatch({
      type: CHANGE_TEXT_NAME,
      payload: {
        name: value,
      },
    });
  };

  const handleAddingQuestionClick = () => {
    setQuestion((prev) => {
      const number = prev.length;
      return [
        ...prev,
        {
          id: number,
        },
      ];
    });
  };

  return (
    <div>
      <Dialog
        open={isDialogDeployed}
        onClose={toggleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Добавить новый текст</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите название текста, чтобы добавить к нему вопросы с ответами.
          </DialogContentText>
          <TextField
            autoFocus
            label="Название текста"
            type="text"
            fullWidth
            value={state.text.name}
            onChange={handleTextNameChange}
          />

          {questions.length === 0 ? null : (
            <List
              component="div"
              aria-labelledby="questions list"
              className={classes.questionsList}
            >
              {questions.map((question, index) => (
                <TextQuestion key={index} id={question.id} />
              ))}
            </List>
          )}

          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleAddingQuestionClick}
              disabled={isNameEmpty}
            >
              Добавить вопрос
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialogClose} color="primary">
            Выйти
          </Button>
          <Button
            onClick={handleTextSave}
            color="primary"
            disabled={isNameEmpty}
          >
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>

      <AlertDialog
        isAlertDeployed={isAlertDeployed}
        setAlertDeployed={setAlertDeployed}
        setDialogDeployed={setDialogDeployed}
        handleTextSave={handleTextSave}
      />
    </div>
  );
};

export default MainDialog;
