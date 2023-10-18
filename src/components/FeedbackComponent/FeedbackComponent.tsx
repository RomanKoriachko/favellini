import "./FeedbackComponent.scss";
import Marquee from "react-fast-marquee";

type Props = {};

const FeedbackComponent = (props: Props) => {
    return (
        <section className="feedback-section">
            <div className="small-container">
                <div className="quote-img"></div>
                <p className="subtitle">Feedback Comments</p>
                <p className="title">for Favellini bedding sets</p>
            </div>
            <Marquee autoFill={true} speed={30}>
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
