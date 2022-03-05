import { Buyable } from "./buyable";

export interface Upgrade extends Buyable {
    multiplier: number;
}