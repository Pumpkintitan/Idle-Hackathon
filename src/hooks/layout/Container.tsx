import React from "react";
import {Breakpoint} from "@mui/material";

export const ContainerSizeContext = React.createContext<[Breakpoint, React.Dispatch<React.SetStateAction<Breakpoint>>] | null>(null);

export const useContainerSize = () => {
    let val = React.useContext(ContainerSizeContext)
    if (val == null) {
        throw new Error("Cannot use useContainerSize outside of ContainerSizeContext")
    }
    return val;
}