import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Pages
import Home from "./pages/Home/HomePresenter";
import Design from "./pages/Design/DesignPresenter";
import Dashboard from "./pages/Dashboard/DashboardPresenter";
import NotFound from "./pages/NotFound/NotFoundPresenter";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/dashboard/:steamID" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
