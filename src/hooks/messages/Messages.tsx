import React from "react";

export const MessagesContext = React.createContext<[string[], React.Dispatch<React.SetStateAction<string[]>>] | null>(null);

export const useMessages = () => {
    let val = React.useContext(MessagesContext)
    if (val == null) {
        throw new Error("Cannot use useMessages outside of MessagesContext")
    }
    
    return val;
}