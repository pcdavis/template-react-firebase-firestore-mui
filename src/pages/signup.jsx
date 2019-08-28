import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";
import userFormValidation from "../components/Auth/useFormValidation";
import validateLogin from "../components/Auth/validateLogin";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PersonAdd from "@material-ui/icons/PersonAdd";
import GetApp from "@material-ui/icons/GetApp";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    minWidth: 400,
    margin: "30px auto 30px auto"
  },

  formFields: {
    padding: "0 15px 0 15px"
  },
  heading: {
    fontSize: 16,
    margin: "20px auto 20px auto",
    textAlign: "center"
  },
  welcome_text: {
    color: "#454545",
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "40px"
  },
  button: {
    margin: "20px 0 15px 0"
  },
  error_text: {
    color: "red",
    fontSize: "12px"
  }
});

const INITIAL_STATE = {
  userName: "",
  email: "",
  password: ""
};

function IconLabelTabs(props) {
  const classes = useStyles();
  const [firebaseError, setFirebaseError] = React.useState(null);
  const [forgotPassword, setForgotPassword] = React.useState(false);
  const [emailForReset, setEmailForReset] = React.useState("");
  const [value, setValue] = React.useState(0);
  //userFormValidation is a react hook that provides the handleInputChange and handleSubmit functions needed to authenticate and values to implement controlled inputs
  const {
    handleInputChange,
    handleBlur,
    handleSubmit,
    values: { userName, email, password },
    errors,
    isSubmitting
  } = userFormValidation(INITIAL_STATE, validateLogin, authenticateUser, value);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  async function authenticateUser() {
    try {
      const response =
        value === 0
          ? await firebase.login(email, password)
          : await firebase.register(userName, email, password);
      console.log(response);
      props.history.push("/");
    } catch (err) {
      console.error("authenticateUder failed", err);
      setFirebaseError(err.message);
    }
  }

  function handlePasswordReset() {
    try {
      firebase.resetPassword(emailForReset);
    } catch (err) {
      console.error("authenticateUder failed", err);
    }
  }

  return (
    <Grid container className={classes.formContainer}>
      <Grid item sm>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab
              onClick={() => setFirebaseError(null)}
              icon={<GetApp />}
              label="SIGN IN"
            />
            <Tab
              onClick={() => setFirebaseError(null)}
              icon={<PersonAdd />}
              label="SIGN UP"
            />
          </Tabs>

          <div className={classes.heading}>
            {value === 0 ? (
              <div className={classes.welcome_text}>
                Welcome back! Sign in to your account
              </div>
            ) : (
              <div className={classes.welcome_text}>
                Welcome to Pitchfork Army! Create an account
              </div>
            )}
          </div>

          <div className={classes.formFields}>
            <form onSubmit={handleSubmit}>
              {value === 1 && (
                <div>
                  {" "}
                  <TextField
                    className={classes.textField}
                    id="userName"
                    name="userName"
                    value={userName}
                    label="Screen Name"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    fullWidth
                  />
                  {errors.userName && (
                    <p className={classes.error_text}>{errors.userName}</p>
                  )}
                </div>
              )}
              <TextField
                className={classes.textField}
                id="email"
                name="email"
                value={email}
                label="Email"
                onChange={handleInputChange}
                onBlur={handleBlur}
                fullWidth
              />
              {errors.email && (
                <p className={classes.error_text}>{errors.email}</p>
              )}
              <TextField
                className={classes.textField}
                id="password"
                name="password"
                value={password}
                label="Password"
                onChange={handleInputChange}
                onBlur={handleBlur}
                fullWidth
              />
              {errors.password && (
                <p className={classes.error_text}>{errors.password}</p>
              )}
              {firebaseError && (
                <p className={classes.error_text}>{firebaseError}</p>
              )}
              <Button
                className={classes.button}
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                {value === 0 ? `SIGN IN` : `CREATE ACCOUNT`}
              </Button>
              {value === 0 && (
                <Button onClick={() => setForgotPassword(!forgotPassword)}>
                  Forgot your password?
                </Button>
              )}
              {forgotPassword && (
                <div>
                  <TextField
                    className={classes.textField}
                    id="forgot_email"
                    name="forgot_email"
                    label="Email"
                    value={emailForReset}
                    onChange={event => setEmailForReset(event.target.value)}
                    fullWidth
                  />

                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handlePasswordReset}
                  >
                    Reset Password
                  </Button>
                </div>
              )}
            </form>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withRouter(IconLabelTabs);
