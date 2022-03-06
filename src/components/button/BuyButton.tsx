import { Button, ButtonProps } from "@mui/material";
import React from "react";

export function BuyButton(props: ButtonProps) {
    return (
        <Button {... props}
            sx={{
                '&.Mui-disabled': {
                    color: "#ababab"
                }
             }}
        />
    )
}