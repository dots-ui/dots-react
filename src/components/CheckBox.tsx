import React from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";


export type CheckBoxProps = React.HTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
    boxsize?: "small" | "medium" | "large";
    disabled?: boolean;
}

const CheckBoxElement = styled.input<CheckBoxProps>`
    

`

export const CheckBox = (props: CheckBoxProps) => {
    return(
        <>
            <CheckBoxElement type="checkbox" {...props} />
            <svg xmlns="http://www.w3.org/2000/svg" 
                width={`${() => {
                    if(props.boxsize === "small") return 10
                    if(props.boxsize === "large") return 50
                    return 25
                }}`}
                height={`${() => {
                    if(props.boxsize === "small") return 10
                    if(props.boxsize === "large") return 50
                    return 25
                }}`}
            >
                <path d="M9 22-1 11.402l2.798-2.859 7.149 7.473L22.091 2 25 4.806z" />
            </svg>
        </>
    )
}

