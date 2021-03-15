import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const useStyles = makeStyles({
    bar: {
      background:
        " linear-gradient(297deg, rgba(224,205,171,1) 48%, rgba(231,202,202,1) 52%)",

      color: "black",
    },
  });
  //"linear-gradient(243deg, rgba(255,252,171,1) 48%, rgba(231,202,202,1) 52%)",
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h1 id="title" variant="h6">
            Retro Relics
          </h1>
          <FontAwesomeIcon icon={["fas fa", "door-open"]} />
          <Button color="inherit">Your Closet</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
