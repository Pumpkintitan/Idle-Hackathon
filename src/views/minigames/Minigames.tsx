import {Section} from "../../components/paper/Section";
import {Box, Grid, Paper, TextField, Typography} from "@mui/material";
import React, {useState} from 'react';
import {WORDS} from "./words.js";
import {useMiniGameBonus} from "../../hooks/upgrades/MiniGameBonusState";


export function Minigames() {
    const [triesLeft, setTriesLeft] = useState<number>(5)
    const [word, setWord] = useState<string>(WORDS[Math.floor(Math.random() * WORDS.length)])
    const [wrongPos, setWrongPos] = useState<string>("")
    const [displayWord, setDisplayWord] = useState<string>("-----")
    const [btext, setbtext] = useState<string>("")
    const [miniGameActive, setMiniGameActive] = useState<boolean>(false)
    function setCharAt(str: string, index: number, chr: string) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }
    console.log(word)
    const [bonus, setBonus] = useMiniGameBonus()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length === 5) {
            let guess = event.target.value
            if (guess === word) {
                setBonus(7)
                setMiniGameActive(true)
                setbtext((bt) => "Correct! x7 production!")
                setTriesLeft((tl) => 5)
                setWord((word) => WORDS[Math.floor(Math.random() * WORDS.length)])
                setWrongPos((wp) => "")
                setDisplayWord((dw) => "-----")
                setTimeout(() => {
                    setBonus(1)
                    setMiniGameActive(false)
                    setbtext((bt) => "")
                  }, 10000);
            }
            else {
                for (let i = 0; i < guess.length; i++) {
                    for (let j = 0; j < word.length; j++) {
                        if (guess[i] === word[j] && i !== j) {
                            if (!wrongPos.includes(guess[i])) {
                                setWrongPos((wrongPos) => (wrongPos + guess[i]))
                            }
                        }
                        else if (guess[i] === word[j] && i === j) {
                            for (let k = 0; k < 5; k++) {
                                if (k === i) {
                                    setDisplayWord((displayWord) => (setCharAt(displayWord, k, guess[i])))
                                }
                            }
                        }
                    }
                }

                setTriesLeft((tl) => tl -= 1)
                if (triesLeft === 0) {
                    setTriesLeft((tl) => tl = 5)
                    setbtext((bt) => `Wrong, try again. The word was ${word}`)
                    setWord((word) => WORDS[Math.floor(Math.random() * WORDS.length)])
                    setWrongPos((wp) => "")
                    setDisplayWord((dw) => "-----")
                    setTimeout(() => {
                        setbtext((bt) => "")
                    }, 5000);
                }
            }
            event.target.value = ""
        }
    };
    return (
        <Section title={'Codle'} xs={12}>
            <Box display={'flex'} flexDirection={'column'} height={'100%'} sx={{
                paddingTop: 12,
                padding: 1,
            }}>
                <Typography variant={'subtitle1'} sx={{marginTop: 4, marginBottom: 4}}>
                    You have 5 tries to guess this 5 letter word for a bonus multiplier.
                </Typography>
                <Typography variant={'subtitle1'}>
                    Tries Left: {triesLeft}
                </Typography>
                <Typography variant={'subtitle1'} sx={{marginTop: 3, marginBottom: 2}}>
                    Correct Letters: {wrongPos}
                </Typography>
                <Typography variant={'subtitle1'}>
                    {btext}
                </Typography>
                <Grid container spacing={0.5} justifyContent={'center'} sx={{marginTop: 3}}>
                    {[0,1,2,3,4].map((i) => (
                        <Grid item xs={2} key={1}>
                            <Paper sx={{backgroundColor: '#666'}}>
                                <Typography variant={'h4'} align={'center'}>
                                    {displayWord[i]}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                <TextField variant="outlined" onChange={handleChange} label="Guess" fullWidth sx={{marginTop: 3}} disabled={miniGameActive}/>
            </Box>
        </Section>
    )
}