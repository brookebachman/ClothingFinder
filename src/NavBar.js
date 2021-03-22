import React from "react";
import { AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";

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
              <Link href="search">
                <h1 id="title" variant="h6">
                  Retro Relics
                </h1>
              </Link>
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={1}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Link href="/login">
                  <MenuIcon fontSize="large"></MenuIcon>
                </Link>
              </IconButton>
              <IconButton>
                <Link href="/shoppingcart">
                  <ShoppingCartIcon fontSize="large" />
                </Link>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
