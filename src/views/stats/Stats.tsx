import {Section} from "../../components/paper/Section";
import React from 'react';
import {useLinesOfCode} from "../../hooks/stats/LinesOfCode";
import {useLinesPerSec} from '../../hooks/upgrades/LinesPerSec'
import {Grid} from "@mui/material";

export function Stats() {
    const [currency] = useLinesOfCode();
    const [lps] = useLinesPerSec();

    return (
        <Section title={'Stats'} xs={12}>
            <Grid item xs={12} container padding={2}>
            {Math.trunc( currency )} -- {Math.trunc(lps)} Lines per Second
            </Grid>
        </Section>
    )
}