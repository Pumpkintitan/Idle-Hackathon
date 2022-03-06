import { SvgIconTypeMap } from "@mui/material";
// import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface Buyable {
    name: string;
    cost: number;
    icon: React.ReactElement;
    requisites: string | null;
    description: string;
}