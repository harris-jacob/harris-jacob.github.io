import {
    GithubWithCircle,
    LinkedinWithCircle,
    MailWithCircle,
    TwitterWithCircle
} from '@styled-icons/entypo-social';
import { animated, useTransition, useSpring, SpringConfig } from 'react-spring';
import './Socials.scss';

export const Socials = (): JSX.Element => {
    const logos = [
        {
            key: 'twitter',
            component: <TwitterWithCircle />,
            href: 'https://twitter.com/jacobsamharris'
        },
        {
            key: 'linkedin',
            component: <LinkedinWithCircle />,
            href: 'https://www.linkedin.com/in/jacob-harris-42bb8a190'
        },
        {
            key: 'github',
            component: <GithubWithCircle />,
            href: 'https://github.com/harris-jacob'
        },
        {
            key: 'mail',
            component: <MailWithCircle />,
            href: 'mailto:jacob.harris443@gmail.com'
        }
    ];

    const transitions = useTransition(logos, (item) => item.key, {
        unique: true,
        trail: 100,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    });

    return (
        <div className="socials">
            {transitions.map(({ item, key, props }, i) => {
                console.log(item);
                return (
                    <animated.div key={key} style={props}>
                        <SpringyLogo
                            href={item.href}
                            i={i}
                            child={item.component}
                        />
                    </animated.div>
                );
            })}
        </div>
    );
};

export const SpringyLogo = ({
    child,
    i,
    href
}: {
    child: JSX.Element;
    i: number;
    href: string;
}): JSX.Element => {
    const makeCalc = (i: number) => (x: number, y: number) => {
        return [
            0,
            (x - window.innerWidth / 2 + (50 + 100 * (1 - i))) * 0.4,
            1.1
        ];
    };
    const trans = (x: number, y: number, s: number) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [springProps, set] = useSpring<{
        xys: number[];
        config: SpringConfig;
    }>(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: makeCalc(i)(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                // @ts-ignore
                transform: springProps.xys.interpolate(trans)
            }}
        >
            <a href={href}>{child}</a>
        </animated.div>
    );
};
