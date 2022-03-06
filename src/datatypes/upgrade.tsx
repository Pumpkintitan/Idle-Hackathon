import { Buyable } from "./buyable";
import { TableRow, TableColumnPlusAfter, TableSearch, FamilyTree, AccountStar } from '@mitch528/mdi-material-ui'
import { AccountPlusOutline, AccountMultiplePlusOutline, AccountStarOutline, AccountGroupOutline} from '@mitch528/mdi-material-ui'
import { AccountSearchOutline, AccountQuestionOutline, CardAccountDetailsOutline, BadgeAccountAlertOutline } from '@mitch528/mdi-material-ui'
import { WeatherNightPartlyCloudy, CloudLockOutline, CloudUploadOutline } from '@mitch528/mdi-material-ui'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { WrenchOutline, PackageVariantClosed, Server, AirFilter } from '@mitch528/mdi-material-ui'
import PsychologyIcon from '@mui/icons-material/Psychology';
import BiotechIcon from '@mui/icons-material/Biotech';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScienceIcon from '@mui/icons-material/Science';
import React from "react";

export interface Upgrade extends Buyable {
    multiplier: number;
    generatorsRequired: number;
}

export const upgrades: Upgrade[] = [
    // Script
    {
        name: "Hash Table",
        cost: 10000,
        icon: <TableSearch />,
        requisites: "Binary Tree",
        description: "",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Binary Tree",
        cost: 10000,
        icon: <FamilyTree />,
        requisites: "Linked List",
        description: "",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Linked List",
        cost: 1000,
        icon: <TableColumnPlusAfter />,
        requisites: "Array",
        description: "",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Array",
        cost: 100,
        icon: <TableRow />,
        requisites: null,
        description: "Super cool epic multiline description",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Cloud 
    {
        name: "Scale Up",
        cost: 100,
        icon: <BubbleChartIcon />,
        requisites: "Upgrade Service",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Upgrade Service",
        cost: 100,
        icon: <CloudUploadOutline />,
        requisites: "Secure Connection",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Secure Connection",
        cost: 100,
        icon: <CloudLockOutline />,
        requisites: "Increase Runtime",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Increase Runtime",
        cost: 100,
        icon: <WeatherNightPartlyCloudy />,
        requisites: null,
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // GPU
    {
        name: "Upgrade Cooling",
        cost: 100,
        icon: <AirFilter />,
        requisites: "Combine Units",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Combine Units",
        cost: 100,
        icon: <Server />,
        requisites: "Order New Units",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Order New Units",
        cost: 100,
        icon: <PackageVariantClosed />,
        requisites: "Download More RAM",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Download More RAM",
        cost: 100,
        icon: <WrenchOutline />,
        requisites: null,
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Startup
    {
        name: "Hire Contractors",
        cost: 100,
        icon: <AccountGroupOutline />,
        requisites: "Hire Senior Developer",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Hire Senior Developer",
        cost: 100,
        icon: <AccountStarOutline />,
        requisites: "Hire Fulltime Developers",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Hire Fulltime Developers",
        cost: 100,
        icon: <AccountMultiplePlusOutline />,
        requisites: "Hire Intern",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Hire Intern",
        cost: 100,
        icon: <AccountPlusOutline />,
        requisites: null,
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Incubator
    {
        name: "Sell Successfull Startup",
        cost: 100,
        icon: <BadgeAccountAlertOutline />,
        requisites: "Invest in Establised Startup",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Invest in Establised Startup",
        cost: 100,
        icon: <CardAccountDetailsOutline />,
        requisites: "Invest in Early Startup",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Invest in Early Startup",
        cost: 100,
        icon: <AccountQuestionOutline />,
        requisites: "Search for Startups",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Search for Startups",
        cost: 100,
        icon: <AccountSearchOutline />,
        requisites: null,
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Quantum
    {
        name: "Perform Expiriment",
        cost: 100,
        icon: <ScienceIcon />,
        requisites: "Collect Data",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Collect Data",
        cost: 100,
        icon: <BarChartIcon />,
        requisites: "Conduct Research",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Conduct Research",
        cost: 100,
        icon: <BiotechIcon />,
        requisites: "Hire Researchers",
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    {
        name: "Hire Researchers",
        cost: 100,
        icon: <PsychologyIcon />,
        requisites: null,
        description: "",
        multiplier: 1.25,
        generatorsRequired: 10
    },
]
