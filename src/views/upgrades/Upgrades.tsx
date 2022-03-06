import {Section} from "../../components/paper/Section";
import React from 'react';
import {useGenerators, useManualGenerators} from "../../hooks/upgrades/Generators";
import {
    Avatar,
    ButtonGroup,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Tooltip, Typography,
    useTheme
} from "@mui/material";
import {Upgrade, upgrades} from "../../datatypes/upgrade";
import {Generator, generators} from "../../datatypes/generator";
import {useLinesOfCode} from "../../hooks/stats/LinesOfCode";
import {BuyButton} from "../../components/button/BuyButton";
import {ExtendedTheme} from "../../hooks/styles/Theme";
import {useUpgrades} from "../../hooks/upgrades/Upgrades";
import {numberConverter} from "../../utils/numberconverter";
import { Buyable } from "../../datatypes/buyable";

function UpgradeTooltipBody(props: { upgrade: Upgrade, associatedGenerator: string, purchased: boolean}) {
    const theme: ExtendedTheme = useTheme()

    return (
        <Grid container spacing={1} padding={1}>
            <Grid item xs={3}>
                <Avatar variant={'rounded'}
                        sx={{
                            background: "none",
                            color: theme.palette.primary.light,
                            fontSize: '45px',
                            width: '50px',
                            height: '50px',
                            backgroundSize: 'cover',
                            '& > *': {
                                fontSize: "inherit"
                            },
                        }}
                >
                    {props.upgrade.icon}
                </Avatar>
            </Grid>
            <Grid item xs={9}>
                <Typography variant={'body1'}>
                    {props.upgrade.name}
                </Typography>
                <Typography variant={'subtitle2'}
                    sx={{fontSize: "9pt"}}
                >
                    ({ props.purchased ? "Owned" : `Purchase for ${props.upgrade.cost} LoC`})
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'subtitle1'}>
                    {props.upgrade.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'subtitle2'}
                    sx={{fontSize: "9pt"}}
                >
                    Improves {props.associatedGenerator} production by {props.upgrade.multiplier}x
                </Typography>
            </Grid>
        </Grid>
    )
}

function GeneartorTooltipBody(props: { generator: Generator, owned: number }) {
    const theme: ExtendedTheme = useTheme()

    return (
        <Grid container spacing={1} padding={1} columns={{xs: 2, md: 12}}>
            <Grid item xs={3}>
                <Avatar variant={'rounded'}
                        sx={{
                            background: "none",
                            color: theme.palette.primary.light,
                            fontSize: '45px',
                            width: '50px',
                            height: '50px',
                            backgroundSize: 'cover',
                            '& > *': {
                                fontSize: "inherit"
                            },
                        }}
                >
                    {props.generator.icon}
                </Avatar>
            </Grid>
            <Grid item xs={9}>
                <Typography variant={'body1'}>
                    {props.generator.name}
                </Typography>
                <Typography variant={'subtitle2'}
                    sx={{fontSize: "9pt"}}
                >
                    (Manually Purchaed {props.owned})
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'subtitle1'}>
                    {props.generator.description}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'subtitle1'}
                    sx={{fontSize: "9pt"}}
                >
                    {props.generator.name} produces {props.generator.production} LoC/second.
                </Typography>
            </Grid>
        </Grid>
    )
}

function UpgradeListItem(props: Upgrade & { associatedGenerator: string }) {

    const upgrade = props;
    const theme: ExtendedTheme = useTheme();
    const [upgradesPurchased, setUpgrades] = useUpgrades();
    const [currency, setCurrency] = useLinesOfCode();

    const buyUpgrade = (generatorName: string, upgradeName: string, cost: number) => {
        setUpgrades((upgrade) => {
            let updatedUpgrades = new Map(upgrade);
            let updatedList = updatedUpgrades.get(generatorName) || [];

            updatedUpgrades.set(generatorName, updatedList.concat(upgradeName));
            setCurrency((oldValue) => oldValue - cost);
            return updatedUpgrades;
        });
    }

    return (
        <Tooltip title={<UpgradeTooltipBody upgrade={upgrade} associatedGenerator={props.associatedGenerator} purchased={(upgradesPurchased.get(props.associatedGenerator) || []).includes(upgrade.name)}/>} arrow>
            <span>
                <IconButton
                    onClick={() => buyUpgrade(props.associatedGenerator, upgrade.name, upgrade.cost)}
                    disabled={upgrade.cost > currency || (upgradesPurchased.get(props.associatedGenerator) || []).includes(upgrade.name)}
                    sx={(upgradesPurchased.get(props.associatedGenerator) || []).includes(upgrade.name) ? {
                        '> *': {color: theme.palette.primary.main},
                        '&.Mui-disabled > *': {
                            color: theme.palette.tertiary.main
                        }
                    } : {
                        color: theme.palette.primary.main,
                        '&.Mui-disabled > *': {
                            color: theme.palette.primary.light
                        }
                    }}
                >
                    <Avatar variant={'rounded'}
                            sx={{
                                transition: "0.3s",
                                width: "18px",
                                height: "18px",
                                '& > *': {
                                    width: "18px"
                                },
                                background: "none",
                                color: theme.palette.primary.main
                            }}
                    >
                        {upgrade.icon}
                    </Avatar>
                </IconButton>
            </span>
        </Tooltip>
    )
}

