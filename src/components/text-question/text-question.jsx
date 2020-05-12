import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    marginBottom: theme.spacing(2),
  },
  buttonWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  nestedList: {
    width: "100%",
  },
  nestedIcon: {
    minWidth: 42,
  },
}));

const TextQuestion = ({ id }) => {
  const [questionText, setQuestionText] = useState("");
  const [isDone, setDone] = useState(false);
  const [answers, setAnswer] = useState([
    {
      text: "",
      isCorrect: false,
    },
    {
      text: "",
      isCorrect: false,
    },
  ]);

  const classes = useStyles();

  const handleDoneClick = () => {
    setDone(true);
  };

  const handleAnswerCheckClick = (index) => () => {
    setAnswer((prev) => {
      const newState = [...prev];
      newState[index].isCorrect = !newState[index].isCorrect;
      return newState;
    });
  };

  const handleAnswerDeleteClick = (index) => () => {
    setAnswer((prev) => {
      const newState = [...prev];
      if (prev.length !== 1) newState.splice(index, 1);
      return newState;
    });
  };

  const handleQuestionTextChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleAnswerTextChange = (e, index) => {
    const value = e.target.value;
    setAnswer((prev) => {
      const newState = [...prev];
      const length = newState.length;

      if (index === length - 1) {
        newState.push({ text: "", isCorrect: false });
      }

      if (index === length - 2 && length > 2 && value === "") {
        newState.pop();
      }

      newState[index].text = value;
      return newState;
    });
  };

  return (
    <ListItem className={classes.listItem}>
      <TextField
        label={`Вопрос ${id + 1}`}
        type="text"
        fullWidth
        value={questionText}
        onChange={handleQuestionTextChange}
        className={classes.input}
      />
      <List
        className={classes.nestedList}
        subheader={
          <ListSubheader component="div">Варианты ответа:</ListSubheader>
        }
      >
        {answers.map((value, index) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={index}>
              <ListItemIcon className={classes.nestedIcon}>
                <Checkbox
                  edge="start"
                  checked={value.isCorrect}
                  tabIndex={-1}
                  disableRipple
                  onClick={handleAnswerCheckClick(index)}
                />
              </ListItemIcon>

              <TextField
                label={`Ответ ${index + 1}`}
                type="text"
                value={value.text}
                onChange={(e) => handleAnswerTextChange(e, index)}
                fullWidth
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleAnswerDeleteClick(index)}
                >
                  <HighlightOffIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            startIcon={isDone ? <DoneAllIcon /> : <DoneIcon />}
            color="default"
            onClick={handleDoneClick}
          >
            {isDone ? "Сохранено" : "Готово"}
          </Button>
        </div>
      </List>
    </ListItem>
  );
};

export default TextQuestion;
