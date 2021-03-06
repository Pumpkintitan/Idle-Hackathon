import React from "react";

export const UpgradesContext = React.createContext<[Map<string, string[]>, React.Dispatch<React.SetStateAction<Map<string, string[]>>>] | null>(null);

export const useUpgrades = () => {
    let val = React.useContext(UpgradesContext)
    if (val == null) {
        throw new Error("Cannot use useUpgrades outside of UpgradesContext")
    }
    
    return val;
}