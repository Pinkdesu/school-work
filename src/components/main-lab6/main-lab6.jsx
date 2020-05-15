import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE, URL_LAB6 } from "../../constants";
import axios from "axios";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListElement from "../list-element/list-element";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MainDialog from "../main-dialog/main-dialog";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "50%",
    minWidth: 800,
    padding: "40px 20px",
    marginTop: 100,
    borderRadius: 5,
    backgroundColor: "#fff",
    boxShadow:
      "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  },
  footerButtonWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    heigth: 50,
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const getTexts = async () => await axios.get(`${URL_LAB6}/texts`);

const addText = async (text) =>
  await axios.post(`${URL_LAB6}/texts`, { ...text });

const MainLab6 = () => {
  const { state, dispatch } = useContext(ContextApp);
  const [isDialogDeployed, setDialogDeployed] = useState(false);
  const classes = useStyles();

  const handleAddButtonClick = () => {
    dispatch({
      type: SET_VALUE,
      payload: {
        text: {
          name: "",
          questions: [],
        },
      },
    });
    setDialogDeployed(!isDialogDeployed);
  };

  useEffect(() => {
    if (!isDialogDeployed)
      getTexts()
        .then((response) =>
          dispatch({
            type: SET_VALUE,
            payload: {
              texts: response.data,
            },
          })
        )
        .catch((error) => alert(error));
  }, [isDialogDeployed]);

  return (
    <>
      <div className={classes.mainWrapper}>
        <List
          component="div"
          aria-labelledby="text list"
          subheader={
            <ListSubheader disableSticky>Текст и вопросы</ListSubheader>
          }
        >
          {state.texts.map((text, index) => (
            <ListElement
              key={index}
              index={index}
              name={text.name}
              questions={text.questions}
            />
          ))}
        </List>

        <div className={classes.footerButtonWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleAddButtonClick}
          >
            Добавить текст
          </Button>
        </div>
      </div>
      {isDialogDeployed ? (
        <MainDialog
          isDialogDeployed={isDialogDeployed}
          setDialogDeployed={handleAddButtonClick}
          addText={addText}
        />
      ) : null}
    </>
  );
};

export default MainLab6;
