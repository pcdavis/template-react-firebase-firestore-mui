import React from "react";
import { Link, withRouter } from "react-router-dom";

//MUI elements
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import { FirebaseContext } from "../firebase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "##b7edfe"
  },
  signedIn: {
    display: "flex",
    padding: "0 10px 0 10px",
    alignItems: "baseline"
  },
  divider: {
    display: "inline-block",
    margin: "0 0 0 10px"
  }
}));

function StyledToolBar() {
  const { firebase, user } = React.useContext(FirebaseContext);

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          MyTourGuide
        </Typography>
        {user && (
          <IconButton
            component={Link}
            to="/create"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AddIcon />
          </IconButton>
        )}
        {user ? (
          <div className={classes.signedIn}>
            <div>{user.displayName}</div>
            <div className={classes.divider}>|</div>
            <Button onClick={() => firebase.logout()} color="inherit">
              Sign Out
            </Button>
          </div>
        ) : (
          <Button color="inherit" component={Link} to="/signup">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(StyledToolBar);
