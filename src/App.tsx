import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home/home";
import Design from "./pages/design/design";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
