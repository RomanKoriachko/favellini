import "./HistoryComponent.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {};

const HistoryComponent = (props: Props) => {
    return (
        <section className="history-section">
            <div className="history-section-anker" id="history"></div>
            <div className="small-container">
                <AnimationOnScroll
                    animateIn="animate__fadeInLeft"
                    animateOut="animate__fadeOutLeft"
                    duration={2}
                    animateOnce
                >
                    <p className="subtitle">Our History</p>
                    <p className="title">Roberto Favellini</p>
                    <p className="text">
                        a celebrated figure in the fashion world, decided to go
                        beyond haute couture and venture into the world of home
                        products. His inspiration was to create something
                        intimate and comforting, thus giving birth to Favellini.
                        Since then, we’ve been crafting exceptional bedding
                        collections that elevate your sleep experience.
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeInRight"
                    animateOut="animate__fadeOutRight"
                    duration={2}
                    animateOnce
                >
                    <div className="history-img-wrapper">
                        <img
                            className="history-img"
                            src="/images/history-section-img.jpg"
                            alt=""
                        />
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    );
};

export default HistoryComponent;
