import { Section } from "../../components/paper/Section";
import React from 'react';
import { TextField, Grid } from "@mui/material";
import { useLinesOfCode } from "../../hooks/stats/LinesOfCode";

export function Typing() {
    const [, setCurrency] = useLinesOfCode();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 10) {
            setCurrency((currency) => (currency + 1))
            event.target.value = ""
        }
    };

    return (
        <Section title={'Typing'} xs={12}>
            <Grid container item xs={12} padding={2}>
                <TextField variant="standard" onChange={handleChange} label="Line" fullWidth />
            </Grid>
        </Section>
    )
}