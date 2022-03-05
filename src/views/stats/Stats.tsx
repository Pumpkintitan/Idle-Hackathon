import {Section} from "../../components/paper/Section";
import React from 'react';
import {List} from "@mui/material";
import { useLinesOfCode } from "../../hooks/stats/LinesOfCode";

export function Stats() {
    const [currency, setCurrency] = useLinesOfCode();

    return (
        <Section title={'Stats'} xs={12}>
            <List>
                {currency}
            </List>
        </Section>
    )
}