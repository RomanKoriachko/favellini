import { AnimationOnScroll } from "react-animation-on-scroll";
import SeeMoreButton from "../SeeMoreButton/SeeMoreButton";
import "./AboutComponent.scss";
import { Link } from "react-router-dom";

type Props = {};

const AboutComponent = (props: Props) => {
    return (
        <section className="about-section">
            <div className="container adout-header-wrapper">
                <p className="subtitle">About Us</p>
                <p className="title title-p-1">Favellini</p>
                <p className="title title-p-2">is the epitome of luxury</p>
                <p className="title title-p-1-tablet">is the epitome</p>
                <div className="title-p-2-tablet-wrapper">
                    <p className="title title-p-2-tablet">of luxury</p>
                    <p className="title title-p-3-tablet">and comfort</p>
                </div>
                <p className="title title-p-3">and comfort</p>
                <div className="text-wrapper">
                    <p className="text">
                        Founded by the visionary designer, Roberto Favellini,
                        our brand has redefined opulence and perfection. We
                        believe that luxury should be an everyday experience,
                        and our mission is to bring unparalleled comfort to your
                        life.
                    </p>
                </div>
                <Link className="about-section-btn-link" to={"collection"}>
                    <SeeMoreButton />
                </Link>
            </div>
            <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOut"
                duration={2}
                animateOnce
            >
                <div className="images-wrapper">
                    <img
                        className="about-img img-1"
                        src="images/about-section-img-1.jpg"
                        alt=""
                    />
                    <img
                        className="about-img img-2"
                        src="images/about-section-img-2.jpg"
                        alt=""
                    />
                    <img
                        className="about-img img-3"
                        src="images/about-section-img-3.jpg"
                        alt=""
                    />
                    <img
                        className="about-img img-4"
                        src="images/about-section-img-4.jpg"
                        alt=""
                    />
                </div>
            </AnimationOnScroll>
        </section>
    );
};

export default AboutComponent;
