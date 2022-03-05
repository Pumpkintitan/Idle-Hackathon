export interface Buyable {
    name: number;
    cost: number;
    icon: string;
    requires: Buyable;
    production: number;
    multiplier: number;
}