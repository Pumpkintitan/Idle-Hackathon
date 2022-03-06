import React, { useState, useEffect } from 'react';
import { useLinesOfCode } from '../hooks/stats/LinesOfCode';
import { useUpgrades } from '../hooks/upgrades/Upgrades';
import { useGenerators } from '../hooks/upgrades/Generators';
import { generators } from '../datatypes/generator'
import { upgrades } from '../datatypes/upgrade'
import { useLinesPerSec } from '../hooks/upgrades/LinesPerSec'

export function MainLoop() {
    const [, setTime] = useState(Date.now());
    const [, setCurrency] = useLinesOfCode();
    const [, setLPS] = useLinesPerSec();
    const [upgradesf,] = useUpgrades();
    const [gencounts, setGenerators] = useGenerators();


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
            if (gencounts.size != 0) {
                if (gencounts.get("Quantum Technology") != undefined) {
                    let b = upgradesf.get("Quantum Technology")
                    let multiplier = 1
                    if (b != undefined) {
                        for (let i = 0; i < b.length; i++) {
                            let r = b[i] || ""
                            multiplier *= upgrades.filter(upgrade => upgrade.name == r)[0].multiplier
                        }
                    }
                    setGenerators((generator) => {
                        generator.set("Startup Incubator", (generator.get("Startup Incubator") || 0) + multiplier * (gencounts.get("Quantum Technology") || 1) / 30);
                        return generator;
                    })
                }

                if (gencounts.get("Startup Incubator") != undefined) {
                    let b = upgradesf.get("Startup Incubator")
                    let multiplier = 1
                    if (b != undefined) {
                        for (let i = 0; i < b.length; i++) {
                            let r = b[i] || ""
                            multiplier *= upgrades.filter(upgrade => upgrade.name == r)[0].multiplier
                        }
                    }
                    setGenerators((generator) => {
                        generator.set("Startup", (generator.get("Startup") || 0) + multiplier * (gencounts.get("Startup Incubator") || 1) / 30);
                        return generator;
                    })
                }

                if (gencounts.get("Startup") != undefined) {
                    let b = upgradesf.get("Startup")
                    let multiplier = 1
                    if (b != undefined) {
                        for (let i = 0; i < b.length; i++) {
                            let r = b[i] || ""
                            multiplier *= upgrades.filter(upgrade => upgrade.name == r)[0].multiplier
                        }
                    }
                    setGenerators((generator) => {
                        generator.set("Cloud Service", (generator.get("Cloud Service") || 0) + multiplier * (gencounts.get("Startup") || 1) / 30);
                        return generator;
                    })
                }

                if (gencounts.get("Cloud Service") != undefined) {
                    let b = upgradesf.get("Cloud Service")
                    let multiplier = 1
                    if (b != undefined) {
                        for (let i = 0; i < b.length; i++) {
                            let r = b[i] || ""
                            multiplier *= upgrades.filter(upgrade => upgrade.name == r)[0].multiplier
                        }
                    }
                    setGenerators((generator) => {
                        generator.set("GPU Acceleration", (generator.get("GPU Acceleration") || 0) + multiplier * (gencounts.get("Cloud Service") || 1) / 30);
                        return generator;
                    })
                }
                if (gencounts.get("GPU Acceleration") != undefined) {
                    let b = upgradesf.get("GPU Acceleration")
                    let multiplier = 1
                    if (b != undefined) {
                        for (let i = 0; i < b.length; i++) {
                            let r = b[i] || ""
                            multiplier *= upgrades.filter(upgrade => upgrade.name == r)[0].multiplier
                        }
                    }
                    setGenerators((generator) => {
                        generator.set("Script", (generator.get("Script") || 0) + multiplier * (gencounts.get("GPU Acceleration") || 1) / 30);
                        return generator;
                    })
                }

                let b = upgradesf.get("Script")
                    let multiplier = 1
                    if (b != undefined) {
                        for (let i = 0; i < b.length; i++) {
                            let r = b[i] || ""
                            multiplier *= upgrades.filter(upgrade => upgrade.name == r)[0].multiplier
                        }
                    }
                let prod = generators.filter(generate => generate.name == "Script")[0].production * (gencounts.get("Script") || 0) * multiplier
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

