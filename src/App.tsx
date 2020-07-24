import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./theme/globalStyle";
import { Light, Dark } from "./theme/theme";
import { ThemeContext } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home/HomePresenter";
import Design from "./pages/Design/DesignPresenter";
import Dashboard from "./pages/Dashboard/DashboardPresenter";
import NotFound from "./pages/NotFound/NotFoundPresenter";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const toggle = () => {
    if (theme === "dark") return Dark;
    else return Light;
  };

  return (
    <ThemeProvider theme={toggle}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/dashboard/:steamID" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
