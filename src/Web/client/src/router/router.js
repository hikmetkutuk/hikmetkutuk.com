import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "../components/root/Profile";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Profile} />      
    </Switch>
  );
};

export default Router;