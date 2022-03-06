import React from "react";

export const LinesPerSecContext = React.createContext<[number, React.Dispatch<React.SetStateAction<number>>] | null>(null);

export const useLinesPerSec = () => {
    let val = React.useContext(LinesPerSecContext)
    if (val == null) {
        throw new Error("Cannot use useLinesPerSec outside of LinesPerSecContext")
    }

    return val;
}