import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {useTheme} from "@mui/styles";
import {ExtendedTheme} from "../../hooks/styles/Theme";
import React from "react";
import {sidebarDrawerWidth} from "../../hooks/layout/Drawer";
import {MenuRounded} from "@mui/icons-material";

const debug = true

export function Navbar() {
    const theme: ExtendedTheme = useTheme()

    return (
        <AppBar
            elevation={0}
            position="absolute"
            sx={{
                zIndex: theme.zIndex.drawer + 1,
                // marginLeft: (drawerOpen ? sidebarDrawerWidth : 0),
                // width: `calc(100% - ${(drawerOpen ? sidebarDrawerWidth : 1) - 1}px)`,

                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: '0.3s',
                }),
                background: theme.palette.background.navbar,
                // background: 'transparent',
                overflow: 'hidden',
                // borderColor: theme.palette.outline.main,
                // borderBottom: 1,
                '& .MuiAppBar-root': {
                    backgroundColor: "rgba(0,0,0,.6)",
                    // backgroundColor: theme.palette.background.default
                    overflow: 'hidden',
                },
            }}>
            <Toolbar sx={{
                paddingRight: 24, // keep right padding when drawer closed
                height: theme.spacing(8),
                // boxShadow: `0 3px 5px 3px ${theme.palette.primary.main}`,
                overflow: 'visible',
                background: 'transparent',
                paddingLeft: 0,
                ...(theme.navKind === 'outlined' ? {
                    borderBottom: 1,
                    borderLeft: 1,
                    borderColor: theme.palette.outline.main,
                    boxShadow: 'none',
                    boxSizing: 'border-box',
                } : {
                    border: 'none',
                    boxShadow: '0px 5px 5px 0px rgba(0, 0, 0)'
                })
            }}

            >
                <Typography sx={{flexGrow: 1}}>

                </Typography>
            </Toolbar>
        </AppBar>
    )
}