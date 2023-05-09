import React from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";

export type ButtonProps = React.HTMLAttributes<
  HTMLButtonElement | HTMLAnchorElement
> & {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  disabled?: boolean;
  href?: string;
  shape?: "square" | "rounded" | "pill";
  size?: "small" | "medium" | "large";
};

export const Button = (props: ButtonProps) => {
  const { variant, accent } = props;
  const ButtonElement = styled(props.href ? "a" : "button")<ButtonProps>`
    font-size: ${(props) => {
      if (props.size === "small") return "0.75em";
      if (props.size === "large") return "1.25em";
      return "1em";
    }};
    font-weight: 400;
    padding: ${(props) => {
      if (props.size === "small") return "0.5em 1em";
      if (props.size === "large") return "1em 2em";
      return "0.75em 1.5em";
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: ${(props) => {
      if (props.shape === "rounded") {
        if (props.size === "small") return "2.5em";
        if (props.size === "large") return "6em";
        return "4em";
      }
      return "auto";
    }};
    height: ${(props) => {
      if (props.shape === "rounded") {
        if (props.size === "small") return "2.5em";
        if (props.size === "large") return "6em";
        return "4em";
      }
      return "auto";
    }};
    border-radius: ${(props) => {
      if (props.shape === "square" || !props.shape) return "0.375em";
      if (props.size === "small") return "1.25em";
      if (props.size === "large") return "3em";
      return "2em";
    }};
    border: ${(props) => {
      if (variant !== "outlined") return "none";
      return `1px solid ${
        props.theme[accent || "info"] ?? getThemeValue(accent || "info")
      }`;
    }};
    background-color: ${(props) => {
      if (variant === "contained")
        return props.theme[accent || "info"] ?? getThemeValue(accent || "info");
      return "transparent";
    }};
    color: ${(props) => {
      if (variant === "contained") return "#fff";
      return props.theme[accent || "info"] ?? getThemeValue(accent || "info");
    }};

    &:disabled {
      border: ${(props) => {
        if (variant !== "outlined") return "none";
        return `1px solid ${props.theme.disabled ?? getThemeValue("disabled")}`;
      }};
      background-color: ${(props) => {
        if (variant === "contained")
          return props.theme.disabled ?? getThemeValue("disabled");
        return "transparent";
      }};
      color: ${(props) => {
        if (variant === "contained") return "#fff";
        return props.theme.disabled ?? getThemeValue("disabled");
      }};
    }

    &:hover:not(:disabled) {
      filter: drop-shadow(
          0em 0.125em 0.625em
            ${(props) =>
              props.theme[accent || "info"] ??
              getThemeValue(accent || "info")}80
        )
        brightness(110%);
    }
    &:active:not(:disabled) {
      filter: drop-shadow(
          0em 0.0625em 0.3125em
            ${(props) =>
              props.theme[accent || "info"] ??
              getThemeValue(accent || "info")}80
        )
        brightness(80%);
    }
  `;
  return <ButtonElement {...props} />;
};
