import React from "react";
import "./css/main.css";
import styled from "styled-components";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  disabled?: boolean;
  href?: string;
};

export const Button = (props: ButtonProps) => {
  const { variant, accent } = props;
  const ButtonElement = styled[props.href ? "a" : "button"]`
    font-family: "Poppins", sans-serif;
    background: transparent;
    border: none;
  `
  // @ts-ignore
  return <ButtonElement {...props} />;
};
