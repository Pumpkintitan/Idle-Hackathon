import React from 'react';
import {Grid, List, ListItem} from "@mui/material";
import {useMessages} from "../../hooks/messages/Messages";
import {useTheme} from "@mui/styles";
import {ExtendedTheme} from "../../hooks/styles/Theme";

export function Story() {
    const [messages,] = useMessages()
    const theme: ExtendedTheme = useTheme()

    return (
        <Grid container>
            <List sx={{
                height: '30vh', overflowY: 'scroll', width: '100%',
                marginTop: 2,
                '& > *': {
                    borderBottom: `1px solid ${theme.palette.outline.main}`,
                    borderTop: `none`,
                },
                '& > :first-child': {
                    borderBottom: `1px solid ${theme.palette.outline.main}`,
                    borderTop: `1px solid ${theme.palette.outline.main}`,
                },

            }}>
                {
                    messages.map(
                        (m, i) => (
                            <ListItem key={i} sx={{
                                width: '100%',
                            }}>
                                {m}
                            </ListItem>
                        )
                    )
                }
            </List>
        </Grid>
    )
}