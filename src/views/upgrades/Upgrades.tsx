import {Section} from "../../components/paper/Section";
import React from 'react';
import {Avatar, Button, ButtonGroup, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

import FolderIcon from '@mui/icons-material/Folder';

export function Upgrades() {
    return (
        <Section title={'Upgrades'} xs={12}>
            <List sx={{width: '100%', height: '100%', overflow: 'scroll'}}>
                <ListItem
                    sx={{width: '100%'}}
                    secondaryAction={
                        <ButtonGroup variant="text" >
                            <Button>
                                +1
                            </Button>
                            <Button>
                                +10
                            </Button>
                        </ButtonGroup>
                    }
                >
                    <ListItemAvatar>
                        <Avatar variant={'rounded'}>
                            <FolderIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Code Completer"
                        secondary={'1.6 million LOC'}
                    />
                </ListItem>
            </List>
        </Section>
    )
}