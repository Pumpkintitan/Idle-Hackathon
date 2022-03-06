import { Section } from "../../components/paper/Section";
import { Grid, TextField } from "@mui/material";
import React from 'react';
import { useState, useEffect } from "react";
import { WORDS } from "./words.js";
import { List, ListItem } from "@mui/material";
import { useMiniGameBonus } from "../../hooks/upgrades/MiniGameBonusState";


export function Minigames() {
    const [triesLeft, setTriesLeft] = useState<number>(5)
    const [word, setWord] = useState<string>(WORDS[Math.floor(Math.random() * WORDS.length)])
    const [wrongPos, setWrongPos] = useState<string>("")
    const [displayWord, setDisplayWord] = useState<string>("-----")
    const [btext, setbtext] = useState<string>("")


    function setCharAt(str: string, index: number, chr: string) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    const [bonus, setBonus] = useMiniGameBonus()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length == 5) {
            let guess = event.target.value
            if (guess == word) {
                setBonus(7)
                setbtext((bt) => bt = "Correct! x7 production!")
                setTriesLeft((tl) => tl = 5)
                setWord((word) => word = WORDS[Math.floor(Math.random() * WORDS.length)])
                setWrongPos((wp) => wp = "")
                setDisplayWord((dw) => dw = "-----")
                setTimeout(() => {
                    setBonus(1)
                    setbtext((bt) => bt = "")
                  }, 5000);
            }
            else {
                for (let i = 0; i < guess.length; i++) {
                    for (let j = 0; j < word.length; j++) {
                        if (guess[i] == word[j] && i != j) {
                            if (!wrongPos.includes(guess[i])) {
                                setWrongPos((wrongPos) => (wrongPos + guess[i]))

                            }
                        }
                        else if (guess[i] == word[j] && i == j) {
                            for (let k = 0; k < 5; k++) {
                                if (k == i) {
                                    setDisplayWord((displayWord) => (setCharAt(displayWord, k, guess[i])))
                                }
                            }
                        }
                    }
                }
            }
            setTriesLeft((tl) => tl -= 1)
            if (triesLeft == 1) {
                setTriesLeft((tl) => tl = 5)
                setbtext((bt) => bt = "Wrong, try again")
                setWord((word) => word = WORDS[Math.floor(Math.random() * WORDS.length)])
                setWrongPos((wp) => wp = "")
                setDisplayWord((dw) => dw = "-----")
                setTimeout(() => {
                    setbtext((bt) => bt = "")
                  }, 5000);
            }
            event.target.value = ""

        }
        console.log(displayWord)
    };
    return (
        <Section title={'Minigames'} xs={12}>
            Minigames
            <TextField variant="outlined" onChange={handleChange} label="Codle" fullWidth />
            <List>
                <ListItem> {btext} </ListItem>
                <ListItem> Tries Remaining: {triesLeft} </ListItem>
                <ListItem> {wrongPos} </ListItem>
                <ListItem> {displayWord} </ListItem>

            </List>
        </Section>
    )
}