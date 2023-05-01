import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  MenuList,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#000",
    color: "#fff",
  },
  leftIcon: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
  },
  menuItem: {
    fontSize: "1.2rem",
    "&:hover": {
      backgroundColor: "#ccc",
    },
  },
  paper: {
    position: "absolute",
    top: "48px",
    right: "0",
    left: "auto",
    zIndex: "999",
    padding: "0",
    margin: "0",
  },
  menuList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" style={{ marginRight: "auto" }}>
          Logo
        </Typography>
        <IconButton
          edge="start"
          className={classes.leftIcon}
          color="inherit"
          aria-label="menu"
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          <MenuIcon />
        </IconButton>

        {menuOpen && (
          <Paper
            className={classes.paper}
            onMouseEnter={handleMenuOpen}
            onMouseLeave={handleMenuClose}
          >
            <MenuList className={classes.menuList}>
              <MenuItem className={classes.menuItem}>My Accout</MenuItem>
              <MenuItem className={classes.menuItem}>SignOut</MenuItem>
              {/* <MenuItem className={classes.menuItem}>Contact</MenuItem> */}
            </MenuList>
          </Paper>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
