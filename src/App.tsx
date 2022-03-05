import React from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HookProvider} from "./hooks/HookProvider";
import {Root} from "./components/layout/Root";
import {GamePage} from "./pages/game/Game";

function App(): JSX.Element {

    return (
        <HookProvider>
            <BrowserRouter>
                <Root>
                    <Routes/>
                </Root>
            </BrowserRouter>
        </HookProvider>
    );
}

function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path={'/'}>
                <GamePage/>
            </Route>
        </Switch>
    )
}

export default App;
