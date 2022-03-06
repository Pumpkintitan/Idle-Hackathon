import {Divider, Grid, GridProps, Paper, Typography} from "@mui/material";
import {ExtendedTheme} from "../../hooks/styles/Theme";
import React from "react";
import {useTheme} from "@mui/styles";

export function Section(props: {
    children: React.ReactNode,
    fill?: boolean,
    h?: number,
    outline?: boolean,
    pad?: boolean,
    title?: string,
    disablePadding?: boolean
} & GridProps) {
    const {
        children,
        fill,
        h,
        outline,
        pad,
        title,
        disablePadding,
        ...gridprops
    } = props

    return (
        <Grid item {...gridprops}>
            <Paper variant={'outlined'} sx={{
                // borderColor: theme.palette.outline.main,
                borderColor: undefined,
                borderRadius: 1,
                borderWidth: 1,
                width: '100%',
                height: '100%'
            }}>
                <Grid container height={'100%'} width={'100%'}>
                    {
                        props.title &&
                        <Grid item container xs={12} width={'100%'} sx={{height: 50}}>
                            <Grid item spacing={2} xs={12} sx={{padding: 2}}>
                                <Typography variant={'h6'} align={'left'} color={'text.secondary'}
                                            sx={{fontWeight: 500}}
                                >
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item spacing={2} xs={12}>
                                <Divider light/>
                            </Grid>
                        </Grid>
                    }
                    {children}
                </Grid>
            </Paper>
        </Grid>
    )
}