export interface Buyable {
    name: string;
    cost: number;
    icon: string;
    requisites: string | null;
    description: string;
}