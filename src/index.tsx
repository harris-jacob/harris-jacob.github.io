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
                return '7%';
            case 2:
                return '35%';
            default:
                return '50%';
        }
    };

    // Menu motion
    const menuProps = useSpring({
        position: 'absolute',
        top: getPosition(),
        left: '50%',
        transform: 'translate(-50%, -50%)'
    });

    // Page transitions
    const transitions = useTransition(page === 1, null, {
        from: { opacity: 0, transform: 'translate(0px, 50rem)' },
        enter: { opacity: 1, transform: 'translate(0px, 10%)' },
        leave: { opacity: 0, transform: 'translate(0px, 50rem)' }
    });

    return (
        <div className="content">
            <animated.div style={menuProps}>
                <Menu
                    index={page}
                    state={page === 0}
                    change={changePageHandler}
                />{' '}
            </animated.div>

            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <About change={changePageHandler} />
                        </animated.div>
                    )
            )}
            {page === 2 && <Socials />}
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Content />
    </React.StrictMode>,
    document.getElementById('root')
);
