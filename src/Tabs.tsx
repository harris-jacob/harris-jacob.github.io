import { Tab, TabProps, Tabs, withStyles } from '@material-ui/core';
import React from 'react';

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

export const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingTop: 0,
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#b06873'
        }
    }
})((props: StyledTabsProps) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="here" /> }}
    />
));

export const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: 'inherit',
        '&:focus': {
            opacity: 1
        },
        minWidth: 'auto'
    }
}))((props: TabProps) => <Tab disableRipple {...props} />);
