import {Section} from "../../components/paper/Section";
import React from 'react';
import {Avatar, Button, ButtonGroup, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import { useGenerators } from "../../hooks/upgrades/Generators";

import FolderIcon from '@mui/icons-material/Folder';

export function Upgrades() {
    const [, setGenerators] = useGenerators()

    const buyGenerator = (name: string, value: number) => {setGenerators((generator) => {
        generator.set(name, (generator.get(name) || 0)+ value)
        console.log(generator)
        return generator
    })}

    return (
        <Section title={'Upgrades'} xs={12}>
            <List sx={{width: '100%', height: '100%', overflow: 'scroll'}}>
                <ListItem
                    sx={{width: '100%'}}
                    secondaryAction={
                        <ButtonGroup variant="text" >
                            <Button onClick={() => buyGenerator("Script", 1)}>
                                +1
                            </Button>
                            <Button onClick={() => buyGenerator("Script", 10)}>
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