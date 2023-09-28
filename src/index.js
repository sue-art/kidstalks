import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import SignupPage from "views/examples/SignupPage";
import ContactPage from "views/examples/ContactPage";
import LoginPage from "views/examples/LoginPage";
import NoPage from "views/examples/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/signup-page"
        render={(props) => <SignupPage {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/contact-page"
        render={(props) => <ContactPage {...props} />}
      />
      <Route path="*" render={(props) => <NoPage {...props} />} />
    </Switch>
  </BrowserRouter>
);
