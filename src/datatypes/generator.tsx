import { Buyable } from "./buyable";
import { FileCodeOutline, ExpansionCard, CloudPrintOutline, GarageVariant, OfficeBuildingOutline, Atom } from '@mitch528/mdi-material-ui'
import React from "react";

export interface Generator extends Buyable {
    production: number;
    upgrades: string[];
}

export const generators: Generator[] = [
    {
        name: "Script",
        cost: 10,
        icon: <FileCodeOutline />,
        requisites: null,
        description: "",
        production: 1,
        upgrades: ["Array", "Linked List", "Binary Tree", "Hash Table"]
    },
    {
        name: "GPU Acceleration",
        cost: 100,
        icon: <ExpansionCard />,
        requisites: "Script",
        description: "",
        production: 10,
        upgrades: ["Download More RAM", "Order New Units", "Combine Units", "Upgrade Cooling"]
    },
    {
        name: "Cloud Service",
        cost: 10000,
        icon: <CloudPrintOutline />,
        requisites: "GPU Acceleration",
        description: "",
        production: 100,
        upgrades: ["Increase Runtime", "Secure Connection", "Upgrade Service", "Scale Up"]
    },
    {
        name: "Startup",
        cost: 1000000,
        icon: <GarageVariant />,
        requisites: "Cloud Service",
        description: "",
        production: 1000,
        upgrades: ["Hire Intern", "Hire Fulltime Developers", "Hire Senior Developer", "Hire Contractors"]
    },
    {
        name: "Startup Incubator",
        cost: 10000000000,
        icon: <OfficeBuildingOutline />,
        requisites: "Startup",
        description: "",
        production: 10000,
        upgrades: ["Search for Startups", "Invest in Early Startup", "Invest in Establised Startup", "Sell Successfull Startup"]
    },
    {
        name: "Quantum Technology",
        cost: 100000000000000,
        icon: <Atom />,
        requisites: "Startup Incubator",
        description: "",
        production: 100000,
        upgrades: ["Hire Researchers", "Conduct Research", "Collect Data", "Perform Expiriment"]
    },
];