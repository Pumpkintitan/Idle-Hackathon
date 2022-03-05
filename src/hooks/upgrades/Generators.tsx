import React from "react";

export const GeneratorsContext = React.createContext<[Map<string, number>, React.Dispatch<React.SetStateAction<Map<string, number>>>] | null>(null);

export const useGenerators = () => {
    let val = React.useContext(GeneratorsContext)
    if (val == null) {
        throw new Error("Cannot use useGenerators outside of GeneratorsContext")
    }

    return val;
}