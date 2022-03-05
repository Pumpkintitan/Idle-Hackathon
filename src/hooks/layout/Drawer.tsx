import React from "react";

export const sidebarDrawerWidth = 280

export const DrawerOpenContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | null>(null);

export const useDrawerOpen = () => {
    let val = React.useContext(DrawerOpenContext)
    if (val == null) {
        throw new Error("Cannot use useDrawerWidth outside of DrawerWidthContext")
    }
    return val;
}