import React from 'react';
import './About.scss';
import me from './resources/me.jpg';

export const About = (): JSX.Element => {
    return (
        <div className="about">
            <div className="top">
                <div className="image">
                    <img alt="Jacob Harris" src={me} />
                </div>
                <div className="text">
                    <span className="title-text">
                        Hi I’m Jacob, a software developer and engineer from
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
        </div>
    );
};
