import "./FeedbackComponent.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Marquee from "react-fast-marquee";

type Props = {};

const FeedbackComponent = (props: Props) => {
    return (
        <section className="feedback-section">
            <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={2}
                animateOnce
            >
                <div className="small-container">
                    <div className="quote-img"></div>
                    <p className="subtitle">Feedback Comments</p>
                    <p className="title">for Favellini bedding sets</p>
                </div>
            </AnimationOnScroll>
            <Marquee className="marquee" autoFill={true} speed={30}>
                <p>
                    “Absolutely love my Favellini bedding! It feels like
                    sleeping on a cloud.”
                </p>
                <div className="white-dot"></div>
                <p>
                    “I can’t believe I ever slept without Favellini. It’s a
                    sleep upgrade!”
                </p>
                <div className="white-dot"></div>
                <p>“I gifted this to my husband, and he’s obsessed with it.”</p>
                <div className="white-dot"></div>
            </Marquee>
        </section>
    );
};

export default FeedbackComponent;
