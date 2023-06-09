import React from "react";
import { PartialDeep } from "type-fest";

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

export const ThemeProvider = (props: {
  children: React.ReactNode;
  theme?: PartialDeep<Theme>;
  dark?: boolean;
}) => {
  const { children, theme: providedTheme, dark } = props;
  const theme = providedTheme ?? defaultTheme;
  return { children };
};

export const getThemeValue = (key: keyof Palette) => {
  return defaultTheme.light![key];
};
