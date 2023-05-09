import React from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";

export type TextProps = React.HTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement
> & {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

export const Text = (props: TextProps) => {
  const { variant } = props;
  // @ts-ignore
  return <TextElement as={variant} {...props} />;
};

const variantMapping = {
  h1: {
    fontSize: "2em",
    fontWeight: 700,
  },
  h2: {
    fontSize: "1.5em",
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.17em",
    fontWeight: 600,
  },
  h4: {
    fontSize: "1em",
    fontWeight: 500,
  },
  h5: {
    fontSize: "0.83em",
    fontWeight: 500,
  },
  h6: {
    fontSize: "0.67em",
    fontWeight: 500,
  },
  p: {
    fontSize: "1em",
    fontWeight: 400,
  },
};

const TextElement = styled.p<TextProps>`
  font-family: "Poppins", sans-serif;
  font-weight: ${(props) => variantMapping[props.variant ?? "p"].fontWeight};
  font-size: ${(props) => variantMapping[props.variant ?? "p"].fontSize};
  color: ${(props) => props.theme.text ?? getThemeValue("text")};
`;
