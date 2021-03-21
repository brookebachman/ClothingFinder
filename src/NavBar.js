import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
      <AppBar position="static" className={classes.bar} justify="space-between">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <h1 id="title" variant="h6">
                Retro Relics
              </h1>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={1}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <ShoppingCartIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
