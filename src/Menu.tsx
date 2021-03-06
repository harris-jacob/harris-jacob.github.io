import React from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import './Menu.scss';
import { StyledTab, StyledTabs } from './Tabs';

export interface MenuProps {
    change: (key: number) => void;
    state: boolean;
    index: number;
}

export const Menu = (props: MenuProps): JSX.Element => {
    const { change, state, index } = props;
    const textTransitions = useTransition(state, null, {
        from: {
            opacity: 0,
            transform: 'translate3d(0,-40px,0)',
            position: 'absolute'
        },
        enter: { opacity: 1, transform: 'translate3d(0, 12px,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,0px,0)' }
    });

    const updateHandler = (
        e: React.ChangeEvent<{}>,
        newValue: number
    ): void => {
        change(newValue);
    };

    const menuProps = useSpring({
        transform: state ? 'translate3d(0, 0px, 0)' : 'translate3d(0, -20px, 0)'
    });

    return (
        <div className="menu">
            <span className="title">Jacob Harris</span>
            {textTransitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <span className="email">
                                jacob.harris443@gmail.com |{' '}
                                <a href="https://godotengine.org/">resume</a>{' '}
                            </span>
                        </animated.div>
                    )
            )}
            <animated.div style={menuProps}>
                <StyledTabs value={index} onChange={updateHandler}>
                    {['home', 'about', 'socials'].map((v, i) => (
                        <StyledTab key={i} label={v} />
                    ))}
                </StyledTabs>
            </animated.div>
        </div>
    );
};
