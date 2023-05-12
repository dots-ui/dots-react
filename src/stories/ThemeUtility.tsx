import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";
import { PartialDeep } from "type-fest";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { defaultTheme, Theme } from "../components/ThemeProvider";

export const StorybookThemeProvider = (props: {
  children: React.ReactNode;
  theme?: PartialDeep<Theme>;
}) => {
  const { children, theme: providedTheme } = props;
  const darkMode = useDarkMode(false);
  const theme = providedTheme ?? defaultTheme;
  return (
    <StyledThemeProvider theme={darkMode.value ? theme.dark : theme.light}>
      {children}
    </StyledThemeProvider>
  );
};

export const ToggleThemeButton = () => {
  const { value, toggle } = useDarkMode(false);
  const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.3em;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.paper};
    }
    color: ${(props) => props.theme.text};
  `;
  return (
    <Button onClick={toggle}>
      switch to {value ? "light" : "dark"} mode
    </Button>
  );
};

export const ThemeDefaultBackground = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  padding: 2em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  transition: background-color 0.2s ease-in-out;
`;