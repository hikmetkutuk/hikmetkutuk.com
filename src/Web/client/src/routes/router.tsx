import React from "react";
import { Switch, Route } from "react-router-dom";

import Profile from "../components/profile/Index";
import PostList from "../components/posts/List";
import ProfileEdit from "../components/profile/Edit";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/profile" component={Profile} />
      <Route path="/profile-edit" component={ProfileEdit} />
      <Route path="/blog" component={PostList} />
    </Switch>
  );
};

export default Router;
