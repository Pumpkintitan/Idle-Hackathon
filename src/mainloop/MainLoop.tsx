import React, { useState, useEffect } from 'react';
import { useLinesOfCode } from '../hooks/stats/LinesOfCode';
import { useUpgrades } from '../hooks/upgrades/Upgrades';
import { useGenerators } from '../hooks/upgrades/Generators';
import { generators } from '../datatypes/generator'
import { upgrades } from '../datatypes/upgrade'
import { useLinesPerSec } from '../hooks/upgrades/LinesPerSec'

export function MainLoop() {
    const [time, setTime] = useState(Date.now());
    const [, setCurrency] = useLinesOfCode();
    const [, setLPS] = useLinesPerSec();
    const [upgradesf,] = useUpgrades();
    const [generatorsf, setGenerators] = useGenerators();


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
            let frame = 0
            let multiplier = 1
            if (upgradesf.length != 0) {
                upgradesf.forEach((key: string) => {
                    multiplier *= upgrades.filter(upgrade => upgrade.name == key)[0].multiplier || 1
                });
            }
            if (generatorsf.size != 0) {
                if (generatorsf.get("Quantum Technology") != undefined) {
                    setGenerators((generator) => {
                        generator.set("Startup Incubator", (generator.get("Startup Incubator") || 0) + multiplier * (generatorsf.get("Quantum Technology") || 1)/30);
                        return generator;
                    })
                }

                if (generatorsf.get("Startup Incubator") != undefined) {
                    setGenerators((generator) => {
                        generator.set("Startup", (generator.get("Startup") || 0) + multiplier * (generatorsf.get("Startup Incubator") || 1)/30);
                        return generator;
                    })
                }

                if (generatorsf.get("Startup") != undefined) {
                    setGenerators((generator) => {
                        generator.set("Cloud Service", (generator.get("Cloud Service") || 0) + multiplier * (generatorsf.get("Startup") || 1)/30);
                        return generator;
                    })
                }

                if (generatorsf.get("Cloud Service") != undefined) {
                    setGenerators((generator) => {
                        generator.set("GPU Acceleration", (generator.get("GPU Acceleration") || 0) + multiplier * (generatorsf.get("Cloud Service") || 1)/30);
                        return generator;
                    })
                }
                if (generatorsf.get("GPU Acceleration") != undefined) {
                    setGenerators((generator) => {
                        generator.set("Script", (generator.get("Script") || 0) + multiplier * (generatorsf.get("GPU Acceleration") || 1)/30);
                        return generator;
                    })
                }
                let prod = generators.filter(generate => generate.name == "Script")[0].production * (generatorsf.get("Script") || 0) * multiplier
                setCurrency((currency) => (currency + (prod / 30)))
                setLPS(prod)
            }
        }, (1000 / 30));
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div />
    )
}

