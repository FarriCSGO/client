import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Pages
import Home from "./pages/home/home";
import Design from "./pages/design/design";
import Dashboard from "./pages/dashboard/dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/dashboard/:steamID" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
