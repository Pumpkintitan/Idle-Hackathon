export interface Generator {
    name: number;
    cost: number;
    icon: string;
    unlocks: Generator[]
    production: number;
}