import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";

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
  transition: background-color 0.2s ease-in-out;
`;