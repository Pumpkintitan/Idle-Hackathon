import { Buyable } from "./buyable"

export interface Generator extends Buyable {
    unlocks: Buyable[];
    production: number;
}