import { Buyable } from "./buyable";

export interface Generator extends Buyable {
    production: number;
}

export const generators: Generator[] = [
    {
        name: "Script",
        cost: 100,
        icon: "../assets/placeholder.png",
        requisites: null,
        description: "",
        production: 1
    },
    {
        name: "GPU Acceleration",
        cost: 1000,
        icon: "../assets/placeholder.png",
        requisites: "Script",
        description: "",
        production: 10
    },
    {
        name: "Cloud Service",
        cost: 10000,
        icon: "../assets/placeholder.png",
        requisites: "GPU Acceleration",
        description: "",
        production: 100
    },
    {
        name: "Startup",
        cost: 100000,
        icon: "../assets/placeholder.png",
        requisites: "Acceleration",
        description: "",
        production: 1000
    },
    {
        name: "Startup Incubator",
        cost: 1000000,
        icon: "../assets/placeholder.png",
        requisites: "Startup",
        description: "",
        production: 10000
    },
    {
        name: "Quantum Technology",
        cost: 1000000,
        icon: "../assets/placeholder.png",
        requisites: "Startup Incubator",
        description: "",
        production: 100000
    },
];