import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListElement from "../list-element/list-element";

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
}));

const MainLab6 = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <List
        component="div"
        aria-labelledby="text list"
        subheader={
          <ListSubheader component="div">Текст и вопросы</ListSubheader>
        }
        className={classes.root}
      >
        <ListElement />
      </List>
    </div>
  );
};

export default MainLab6;
