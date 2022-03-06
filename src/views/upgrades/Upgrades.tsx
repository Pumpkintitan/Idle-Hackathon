import {Section} from "../../components/paper/Section";
import React from 'react';
import { useGenerators } from "../../hooks/upgrades/Generators";
import {Avatar, Box, Button, ButtonGroup, IconButton, List, ListItem, ListItemAvatar, ListItemText, Tooltip} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import { Upgrade, upgrades } from "../../datatypes/upgrade";
import { Generator, generators } from "../../datatypes/generator";
import { Buyable } from "../../datatypes/buyable"
import { useLinesOfCode } from "../../hooks/stats/LinesOfCode";
import { BuyButton } from "../../components/button/BuyButton";

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
    const [, setGenerators] = useGenerators()

    const [currency, setCurrency] = useLinesOfCode();
    
    const buyGenerator = (name: string, value: number, cost: number) => {setGenerators((generator) => {
        generator.set(name, (generator.get(name) || 0)+ value)
        setCurrency((oldValue) => oldValue-cost);
        return generator
    })}
    
    const generator = props;
    const generatorUpgrades = upgrades.filter((upgrade: Upgrade) => generator.upgrades.includes(upgrade.name));
    return (
        <>
            <ListItem
                sx={{width: '100%'}}
                secondaryAction={
                    <ButtonGroup variant="text" >
                        <BuyButton onClick={() => buyGenerator(generator.name, 1, generator.cost)} disabled={generator.cost>currency}>
                            +1
                        </BuyButton>
                        <BuyButton onClick={() => buyGenerator(generator.name, 10, generator.cost)} disabled={generator.cost*10>currency}>
                            +10
                        </BuyButton>
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
                {generatorUpgrades.map((upgrade: Upgrade) => <UpgradeListItem key={upgrade.name} {...upgrade} />)}

            </ListItem>
        </>
    )
}

export function GeneratorList() {
    return (
        <Section title={'Geneartors'} xs={12}>
            <List sx={{width: '100%', height: '80vh', overflow: 'scroll'}}>
                {generators.map((generator: Generator) => <GeneratorListItem key={generator.name} {...generator} />)}
            </List>
        </Section>
    )
}