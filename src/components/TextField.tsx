import React from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";

export type TextFieldProps = React.HTMLAttributes<HTMLInputElement> & {
  children: React.ReactNode;
  type?: "text" | "password" | "email" | "number";
  disabled?: boolean;
  placeholder?: string;
  regex?: RegExp;
  value?: string;
  setValue?: (value: string) => void;
  error?: string;
  success?: string;
  info?: string;
  divProps?: React.HTMLAttributes<HTMLDivElement>;
  variant?: "underlined" | "outlined" | "none";
};

export const TextField = (props: TextFieldProps) => {
  const { regex, error, success, info } = props;
  const [regexPassed, setRegexPassed] = React.useState(true);
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    ref.current?.addEventListener("input", (event: any) => {
      const e = event as React.ChangeEvent<HTMLInputElement>;
      if (regex && e.target.value) {
        setRegexPassed(regex.test(e.target.value ?? ""));
      } else {
        setRegexPassed(true);
      }
    });
  }, [regex, ref]);

  React.useEffect(() => {
    if (regex && props.value) {
      setRegexPassed(regex.test(props.value ?? ""));
    } else {
      setRegexPassed(true);
    }
  }, [regex, props.value]);

  return (
    <TextFieldContainer {...props.divProps}>
      <TextFieldElement
        {...props}
        error={error ?? !regexPassed ? "" : undefined}
        ref={ref}
      />
      <HelperText
        shown={
          (!!error && typeof error === "string" && error.length > 0) ||
          (!!success && typeof success === "string" && success.length > 0) ||
          (!!info && typeof info === "string" && info.length > 0)
        }
        error={!!error}
        success={!!success}
        info={!!info}
      >
        {error ?? success ?? info ?? ""}
      </HelperText>
    </TextFieldContainer>
  );
};

const TextFieldElement = styled.input<TextFieldProps>`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: ${(props) => props.theme.text ?? getThemeValue("text")};
  border: 2px solid ${(props) => props.theme.text ?? getThemeValue("text")};
  background-color: ${(props) =>
    props.theme.background ?? getThemeValue("background")};
  border-radius: 0.375em;
  padding: 0.5em 1em;
  outline: none;
  transition: all 0.2s ease-in-out;

  :disabled {
    border-color: ${(props) =>
      props.theme.disabled ?? getThemeValue("disabled")};
    color: ${(props) => props.theme.disabled ?? getThemeValue("disabled")};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    border-color: ${(props) =>
      props.theme.secondary ?? getThemeValue("secondary")};
  }

  &:active:not(:disabled),
  &:focus:not(:disabled) {
    border-color: ${(props) => props.theme.primary ?? getThemeValue("primary")};
  }

  &:not(:focus):not(:disabled) {
    ${(props) =>
      props.info &&
      `
      border-color: ${props.theme.info ?? getThemeValue("info")};
      color: ${props.theme.info ?? getThemeValue("info")};
      ::placeholder {
        color: ${props.theme.info ?? getThemeValue("info")};
      }
    `}
    ${(props) =>
      props.success &&
      `
      border-color: ${props.theme.success ?? getThemeValue("success")};
      color: ${props.theme.success ?? getThemeValue("success")};
      ::placeholder {
        color: ${props.theme.success ?? getThemeValue("success")};
      }
    `}
    ${(props) =>
      props.error &&
      `
      border-color: ${props.theme.error ?? getThemeValue("error")};
      color: ${props.theme.error ?? getThemeValue("error")};
      ::placeholder {
        color: ${props.theme.error ?? getThemeValue("error")};
      }
    `}
  }

  ${(props) =>
    props.variant === "underlined" &&
    `
    border: none;
    border-bottom: 2px solid ${props.theme.text ?? getThemeValue("text")};
    border-radius: 0;
    padding: 0.25em;
  `}

  ${(props) =>
    props.variant === "none" &&
    `
    border: none;
    padding: 0.25em;
  `}
`;

const HelperText = styled.p<{
  shown: boolean;
  error?: boolean;
  success?: boolean;
  info?: boolean;
}>`
  opacity: ${(props) => (props.shown ? 1 : 0)};
  font-family: "Poppins", sans-serif;
  font-size: 0.75em;
  color: ${(props) =>
    props.error
      ? props.theme.error ?? getThemeValue("error")
      : props.success
      ? props.theme.success ?? getThemeValue("success")
      : props.info
      ? props.theme.info ?? getThemeValue("info")
      : props.theme.text ?? getThemeValue("text")};
  margin: 0.25em 0 0 0.5em;
  position: absolute;
  bottom: ${(props) => (props.shown ? "-1.5em" : "-0.5em")};
  transition: all 0.2s ease-in-out;
`;

const TextFieldContainer = styled.div`
  display: flex;
  position: relative;
`;
