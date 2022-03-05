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

    const theme: ExtendedTheme = useTheme()
    return (
        <Grid item {...props}>
            <Paper variant={'outlined'} sx={{
                height: props.fill ? '100%' : props.h,
                borderColor: props.outline ? theme.palette.outline.main : undefined,
                borderRadius: 4,
                width: '100%'
            }}>
                <Grid container justifyContent={'center'} height={'100%'} width={'100%'}>
                    {
                        props.title &&
                        <React.Fragment>
                            <Grid item spacing={2} xs={12} sx={{padding: 3}}>
                                <Typography variant={'h6'} align={'left'} color={'text.secondary'}
                                            sx={{fontWeight: 'bold'}}
                                >
                                    {props.title}
                                </Typography>
                            </Grid>
                            <Grid item spacing={2} xs={12}>
                                <Divider light/>
                            </Grid>
                        </React.Fragment>
                    }
                    <Grid item container spacing={2} justifyContent={'center'} height={'100%'}
                          sx={{
                              padding: props.disablePadding ? 0 : 4,
                          }}
                          xs={12}
                    >
                        {props.children}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}