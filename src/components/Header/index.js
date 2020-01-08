import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { headerStyles } from "./styles";

/**
 * Header component
 */
const Header = () => {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Users
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
