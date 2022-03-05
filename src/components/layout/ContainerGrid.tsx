import React, {useEffect} from "react"
import {Box, Container, ContainerProps, Grid, Theme} from "@mui/material";
import {useTheme} from "@mui/styles";
import {sidebarDrawerWidth, useDrawerOpen} from "../../hooks/layout/Drawer";

export function ContainerGrid(props: { sidebarOpen: boolean, children: React.ReactNode | React.ReactChildren } & ContainerProps): JSX.Element {
    const theme: Theme = useTheme()

    const [drawerOpen, setDrawerOpen] = useDrawerOpen()

    useEffect(() => {
        setDrawerOpen(props.sidebarOpen)
    }, [setDrawerOpen, props.sidebarOpen])

    return (
        <main style={{
            flexGrow: 1,
            overflow: 'auto',
            height: '100vh',
        }}>
            <Box sx={{
                ...theme.mixins.toolbar,
                position: 'relative',
                width: (drawerOpen ? sidebarDrawerWidth : 1),
            }}/>
            <Container
                {...props}
                sx={{
                    paddingTop: theme.spacing(10),
                    paddingBottom: theme.spacing(4),
                    width: '100%',
                    ...props.sx
                }}
            >
                <Grid container spacing={4} justifyContent={'center'}>
                    {props.children}
                </Grid>
            </Container>
        </main>
    )
}