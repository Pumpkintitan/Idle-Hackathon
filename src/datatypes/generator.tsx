import { Buyable } from "./buyable";
import { ExpansionCard } from '@mitch528/mdi-material-ui'
import React from "react";

export interface Generator extends Buyable {
    production: number;
    upgrades: string[];
}

export const generators: Generator[] = [
    {
        name: "Script",
        cost: 10,
        icon: <ExpansionCard />,
        requisites: null,
        description: "",
        production: 1,
        upgrades: ["Array", "Linked List", "Binary Tree"]
    },
    {
        name: "GPU Acceleration",
        cost: 100,
        icon: <ExpansionCard />,
        requisites: "Script",
        description: "",
        production: 10,
        upgrades: ["Array", "Linked List", "Binary Tree"]
    },
    {
        name: "Cloud Service",
        cost: 1000,
        icon: <ExpansionCard />,
        requisites: "GPU Acceleration",
        description: "",
        production: 100,
        upgrades: ["Array", "Linked List", "Binary Tree"]
    },
    {
        name: "Startup",
        cost: 10000,
        icon: <ExpansionCard />,
        requisites: "Acceleration",
        description: "",
        production: 1000,
        upgrades: ["Array", "Linked List", "Binary Tree"]
    },
    {
        name: "Startup Incubator",
        cost: 100000,
        icon: <ExpansionCard />,
        requisites: "Startup",
        description: "",
        production: 10000,
        upgrades: ["Array", "Linked List", "Binary Tree"]
    },
    {
        name: "Quantum Technology",
        cost: 100000,
        icon: <ExpansionCard />,
        requisites: "Startup Incubator",
        description: "",
        production: 100000,
        upgrades: ["Array", "Linked List", "Binary Tree"]
    },
];