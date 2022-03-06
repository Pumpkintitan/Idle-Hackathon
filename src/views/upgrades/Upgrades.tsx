import {Section} from "../../components/paper/Section";
import React from 'react';
import {Avatar, Box, Button, ButtonGroup, IconButton, List, ListItem, ListItemAvatar, ListItemText, Tooltip} from "@mui/material";

import FolderIcon from '@mui/icons-material/Folder';
import { Upgrade, upgrades } from "../../datatypes/upgrade";
import { Generator, generators } from "../../datatypes/generator";
import { Buyable } from "../../datatypes/buyable"


function UpgradeListItem(props: Upgrade) {
    const upgrade = props;
    return (
        <Tooltip title={upgrade.name}>
            <IconButton>
                <Avatar variant={'rounded'}>
                    {upgrade.icon}
                </Avatar>
            </IconButton>
        </Tooltip>
    )
}

function GeneratorListItem(props: Generator) {
    const generator = props;
    const generatorUpgrades = upgrades.filter((upgrade: Upgrade) => generator.upgrades.includes(upgrade.name));
    return (
        <>
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
                        {generator.icon}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={generator.name}
                    secondary={`${generator.cost} LOC`}
                />
            </ListItem>
            <ListItem
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}
            >
                {generatorUpgrades.map((upgrade: Upgrade) => <UpgradeListItem {... upgrade} />)}
            
            </ListItem>
        </>
    )
}

export function GeneratorList() {
    return (
        <Section title={'Geneartors'} xs={12}>
            <List sx={{width: '100%', height: '100%', overflow: 'scroll'}}>
                {generators.map((generator: Generator) => <GeneratorListItem {... generator} />)}
            </List>
        </Section>
    )
}