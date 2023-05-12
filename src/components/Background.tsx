import React from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";

export const Background = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return <StyledBackground>{children}</StyledBackground>;
};

const StyledBackground = styled.div`
  background-color: #3399CC;
  /* background-color: ${(props) =>
    props.theme.background ?? getThemeValue("background")};
  color: ${(props) => props.theme.text ?? getThemeValue("text")}; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
