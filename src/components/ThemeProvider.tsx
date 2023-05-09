import React, { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { PartialDeep } from "type-fest";
import useDarkMode from "use-dark-mode";

export type Palette = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  paper: string;
  background: string;
  text: string;
  disabled: string;
};

export type Theme = {
  light: Palette;
  dark: Palette;
};

export const defaultTheme: PartialDeep<Theme> = {
  light: {
    primary: "#9649E3",
    secondary: "#AE8BFA",
    success: "#52DC91",
    warning: "#F7CC5D",
    error: "#F15757",
    info: "#9987AB",
    paper: "#F1EBF7",
    background: "#FFFFFF",
    text: "#121212",
    disabled: "#CCCCCC",
  },
  dark: {
    primary: "#661CB0",
    secondary: "#854FF7",
    success: "#28C773",
    warning: "#F5BD2E",
    error: "#EC2727",
    info: "#806996",
    paper: "#40235D",
    background: "#121212",
    text: "#FFFFFF",
    disabled: "#333333",
  },
};

export const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = (props: {
  children: React.ReactNode;
  theme?: PartialDeep<Theme>;
}) => {
  const { children, theme: providedTheme } = props;
  const darkMode = useDarkMode(false);
  const theme = providedTheme ?? defaultTheme;
  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={darkMode.value ? theme.dark : theme.light}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const getThemeValue = (key: keyof Palette) => {
  const theme = React.useContext(ThemeContext) ?? defaultTheme;
  const darkMode = useDarkMode(false);
  return darkMode.value ? theme.dark![key] : theme.light![key];
};
