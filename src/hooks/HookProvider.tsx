import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./styles/Theme";
import { LinesOfCodeContext } from "./stats/LinesOfCode";

export function HookProvider(props: { children: React.ReactElement | React.ReactChildren }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <LinesOfCodeContext.Provider value={React.useState(0)}> {/*TODO: Load value from cookie later*/}
                <CssBaseline key="css-baseline" />
                {props.children}
            </LinesOfCodeContext.Provider>
        </ThemeProvider>
    )
}