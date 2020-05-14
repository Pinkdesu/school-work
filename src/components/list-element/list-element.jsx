import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  nested: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start",
    paddingLeft: theme.spacing(4),
  },
}));

const ListElement = ({ index, name, questions }) => {
  const [isDeployed, setDeployed] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setDeployed(!isDeployed);
  };

  return (
    <>
      <ListItem button onClick={handleClick} divider>
        <ListItemText primary={`${index + 1}. ${name}`} />
        {isDeployed ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isDeployed} timeout="auto" unmountOnExit>
        <List
          disablePadding
          subheader={
            <ListSubheader component="div">Вопросы к тексту</ListSubheader>
          }
        >
          {questions.length !== 0
            ? questions.map(({ questionId, questionValue, answers }, index) => (
                <ListItem
                  className={classes.nested}
                  key={`question${questionId}`}
                >
                  <ListItemText primary={`${index + 1}. ${questionValue}`} />
                  <List
                    disablePadding
                    subheader={
                      <ListSubheader component="div">
                        Варианты ответов:
                      </ListSubheader>
                    }
                  >
                    {answers.length !== 0
                      ? answers.map(
                          ({ answerId, answerValue, isCorrect }, index) => (
                            <ListItem
                              key={`answer${answerId}`}
                              className={classes.nested}
                            >
                              <ListItemText
                                primary={`${index + 1}. ${answerValue} (${
                                  isCorrect ? "верный" : "неверный"
                                })`}
                              />
                            </ListItem>
                          )
                        )
                      : null}
                  </List>
                </ListItem>
              ))
            : null}
        </List>
      </Collapse>
    </>
  );
};

export default ListElement;
