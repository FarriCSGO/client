import React, { createContext, useState, useEffect, memo } from "react";

interface IState {
  theme: string;
  toggleTheme: () => void;
}

const defaultState: IState = {
  theme: "dark",
  toggleTheme: () => {}
};

export const ThemeContext = createContext(defaultState);

export const ThemeProvider = memo((props: any) => {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  useEffect(() => {
    // Get user's last theme preference and set it to default theme style
    const themePref = localStorage.getItem("theme") || defaultState.theme;
    setTheme(themePref);
  }, []);

  useEffect(() => {
    // Store the user's theme preference in `localStorage` when it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
});
