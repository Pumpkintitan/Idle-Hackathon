import React from "react"
import {ContainerGrid} from "../../components/layout/ContainerGrid";
import {GeneratorList} from "../../views/upgrades/Upgrades";
import {Story} from "../../views/story/Story";
import {Stats} from "../../views/stats/Stats";
import {Typing} from "../../views/typing/Typing";
import {Grid} from "@mui/material";
import {Minigames} from "../../views/minigames/Minigames";
import { MainLoop } from "../../mainloop/MainLoop";

export function GamePage() {
    return (
        <ContainerGrid sidebarOpen={true} maxWidth={'xl'}>
            {/*<HeaderTitle>*/}
            {/*    Epic Game*/}
            {/*</HeaderTitle>*/}
            <MainLoop/>
            <Grid container justifyContent={'center'} spacing={2} height={'90vh'} sx={{paddingLeft: 4}}>
                <Grid item container spacing={2} xs={8}>
                    <Grid item xs={4} container spacing={2}>
                        <Story/>
                    </Grid>
                    <Grid item xs={8} container spacing={2}>
                        <Stats/>
                        <Typing/>
                    </Grid>
                    <Grid item xs={12} container spacing={2}>
                        <Minigames/>
                    </Grid>
                </Grid>
                <Grid item xs={4} container spacing={2}>
                    <GeneratorList/>
                </Grid>
                {/*<Grid item xs={4} container spacing={2}>*/}
                {/*    <Tutorial/>*/}
                {/*</Grid>*/}

            </Grid>
        </ContainerGrid>
    )
}