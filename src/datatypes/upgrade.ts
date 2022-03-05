import { Buyable } from "./buyable";

export interface Upgrade extends Buyable {
    multiplier: number;
    appliesTo: string;
}

export const upgrades: Upgrade[] = [
    {
        name: "Array",
        cost: 100,
        icon: "../assets/placeholder.png",
        requisites: null,
        description: "",
        multiplier: 1.5,
        appliesTo: "Script"
    },
    {
        name: "Linked List",
        cost: 1000,
        icon: "../assets/placeholder.png",
        requisites: null,
        description: "",
        multiplier: 1.5,
        appliesTo: "Script"
    },
]