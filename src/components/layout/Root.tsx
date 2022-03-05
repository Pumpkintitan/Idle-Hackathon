import {Box, Theme} from "@mui/material";
import {useTheme} from "@mui/styles";
import React from "react";

export function Root(props: { children: React.ReactNode }) {
    const theme: Theme = useTheme()

    return (
        <Box id={'rootarea'} sx={{
            display: 'flex',
            background: theme.palette.background.default,
            backgroundSize: 'cover',
        }}>
            {/*<Navbar/>*/}
            {props.children}
        </Box>
    )
}