import React from "react";
import { Switch, Route } from "react-router-dom";
import Countries from "../pages/Countries";

import Home from "../pages/Home";
import TotalMedals from "../pages/TotalMedals";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/totalMedals" component={TotalMedals} />
      <Route path="/countries" component={Countries} />
    </Switch>
  );
};

export default Routes;
