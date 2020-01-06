import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../frontend/util/route_util";
import Splash from './splash_page/splash';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from "./session_form/signup_from_container";




const App = () => (
  <div>
    <header>
      <div className="app-title"></div>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;