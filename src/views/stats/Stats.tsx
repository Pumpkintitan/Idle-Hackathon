import React, { useState, useEffect } from 'react';
import {useLinesOfCode} from "../../hooks/stats/LinesOfCode";
import {useLinesPerSec} from '../../hooks/upgrades/LinesPerSec'
import {Grid, TextField, Typography} from "@mui/material";
import {numberConverter} from "../../utils/numberconverter";
import {Scroller} from "../typing/Scroller";
import { useMessages } from '../../hooks/messages/Messages';
import { story } from '../../datatypes/story'

export function Stats() {
    const [currency, setCurrency] = useLinesOfCode();
    const [lps] = useLinesPerSec();
    const [messages, setMessages] = useMessages()
    const [currstory, setCurrstory] = useState(0);

    useEffect(() => {
        if (currency >= story[currstory].locneeded) {
            setMessages((me) => [story[currstory].text].concat(me))
            setCurrstory((c) => c + 1)
        }
    
    }, [currency])
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length >= 10) {
            setCurrency((currency) => (currency + 1))
            event.target.value = ""
        }
    };



    return (
        <Grid item xs={12} container padding={2} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={12} height={'40vh'} sx={{paddingTop: 16}}>
                <Typography variant={'h3'}>
                    {numberConverter(currency)} lines
                </Typography>
                <Typography variant={'h5'}>
                    {numberConverter(lps)} Lines per Second
                </Typography>
            </Grid>
            <Grid item xs={12} height={'40vh'}>
                <Scroller/>
            </Grid>
            <Grid item xs={12} height={'10vh'}>
                <TextField variant="outlined" onChange={handleChange} label="Line" fullWidth/>
            </Grid>
        </Grid>
    )
}