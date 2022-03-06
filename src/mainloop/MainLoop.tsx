import React, { useState, useEffect } from 'react';
import { useLinesOfCode } from '../hooks/stats/LinesOfCode';
import { useUpgrades } from '../hooks/upgrades/Upgrades';
import { useGenerators } from '../hooks/upgrades/Generators';
import { generators } from '../datatypes/generator'
import { upgrades } from '../datatypes/upgrade'

export function MainLoop() {
    const [time, setTime] = useState(Date.now());
    const [, setCurrency] = useLinesOfCode();
    const [upgradesf,] = useUpgrades();
    const [generatorsf, setGenerators] = useGenerators();


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
            let multiplier = 1
            if (upgradesf.length != 0) {
                upgradesf.forEach((key: string) => {
                    multiplier *= upgrades.filter(upgrade => upgrade.name == key)[0].multiplier || 1
                });
            }
            if (generatorsf.size != 0) {
                generatorsf.forEach((value: number, key: string) => {
                    setCurrency((currency) => (currency + ((generators.filter(generate => generate.name == key)[0].production) * value * multiplier)))
                });
            }
        }, (1000/30));
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div/>
    )
}

