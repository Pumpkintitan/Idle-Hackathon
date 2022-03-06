import { Buyable } from "./buyable";
import { TableRow, TableColumnPlusAfter, TableSearch, FamilyTree } from '@mitch528/mdi-material-ui'
import { AccountPlusOutline, AccountMultiplePlusOutline, AccountStarOutline, AccountGroupOutline} from '@mitch528/mdi-material-ui'
import { AccountSearchOutline, AccountQuestionOutline, CardAccountDetailsOutline, BadgeAccountAlertOutline } from '@mitch528/mdi-material-ui'
import { WeatherNightPartlyCloudy, CloudLockOutline, CloudUploadOutline } from '@mitch528/mdi-material-ui'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { PackageVariantClosed, Server, AirFilter } from '@mitch528/mdi-material-ui'
import DownloadIcon from '@mui/icons-material/Download';
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
        cost: 100000,
        icon: <TableSearch />,
        requisites: "Binary Tree",
        description: "Binary trees are nothing compared to a look up table. O(1)!",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Binary Tree",
        cost: 10000,
        icon: <FamilyTree />,
        requisites: "Linked List",
        description: "You learned a lot in your data structures class.",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Linked List",
        cost: 1000,
        icon: <TableColumnPlusAfter />,
        requisites: "Array",
        description: "Like arrays... but better.",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Array",
        cost: 100,
        icon: <TableRow />,
        requisites: null,
        description: "Improve your script with a new data structure. How were you not using these before?",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Cloud 
    {
        name: "Scale Up",
        cost: 100000000,
        icon: <BubbleChartIcon />,
        requisites: "Upgrade Service",
        description: "Increase your cluster size. More power!",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Upgrade Service",
        cost: 10000000,
        icon: <CloudUploadOutline />,
        requisites: "Secure Connection",
        description: "Increase your payment plan to run on newer and more powerful machines.",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Secure Connection",
        cost: 1000000,
        icon: <CloudLockOutline />,
        requisites: "Increase Runtime",
        description: "Make sure no one can steal your (totaly not copied from StackOverflow) code.",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Increase Runtime",
        cost: 100000,
        icon: <WeatherNightPartlyCloudy />,
        requisites: null,
        description: "Pay to have your script run all day and all night.",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // GPU
    {
        name: "Upgrade Cooling",
        cost: 1000000,
        icon: <AirFilter />,
        requisites: "Combine Units",
        description: "Improve the airflow in your server room to extend the life of those sweet sweet 3090s.",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Combine Units",
        cost: 100000,
        icon: <Server />,
        requisites: "Order New Units",
        description: "Buy a server rack and create a dedicated machine for your program. Also all your friends will be jealous.",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Order New Units",
        cost: 10000,
        icon: <PackageVariantClosed />,
        requisites: "Download More RAM",
        description: "One GPU? Ha! Pump those numbers up!",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Download More RAM",
        cost: 1000,
        icon: <DownloadIcon />,
        requisites: null,
        description: "Visit https://www.downloadmoreram.com to improve the speed of your computer... right?",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Startup
    {
        name: "Hire Contractors",
        cost: 10000000000,
        icon: <AccountGroupOutline />,
        requisites: "Hire Senior Developer",
        description: "Why manage your own developers when somone else can do it for you.",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Hire Senior Developer",
        cost: 1000000000,
        icon: <AccountStarOutline />,
        requisites: "Hire Fulltime Developers",
        description: "Hire for some real talent to make sure those full time devs stay focused... wait a minute.",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Hire Fulltime Developers",
        cost: 100000000,
        icon: <AccountMultiplePlusOutline />,
        requisites: "Hire Intern",
        description: "Hire for some real talent to make sure those interns stay focused.",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Hire Intern",
        cost: 10000000,
        icon: <AccountPlusOutline />,
        requisites: null,
        description: "I'm sure they'll figure it out. I could do this stuff in college... I think.",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Incubator
    {
        name: "Sell Successfull Startup",
        cost: 100000000000000,
        icon: <BadgeAccountAlertOutline />,
        requisites: "Invest in Establised Startup",
        description: "We dealt with them for long enough, time to let them go and cash out.",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Invest in Establised Startup",
        cost: 10000000000000,
        icon: <CardAccountDetailsOutline />,
        requisites: "Invest in Early Startup",
        description: "They were doing well on their own, let capatlize on their success.",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Invest in Early Startup",
        cost: 1000000000000,
        icon: <AccountQuestionOutline />,
        requisites: "Search for Startups",
        description: "Finally, one thats promising. Lets buy them before someone else does first.",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Search for Startups",
        cost: 100000000000,
        icon: <AccountSearchOutline />,
        requisites: null,
        description: "Take you first steps in to finding startups to take over your project.",
        multiplier: 1.25,
        generatorsRequired: 10
    },
    // Quantum
    {
        name: "Perform Expiriment",
        cost: 1000000000000000000,
        icon: <ScienceIcon />,
        requisites: "Collect Data",
        description: "Lets finally put that data to work. And by 'lets' I mean 'let the scientists do it,' they're the ones with PHDs after all.",
        multiplier: 2,
        generatorsRequired: 100
    },
    {
        name: "Collect Data",
        cost: 100000000000000000,
        icon: <BarChartIcon />,
        requisites: "Conduct Research",
        description: "Why do research if you are not going to waste time on cool data visulization. I guess it helps improve our product or something too.",
        multiplier: 1.75,
        generatorsRequired: 50
    },
    {
        name: "Conduct Research",
        cost: 10000000000000000,
        icon: <BiotechIcon />,
        requisites: "Hire Researchers",
        description: "Get the researchers to do some actual work. What were they doing sitting around all day.",
        multiplier: 1.5,
        generatorsRequired: 25
    },
    {
        name: "Hire Researchers",
        cost: 1000000000000000,
        icon: <PsychologyIcon />,
        requisites: null,
        description: "Finally, someone smarter than me.",
        multiplier: 1.25,
        generatorsRequired: 10
    },
]
