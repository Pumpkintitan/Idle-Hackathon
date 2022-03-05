import {Theme, Typography, TypographyProps} from "@mui/material";
import {useTheme} from "@mui/styles";
import React from "react";

export function UnderlineLink(props: TypographyProps) {
    const theme: Theme = useTheme()

    return (
        <Typography {...props} sx={{
            display: "inline-block",
            position: "relative",
            textDecoration: "none",
            ":after": {
                content: '""',
                position: 'absolute',
                width: '100%',
                transform: 'scaleX(0)',
                height: '2px',
                bottom: 0,
                left: 0,
                backgroundColor: props.color === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main,
                transformOrigin: 'bottom right',
                transition: 'transform 0.25s ease-out',
            },
            ":hover:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left"
            },
            ":focus:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left"
            },
            ...props.sx,
        }}>
            {props.children}
        </Typography>
    )
}