import AnimatedButton from "../AnimatedButton/AnimatedButton";
import useBoop from "../UseBoop/UseBoop";
import "./SeeMoreButton.scss";

type Props = {};

const SeeMoreButton = (props: Props) => {
    const [style, trigger] = useBoop({
        scale: 1.1,
        springConfig: {
            tension: 400,
            friction: 10,
        },
    });
    return (
        <AnimatedButton
            style={style}
            trigger={trigger}
            classText="about-section-btn"
            text="See More"
        />
    );
};

export default SeeMoreButton;
