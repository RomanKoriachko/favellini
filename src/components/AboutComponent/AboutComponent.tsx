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
            <div className="container">
                <div className="row description-wrapper">
                    <div className="description-leftside-wrapper">
                        <p className="description-title">100%</p>
                        <p className="description-text">organically </p>
                    </div>
                    <div className="description-text-wrapper">
                        <p className="text">
                            At Favellini, perfection is our constant pursuit. We
                            meticulously choose materials, focusing on 100%
                            organically grown bamboo viscose, known for its
                            unparalleled softness and eco-friendliness. Each
                            thread is selected with precision, and every stitch
                            reflects our dedication to quality.
                        </p>
                        <p className="text">
                            Our bedding collection transcends ordinary comfort.
                            It’s not just fabric; it’s an indulgence for the
                            senses, with a velvety texture that caresses your
                            skin, making every night’s sleep a regal experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutComponent;
