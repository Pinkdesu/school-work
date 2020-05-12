import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ContextApp } from "../../reducers/reducer.jsx";
import { SET_VALUE } from "../../constants";
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

const MainLab6 = () => {
  const { dispatch } = useContext(ContextApp);
  const [isDialogDeployed, setDialogDeployed] = useState(false);

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

  const classes = useStyles();
  return (
    <>
      <div className={classes.mainWrapper}>
        <List
          component="div"
          aria-labelledby="text list"
          subheader={
            <ListSubheader component="div">Текст и вопросы</ListSubheader>
          }
        >
          <ListElement divider />
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
      <MainDialog
        isDialogDeployed={isDialogDeployed}
        setDialogDeployed={handleAddButtonClick}
      />
    </>
  );
};

export default MainLab6;
