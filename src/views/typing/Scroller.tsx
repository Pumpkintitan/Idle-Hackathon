import React, {useEffect, useMemo, useState} from 'react';
import {useTheme} from "@mui/styles";
import {ExtendedTheme} from "../../hooks/styles/Theme";
import {useLinesPerSec} from "../../hooks/upgrades/LinesPerSec";
import {scroller_text} from "../../datatypes/scroller";
import {Typography} from "@mui/material";

function count(s: string, sub: string) {
    return (s.split(",").length - 1)
}

export function Scroller() {
    const theme: ExtendedTheme = useTheme()
    const [speed,] = useLinesPerSec()
    const [index, setIndex] = useState(0)
    const maxLines = 8

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(i => i + 1)
        }, (1000 / 20));
        return () => {
            clearInterval(interval);
        };
    }, [setIndex]);

    const [viewdata, setViewStart] = useState<{view: string, start: number}>({view: "", start: 0})

    useEffect(() => {
        setViewStart((viewdata) => {
            const {start} = viewdata
            let newstart = start
            let slice = scroller_text.slice(start, index)
            if (count(slice, '\n') > maxLines) {
                newstart = start + slice.indexOf('\n') + 1
                slice = scroller_text.slice(start, index)
            }

            return {view: slice, start: newstart}
        })
    }, [index])

    return (
        <>
            {viewdata.view.split("\n").map(
                (item, i) => (
                    <Typography sx={{width: '100%', textOverflow: "ellipsis", overflow: "hidden"}} noWrap key={i}>
                        {item}
                    </Typography>
                )
            )}
        </>
    )
}