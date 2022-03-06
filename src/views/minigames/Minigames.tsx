import {Section} from "../../components/paper/Section";
import {Grid, TextField} from "@mui/material";
import React from 'react';
import { WORDS } from "./words.js";


export function Minigames() {
    const NUMBER_OF_GUESSES = 6;
    let guessesRemaining = NUMBER_OF_GUESSES;
    let nextLetter = 0;
    let word = WORDS[Math.floor(Math.random() * WORDS.length)]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length == 4) {
            let guess = event.target.value
            for (let i = 0; i < guess.length; i++) {
                for (let j = 0; j < word.length; j++) {
                    if(guess == word && i == j)
                    {
                        continue;
                    }
                }
            }
        }
    };
    return (
        <Section title={'Minigames'} xs={12}>
            Minigames
            <TextField variant="outlined" onChange={handleChange} label="Codle" fullWidth/>
            
        </Section>
    )
}