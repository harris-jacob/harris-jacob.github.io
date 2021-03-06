import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Menu } from './Menu';
import { useSpring, animated, useTransition } from 'react-spring';
import { About } from './About';

const Content = () => {
    const [page, setPage] = React.useState<number>(0);
    const changePageHandler = (key: number) => setPage(key);

    // menu motion
    const menuProps = useSpring({
        position: 'absolute',
        top: page === 1 ? '7%' : '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    });

    // page transitions
    const transitions = useTransition(page === 1, null, {
        from: { opacity: 0, transform: 'translate(0px, 50rem)' },
        enter: { opacity: 1, transform: 'translate(0px, 7%)' },
        leave: { opacity: 0, transform: 'translate(0px, 50rem)' }
    });

    return (
        <div className="content">
            <animated.div style={menuProps}>
                <Menu
                    index={page}
                    state={page === 0}
                    change={changePageHandler}
                />
            </animated.div>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <About />
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
