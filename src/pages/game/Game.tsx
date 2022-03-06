import React from "react"
import {ContainerGrid} from "../../components/layout/ContainerGrid";
import {GeneratorList} from "../../views/upgrades/Upgrades";
import {Story} from "../../views/story/Story";
import {Stats} from "../../views/stats/Stats";
import {Grid} from "@mui/material";
import {Minigames} from "../../views/minigames/Minigames";
import {MainLoop} from "../../mainloop/MainLoop";

export function GamePage() {
    return (
        <ContainerGrid maxWidth={'xl'}>
            <MainLoop/>
            <Grid container justifyContent={'center'} spacing={2} height={'90vh'} sx={{paddingLeft: 4}}>
                <Grid item container spacing={2} md={8} xs={12}>
                    <Grid item md={4} container spacing={1} xs={12}>
                        <Minigames/>
                        <Story/>
                    </Grid>
                    <Grid item md={8} container spacing={2} xs={12}>
                        <Stats/>
                        {/*<Typing/>*/}
                    </Grid>
                </Grid>
                <Grid item md={4} container spacing={2} xs={12}>
                    <GeneratorList/>
                </Grid>
                {/*<Grid item xs={4} container spacing={2}>*/}
                {/*    <Tutorial/>*/}
                {/*</Grid>*/}

            </Grid>
        </ContainerGrid>
    )
}