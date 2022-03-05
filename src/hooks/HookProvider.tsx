import React from "react";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {mainTheme} from "./styles/Theme";

export function HookProvider(props: { children: React.ReactElement | React.ReactChildren }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline key="css-baseline"/>
            {props.children}
        </ThemeProvider>
    )
}