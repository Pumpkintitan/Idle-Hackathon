import React from "react";

export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
        iconPosition: "start" as 'top' | 'bottom' | 'start' | 'end',
        sx: {
            minHeight: 48,
        }
    };
}

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const {value, index, children} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{width: '100%'}}
        >
            {value === index && children}
        </div>
    );
}