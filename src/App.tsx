import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Import pages
import Home from "./pages/home/home";
import Design from "./pages/design/design";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
