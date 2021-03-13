import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Menu } from './Menu';
import { useSpring, animated, useTransition } from 'react-spring';
import { About } from './About';
import { Socials } from './Socials';

const Content = () => {
    const [page, setPage] = React.useState<number>(0);
    const changePageHandler = (key: number) => {
        window.scrollTo(0, 0);
        setPage(key);
    };

    const getPosition = () => {
        switch (page) {
            case 1:
                return '0';
            case 2:
                return '30vh';
            default:
                return '50vh';
        }
    };

    // Menu motion
    const menuProps = useSpring({
        position: 'relative',
        top: getPosition(),
        transform: page === 0 ? 'translate(0%, -50%)' : 'translate(0%, 0%) '
    });

    // Page transitions
    const transitions = useTransition(page === 1, null, {
        from: {
            opacity: 0,
            transform: 'translate(0px, 500px)',
            position: 'relative',
            width: '100%'
        },
        enter: {
            opacity: 1,
            position: 'relative',
            transform: 'translate(0px, 0px)'
        },
        leave: { opacity: 0, transform: 'translate(0px, 500px)' }
    });

    return (
        <div className="content">
            <animated.div style={menuProps}>
                <Menu index={page} change={changePageHandler} />{' '}
            </animated.div>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <About change={changePageHandler} />
                        </animated.div>
                    )
            )}
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Content />
    </React.StrictMode>,
    document.getElementById('root')
);
