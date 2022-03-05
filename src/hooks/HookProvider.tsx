import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./styles/Theme";
import { LinesOfCodeContext } from "./stats/LinesOfCode";
import { UpgradesContext } from "./upgrades/Upgrades";
import { GeneratorsContext } from "./upgrades/Generators";

export function HookProvider(props: { children: React.ReactElement | React.ReactChildren }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <LinesOfCodeContext.Provider value={React.useState(0)}> {/*TODO: Load value from cookie later*/}
                <UpgradesContext.Provider value={React.useState([""])}>
                    <GeneratorsContext.Provider value={React.useState(new Map())}>
                        <CssBaseline key="css-baseline" />
                        {props.children}
                    </GeneratorsContext.Provider>
                </UpgradesContext.Provider>
            </LinesOfCodeContext.Provider>
        </ThemeProvider>
    )
}