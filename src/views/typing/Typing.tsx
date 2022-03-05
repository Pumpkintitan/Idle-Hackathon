import { Section } from "../../components/paper/Section";
import React from 'react';
import { TextField } from "@mui/material";
import { useLinesOfCode } from "../../hooks/stats/LinesOfCode";

export function Typing() {
    const [currency, setCurrency] = useLinesOfCode();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 10) {
            setCurrency((currency) => (currency + 1))
            event.target.value = ""
        }
    };

    return (
        <Section title={'Typing'} xs={12}>
            <TextField id="outlined-basic" onChange={handleChange} label="Line" variant="outlined" />
        </Section>
    )
}