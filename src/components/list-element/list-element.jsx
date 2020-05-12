import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListElement = () => {
  const [isDeployed, setDeployed] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setDeployed(!isDeployed);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Text1" />
        {isDeployed ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isDeployed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default ListElement;