function GeneratorListItem(props: Generator) {
    const theme = useTheme();

    const [generators, setGenerators] = useGenerators();
    const [manualGenerators, setManualGenerators] = useManualGenerators();
    const [upgradesPurchased, setUpgrades] = useUpgrades();
    const [currency, setCurrency] = useLinesOfCode();

    const buyGenerator = (name: string, value: number, cost: number) => {
        setGenerators((generator) => {
            generator.set(name, (generator.get(name) || 0) + value);
            setCurrency((oldValue) => oldValue - cost * value);
            return generator;
        });
        setManualGenerators((generator) => {
            generator.set(name, (generator.get(name) || 0) + value);
            return generator;
        });
    }

    const generator = props;
    const generatorUpgrades = upgrades.filter((upgrade: Upgrade) => {
        return generator.upgrades.includes(upgrade.name) &&
            ((manualGenerators.get(generator.name) || 0) >= upgrade.generatorsRequired) &&
            ((upgradesPurchased.get(generator.name) || []).includes(upgrade.requisites || "") || upgrade.requisites == null)
    });

    return (
        <>
            <ListItem
                sx={{width: '100%'}}
                secondaryAction={
                    <ButtonGroup variant="outlined">
                        <BuyButton onClick={() => buyGenerator(generator.name, 1, generator.cost * Math.pow(1.05, (manualGenerators.get(generator.name) || 0)))}
                                   disabled={generator.cost * Math.pow(1.05, (manualGenerators.get(generator.name) || 0)) > currency || (!(generators.has(generator.requisites || "")) && !(generator.requisites == null))}>
                            +1
                        </BuyButton>
                        <BuyButton onClick={() => buyGenerator(generator.name, 10, generator.cost * Math.pow(1.05, ((manualGenerators.get(generator.name) || 0))))}
                                   disabled={generator.cost * Math.pow(1.05, ((manualGenerators.get(generator.name) || 0))) * 10 > currency || (!(generators.has(generator.requisites || "")) && !(generator.requisites == null))}>
                            +10
                        </BuyButton>
                    </ButtonGroup>
                }
            >
                <ListItemAvatar>

                    <Tooltip title={<GeneartorTooltipBody generator={generator} owned={(manualGenerators.get(generator.name) || 0)}/>} arrow>
                        <Avatar variant={'rounded'}
                                sx={(generators.has(generator.requisites || "")) || generator.requisites == null ? {
                                    transition: "0.3s",
                                    width: "60px",
                                    height: "60px",
                                    '& > *': {
                                        width: "50px",
                                        height: "50px"
                                    },
                                    background: "none",
                                    color: theme.palette.primary.main
                                } : {
                                    transition: "0.3s",
                                    width: "60px",
                                    height: "60px",
                                    background: "none",
                                    color: theme.palette.primary.light
                                }}
                        >
                            {generator.icon}
                        </Avatar>
                    </Tooltip>
                </ListItemAvatar>
                <ListItemText
                    primary={`${generator.name} (${numberConverter(Math.floor(generators.get(generator.name) || 0))})`}
                    secondary={`${numberConverter(generator.cost * Math.pow(1.05, (manualGenerators.get(generator.name) || 0)))} LoC`}
                />
            </ListItem>
            <ListItem
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}
            >
                {generatorUpgrades.map((upgrade: Upgrade) => <UpgradeListItem associatedGenerator={generator.name}
                                                                              key={upgrade.name} {...upgrade} />)}

            </ListItem>
        </>
    )
}

export function GeneratorList() {
    const theme: ExtendedTheme = useTheme()

    return (
        <Section title={'Code Writing Automation'} xs={12}>
            <List sx={{
                width: '100%', height: '80vh', overflow: 'scroll',
                '& > :nth-child(even)': {
                    borderBottom: `1px solid ${theme.palette.outline.main}`,
                    borderTop: `none`,
                },
                '& > :first-child': {
                    borderBottom: `none`,
                    borderTop: `1px solid ${theme.palette.outline.main}`,
                },
            }}>
                {generators.map((generator: Generator) => <GeneratorListItem key={generator.name} {...generator} />)}
            </List>
        </Section>
    )
}