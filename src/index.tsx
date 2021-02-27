import React from 'react';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import './index.css';

const Content = () => (
    <Parallax pages={1}>
        <ParallaxLayer offset={0} speed={1}>
            <div className="bg-one">
                <span className="">Jacob Harris</span>
            </div>
        </ParallaxLayer>
    </Parallax>
);

ReactDOM.render(
    <React.StrictMode>
        <Content />
    </React.StrictMode>,
    document.getElementById('root')
);
