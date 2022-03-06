import React, {useEffect, useState} from 'react';
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
    const [[index, lineNo], setLineNo] = useState([0, 0])
    const maxLines = 8

    console.log(speed)
    useEffect(() => {
        const interval = setInterval(() => {
            setLineNo(val => {
                const [index, lineNo] = val

                if (scroller_text[lineNo].length <= index) {
                    return [0, (lineNo + 1) % scroller_text.length]
                }
                return [index + 1, lineNo]
            })

        }, (1000 / 8));
        return () => {
            clearInterval(interval);
        };
    }, [setLineNo, speed]);
    return (
        <>
            {
                scroller_text.slice(Math.max(lineNo - 8, 0), lineNo).map(
                    (line, i) => (
                        (i === 7 ?
                                <Typography sx={{width: '100%', textOverflow: "ellipsis", overflow: "hidden"}} noWrap
                                            key={i}>
                                    {line.slice(0, index)}
                                </Typography>
                                :
                                <Typography
                                    sx={{width: '100%', textOverflow: "ellipsis", overflow: "hidden"}}
                                    noWrap
                                    key={i}
                                >
                                    {line}
                                </Typography>
                        )

                    )
                )
            }
        </>
    )
}