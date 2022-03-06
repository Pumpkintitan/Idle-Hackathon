import {Section} from "../../components/paper/Section";
import React from 'react';
import {useLinesOfCode} from "../../hooks/stats/LinesOfCode";
import {useLinesPerSec} from '../../hooks/upgrades/LinesPerSec'
import {Grid, Typography} from "@mui/material";

export function Stats() {
    const [currency] = useLinesOfCode();
    const [lps] = useLinesPerSec();

    return (
        <Section title={'Stats'} xs={12}>
            <Grid item xs={12} container padding={2}>
                <Grid item xs={12}>
                    <Typography variant={'h3'}>
                        {Math.trunc(currency).toLocaleString('en-us')} lines
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h5'}>
                        {Math.trunc(lps).toLocaleString('en-us')} Lines per Second
                    </Typography>
                </Grid>
            </Grid>
        </Section>
    )
}