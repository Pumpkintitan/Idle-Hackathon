export interface Buyable {
    name: string;
    cost: number;
    icon: string;
    requisites: string | null;
    description: string;
}

export interface Generator extends Buyable {
    production: number;
}

export interface Upgrade extends Buyable {
    multiplier: number;
    appliesTo: Generator;
}

export const generators: Generator[] = [
    {
        name: "Script",
        cost: 100,
        icon: "../assets/placeholder.png",
        requisites: null,
        production: 1,
        description: ""
    },
    {
        name: "GPU Acceleration",
        cost: 1000,
        icon: "../assets/placeholder.png",
        requisites: "Script",
        production: 10,
        description: ""
    },
    {
        name: "Cloud Service",
        cost: 10000,
        icon: "../assets/placeholder.png",
        requisites: "GPU Acceleration",
        production: 100,
        description: ""
    },
    {
        name: "Startup",
        cost: 100000,
        icon: "../assets/placeholder.png",
        requisites: "Acceleration",
        production: 1000,
        description: ""
    },
    {
        name: "Startup Incubator",
        cost: 1000000,
        icon: "../assets/placeholder.png",
        requisites: "Startup",
        production: 10000,
        description: ""
    },
    {
        name: "Quantum Technology",
        cost: 1000000,
        icon: "../assets/placeholder.png",
        requisites: "Startup Incubator",
        production: 100000,
        description: ""},
];