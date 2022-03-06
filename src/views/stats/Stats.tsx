import {Section} from "../../components/paper/Section";
import React from 'react';
import {List} from "@mui/material";
import { useLinesOfCode } from "../../hooks/stats/LinesOfCode";
import { useLinesPerSec } from '../../hooks/upgrades/LinesPerSec'

export function Stats() {
    const [currency] = useLinesOfCode();
    const [lps] = useLinesPerSec();

    return (
        <Section title={'Stats'} xs={12}>
            <List>
                {Math.trunc( currency )} -- {Math.trunc(lps)} Lines per Second
            </List>
        </Section>
    )
}