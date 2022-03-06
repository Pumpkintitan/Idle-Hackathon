import React from 'react';
import {Grid, TextField} from "@mui/material";
import {useLinesOfCode} from "../../hooks/stats/LinesOfCode";

export function Typing() {
    const [, setCurrency] = useLinesOfCode();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 10) {
            setCurrency((currency) => (currency + 1))
            event.target.value = ""
        }
    };

    return (
        <Grid container item xs={12} padding={2}>
            <TextField variant="outlined" onChange={handleChange} label="Line" fullWidth/>
        </Grid>
    )
}