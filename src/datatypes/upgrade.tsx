import { Buyable } from "./buyable";
import { ExpansionCard } from '@mitch528/mdi-material-ui'
import React from "react";

export interface Upgrade extends Buyable {
    multiplier: number;
}

export const upgrades: Upgrade[] = [
    {
        name: "Array",
        cost: 100,
        icon: <ExpansionCard />,
        requisites: null,
        description: "",
        multiplier: 1.5
    },
    {
        name: "Linked List",
        cost: 1000,
        icon: <ExpansionCard />,
        requisites: null,
        description: "",
        multiplier: 1.5
    },
    {
        name: "Binary Tree",
        cost: 10000,
        icon: <ExpansionCard />,
        requisites: null,
        description: "",
        multiplier: 1.5
    },
]