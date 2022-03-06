import {Section} from "../../components/paper/Section";
import React from 'react';
import {useGenerators} from "../../hooks/upgrades/Generators";
import {
    Avatar,
    ButtonGroup,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Tooltip,
    useTheme
} from "@mui/material";
import {Upgrade, upgrades} from "../../datatypes/upgrade";
import {Generator, generators} from "../../datatypes/generator";
import {useLinesOfCode} from "../../hooks/stats/LinesOfCode";
import {BuyButton} from "../../components/button/BuyButton";
import {ExtendedTheme} from "../../hooks/styles/Theme";
import {useUpgrades} from "../../hooks/upgrades/Upgrades";

function UpgradeListItem(props: Upgrade) {

    const upgrade = props;
    const theme = useTheme();
    return (
        <Tooltip title={upgrade.name}>
            <IconButton>
                <Avatar variant={'rounded'}
                        sx={{
                            '& > *': {
                                width: "15px"
                            },
                            background: "none",
                            color: theme.palette.primary.light,
                            '&.Mui-disabled': {
                                color: theme.palette.primary.main
                            }
                        }}
                >
                    {upgrade.icon}
                </Avatar>
            </IconButton>
        </Tooltip>
    )
}

function GeneratorListItem(props: Generator) {
    const theme = useTheme();

    const [generators, setGenerators] = useGenerators();
    const [upgradesAvailable, setUpgrades] = useUpgrades();
    const [currency, setCurrency] = useLinesOfCode();

    const buyGenerator = (name: string, value: number, cost: number) => {
        setGenerators((generator) => {
            generator.set(name, (generator.get(name) || 0) + value)
            setCurrency((oldValue) => oldValue - cost * value);
            return generator
        })
    }

    const generator = props;
    const generatorUpgrades = upgrades.filter((upgrade: Upgrade) => generator.upgrades.includes(upgrade.name));

    return (
        <>
            <ListItem
                sx={{width: '100%'}}
                secondaryAction={
                    <ButtonGroup variant="outlined">
                        <BuyButton onClick={() => buyGenerator(generator.name, 1, generator.cost)}
                                   disabled={generator.cost > currency}>
                            +1
                        </BuyButton>
                        <BuyButton onClick={() => buyGenerator(generator.name, 10, generator.cost)}
                                   disabled={generator.cost * 10 > currency}>
                            +10
                        </BuyButton>
                    </ButtonGroup>
                }
            >
                <ListItemAvatar>
                    <Avatar variant={'rounded'}
                            sx={{
                                width: "50px",
                                height: "50px",
                                '& > *': {
                                    width: "45px",
                                    height: "45px"
                                },
                                background: "none",
                                color: theme.palette.primary.light,
                                '&.Mui-disabled': {
                                    color: theme.palette.primary.main
                                }
                            }}
                    >
                        {generator.icon}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${generator.name} (${Math.floor(generators.get(generator.name) || 0)})`}
                    secondary={`${generator.cost.toLocaleString('en-us')} LOC`}
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
    const theme: ExtendedTheme = useTheme()

    return (
        <Section title={'Geneartors'} xs={12}>
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