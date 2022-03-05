import {Grid, Typography} from "@mui/material";
import React from "react";

export function HeaderTitle(props: { children: React.ReactNode, lg?: number, xl?: number }) {
    return (
        <Grid item xs={12} lg={props.lg || 12} xl={props.xl || 12}>
            <Typography variant={'h4'} sx={{fontWeight: 'bold'}} color={'text.secondary'}>
                {props.children}
            </Typography>
        </Grid>
    )
}