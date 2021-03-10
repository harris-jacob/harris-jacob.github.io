import React, { useRef } from 'react';
import {
    animated,
    ReactSpringHook,
    useChain,
    useTransition
} from 'react-spring';
import './About.scss';
import me from './resources/me.jpg';
export const About = ({
    change
}: {
    change: (key: number) => void;
}): JSX.Element => {
    // page transitions
    const midRef = useRef<ReactSpringHook>(null);
    const midTransition = useTransition(true, null, {
        ref: midRef,
        from: {
            opacity: 0,
            transform: 'translate(0px, 500px)',
            overflowX: 'hidden'
        },
        enter: {
            opacity: 1,
            transform: 'translate(0px, 0px)'
        }
    });

    const picRef = useRef<ReactSpringHook>(null);
    const picTransition = useTransition(true, null, {
        ref: picRef,
        from: {
            opacity: 0,
            transform: 'perspective(600px) rotateY(-90deg)'
        },
        enter: {
            opacity: 1,
            transform: 'perspective(600px) rotateY(0deg)'
        }
    });

    const bottomRef = useRef<ReactSpringHook>(null);
    const bottomTransition = useTransition(true, null, {
        ref: bottomRef,
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        }
    });

    useChain([picRef, midRef, bottomRef], [0, 0.5, 0.5]);

    return (
        <div className="about">
            <div className="top">
                {picTransition.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div
                                className="pic-anim"
                                key={key}
                                style={props}
                            >
                                <div className="image">
                                    <img alt="Jacob Harris" src={me} />
                                </div>
                            </animated.div>
                        )
                )}
                <div className="text">
                    <span className="title-text">
                        Hello I’m Jacob, a software developer and engineer from
                        Wales, United Kingdom. Currently at{' '}
                        <a href="https://www.autodesk.com/">Autodesk</a>.
                    </span>
                    <span className="body-text">
                        <p>
                            A mechanical engineer by training, but converted to
                            the cult of software. That being said, I still like
                            solving problems in the mechanical domain.{' '}
                        </p>

                        <p>
                            I find myself designing web apps a lot, and I enjoy
                            thinking about user experience. But, I don’t like
                            being confined to the frontend; I like working in a
                            variety of languages and tinkering with many pieces
                            of the architectural puzzle.
                        </p>
                        <p>
                            At Autodesk, I work in the Birmingham Technology
                            Center, developing research prototypes for
                            Autodesk’s make platform.
                        </p>
                    </span>
                </div>
            </div>

            {midTransition.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <div className="middle">
                                <div className="text">
                                    <p className="title-text">
                                        Research & Project Interests
                                    </p>
                                    <p className="body-text">
                                        At Autodesk, most of my projects relate
                                        to the democratization of manufacturing.
                                        This could be building experience based
                                        recommender systems to suggest process
                                        parameters to users, or using data from
                                        our{' '}
                                        <a href="https://en.wikipedia.org/wiki/Numerical_control">
                                            NC machines
                                        </a>{' '}
                                        in Birmingham to build better models of
                                        manufacturing processes.
                                    </p>
                                    <p className="body-text">
                                        Outside of work, I am working on a{' '}
                                        <a href="http://spatial.link">
                                            simulation platform
                                        </a>
                                        . We are interested in combining modern,
                                        continuum based simulation techniques
                                        with resilient, scalable cloud compute.
                                        I also have a soft spot for
                                        Reinforcement Learning.
                                    </p>
                                </div>
                            </div>
                        </animated.div>
                    )
            )}
            {bottomTransition.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <div className="bottom">
                                <div className="text">
                                    <h1 className="title-text">
                                        Looking for collaborators?
                                    </h1>
                                    <p className="body-text">
                                        If you have a cool project and need some
                                        help.{' '}
                                        <button onClick={() => change(2)}>
                                            Get in touch
                                        </button>{' '}
                                        and I may be of assistance 😃
                                    </p>
                                </div>
                            </div>
                        </animated.div>
                    )
            )}
        </div>
    );
};
