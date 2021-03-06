import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./styles/Theme";
import { LinesOfCodeContext } from "./stats/LinesOfCode";
import { UpgradesContext } from "./upgrades/Upgrades";
import { ManualGeneratorsContext, GeneratorsContext } from "./upgrades/Generators";
import { LinesPerSecContext } from './upgrades/LinesPerSec';
import { MessagesContext } from "./messages/Messages";
import { MiniGameBonusContext } from "./upgrades/MiniGameBonusState";

export function HookProvider(props: { children: React.ReactElement | React.ReactChildren }) {
    return (
        <ThemeProvider theme={mainTheme}>
            <LinesOfCodeContext.Provider value={React.useState(0)}> {/*TODO: Load value from cookie later*/}
                <UpgradesContext.Provider value={React.useState<Map<string, string[]>>(new Map())}>
                    <GeneratorsContext.Provider value={React.useState<Map<string, number>>(new Map())}>
                        <ManualGeneratorsContext.Provider value={React.useState<Map<string, number>>(new Map())}>
                            <MessagesContext.Provider value={React.useState<string[]>([])}>
                                <LinesPerSecContext.Provider value={React.useState(0)}>
                                    <MiniGameBonusContext.Provider value={React.useState(1)}>
                                        <CssBaseline key="css-baseline" />
                                        {props.children}
                                    </MiniGameBonusContext.Provider>
                                </LinesPerSecContext.Provider>
                            </MessagesContext.Provider>
                        </ManualGeneratorsContext.Provider>
                    </GeneratorsContext.Provider>
                </UpgradesContext.Provider>
            </LinesOfCodeContext.Provider>
        </ThemeProvider>
    )
}