import React from "react";
import firebase, { FirebaseContext } from "./firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import signup from "./pages/signup";
import homePage from "./pages/homePage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeObject from "./utils/theme";
import useAuth from "./components/Auth/useAuth";

const theme = createMuiTheme(themeObject);

export default function App() {
  const user = useAuth(); //
  //Notes for below: Place firebase and user in an object inside a React Context Provider to be used throughout the app.
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Router>
          <FirebaseContext.Provider value={{ firebase, user }}>
            <div className="app-container">
              <Navbar />

              <div className="route-container">
                <Switch>
                  <Route exact path="/" component={homePage} />
                  <Route path="/signup" component={signup} />
                </Switch>
              </div>
            </div>
          </FirebaseContext.Provider>
        </Router>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
