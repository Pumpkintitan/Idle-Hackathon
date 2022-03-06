import React, { useState, useEffect } from 'react';
import { useLinesOfCode } from '../hooks/stats/LinesOfCode';
import { useUpgrades } from '../hooks/upgrades/Upgrades';
import { useGenerators } from '../hooks/upgrades/Generators';
import { generators } from '../datatypes/generator';
import { upgrades } from '../datatypes/upgrade';

export function MainLoop() {
    const [, setCurrency] = useLinesOfCode();
    const [upgradesf,] = useUpgrades();
    const [generatorsf, setGenerators] = useGenerators();

    useEffect(() => {
        const interval = setInterval(() => {
            let multiplier = 1
            upgradesf.forEach((key: string) => {
                multiplier *= upgrades.filter(upgrade => upgrade.name == key)[0].multiplier
            });
            generatorsf.forEach((value: number, key: string) => {
                setCurrency((currency) => (currency + ((generators.filter(generate => generate.name == key)[0].production) * value * multiplier)))
            });
        }, (1000/30));
        return () => {
            clearInterval(interval);
        };
    }, []);
}

