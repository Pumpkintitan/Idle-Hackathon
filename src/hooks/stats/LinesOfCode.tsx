import React from "react";

export const LinesOfCodeContext = React.createContext<[number, React.Dispatch<React.SetStateAction<number>>] | null>(null);

export const useLinesOfCode = () => {
    let val = React.useContext(LinesOfCodeContext)
    if (val == null) {
        throw new Error("Cannot use useLinesOfCode outside of LinesOfCodeContext")
    }
    return val;
}