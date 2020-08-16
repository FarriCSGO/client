import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { usePulse } from "pulse-framework";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./core/controller/ui/theme/globalStyle";
import { ITheme } from "./core/controller/ui/ui.interface";

// Pages
import Home from "./pages/Home/HomePresenter";
import Design from "./pages/Design/DesignPresenter";
import User from "./pages/User/UserContainer";
import NotFound from "./pages/NotFound/NotFoundPresenter";

import core from "./core";

interface Global {
  [key: string]: any; // Add index signature
}

(globalThis as Global).core = core;

const App = () => {
  const [theme]: ITheme[] = usePulse([core.ui.state.THEME]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/user/:steamID" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
