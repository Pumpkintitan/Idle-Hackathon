import {Section} from "../../components/paper/Section";
import React from 'react';
import {List, ListItem} from "@mui/material";
import {useMessages} from "../../hooks/messages/Messages";

export function Story() {
    const messages = useMessages()

    return (
        <Section title={'Story'} xs={12}>
            <List sx={{height: '40vh', overflowY: 'scroll'}}>
                {
                    messages.map(
                        (m, i) => (
                            <ListItem key={i}>
                                {m}
                            </ListItem>
                        )
                    )
                }
            </List>
        </Section>
    )
}