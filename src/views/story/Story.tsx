import {Section} from "../../components/paper/Section";
import React from 'react';
import {List, ListItem} from "@mui/material";
import {useMessages} from "../../hooks/messages/Messages";
import {useTheme} from "@mui/styles";
import {ExtendedTheme} from "../../hooks/styles/Theme";

export function Story() {
    const [messages,] = useMessages()
    const theme: ExtendedTheme = useTheme()
    console.log(messages)

    return (
        <Section title={'Story'} xs={12}>
            <List sx={{
                height: '40vh', overflowY: 'scroll', width: '100%',
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
        </Section>
    )
}