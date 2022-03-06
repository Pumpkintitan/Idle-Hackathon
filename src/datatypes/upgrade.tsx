import { Buyable } from "./buyable";
import { TableRow, TableColumnPlusAfter, TableSearch, FamilyTree } from '@mitch528/mdi-material-ui'
import React from "react";

export interface Upgrade extends Buyable {
    multiplier: number;
}

export const upgrades: Upgrade[] = [
    {
        name: "Hash Table",
        cost: 10000,
        icon: <TableSearch />,
        requisites: null,
        description: "",
        multiplier: 1.5
    },
    {
        name: "Binary Tree",
        cost: 10000,
        icon: <FamilyTree />,
        requisites: null,
        description: "",
        multiplier: 1.5
    },
    {
        name: "Linked List",
        cost: 1000,
        icon: <TableColumnPlusAfter />,
        requisites: null,
        description: "",
        multiplier: 1.5
    },
    {
        name: "Array",
        cost: 100,
        icon: <TableRow />,
        requisites: null,
        description: "",
        multiplier: 1.5
    }
]