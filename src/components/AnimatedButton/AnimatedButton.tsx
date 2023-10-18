import { animated } from "@react-spring/web";

type Props = {
    style: {};
    trigger: {};
    classText: string;
    text: string;
};

const AnimatedButton = ({ style, trigger, classText, text }: Props) => {
    return (
        <animated.button
            className={classText}
            style={style}
            /* @ts-ignore */
            onMouseEnter={trigger}
        >
            {text}
        </animated.button>
    );
};

export default AnimatedButton;
