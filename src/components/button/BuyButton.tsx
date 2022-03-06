import { Button, ButtonProps, useTheme } from "@mui/material";
import React from "react";

export function BuyButton(props: ButtonProps) {
    const theme = useTheme();
    return (
        <Button {... props}
            sx={{
                '&.Mui-disabled': {
                    color: theme.palette.primary.light,
                    border: "0.5px solid"
                }
             }}
        />
    )
}