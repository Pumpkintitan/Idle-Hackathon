import React from "react";

export const MiniGameBonusContext = React.createContext<[number, React.Dispatch<React.SetStateAction<number>>] | null>(null);

export const useMiniGameBonus = () => {
    let val = React.useContext(MiniGameBonusContext)
    if (val == null) {
        throw new Error("Cannot use useMiniGameBonus outside of MiniGameBonusContext")
    }
    return val;
}