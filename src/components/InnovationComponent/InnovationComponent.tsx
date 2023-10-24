import SeeMoreButton from "../SeeMoreButton/SeeMoreButton";
import "./InnovationComponent.scss";
import { Link } from "react-router-dom";

type Props = {};

const InnovationComponent = (props: Props) => {
    return (
        <section className="innovation-section">
            <div className="container">
                <p className="subtitle">Innovation and Comfort</p>
                <div className="title-wrapper">
                    <p className="title title-1">Our commitment</p>
                    <p className="title title-2">to innovation shines</p>
                    <p className="title title-3">through in our products</p>
                </div>

                <div className="row innovation-content-row left-side-row">
                    <img src="images/innovation-img-1.jpg" alt="" />
                    <div>
                        <p className="text">
                            Favellini’s bamboo viscose bedding possesses a
                            unique cooling quality, ensuring a restful sleep.
                            The featherlight fabric cradles you, inducing a
                            tranquil slumber as if you were floating on a cloud.
                        </p>
                        <p className="text">
                            What truly sets Favellini apart is its unparalleled
                            breathability. Our bedding is designed to facilitate
                            constant air circulation, promising a pleasantly
                            cool night’s rest even on the warmest nights. It’s
                            as if the bedding has a natural thermostat, keeping
                            you perfectly comfortable.
                        </p>
                    </div>
                </div>
                <div className="small-container">
                    <div className="row innovation-content-row right-side-row">
                        <div className="button-parent">
                            <p className="title">Legacy</p>
                            <p className="text">
                                As Roberto Favellini introduced his Symphony Of
                                Nature alongside the Soft & Silky, Cooling,
                                Lightweight, and Breathable bedding sets to the
                                world, a transformation in the way people
                                experienced sleep ensued, ushering in a realm of
                                unparalleled luxury and repose.
                            </p>
                            <p className="text">
                                Favellini’s legacy transcends the world of
                                fashion. It has become an experience—an
                                indulgence that elevates nightly slumber to an
                                art form. Roberto’s dream has materialized, and
                                the world has been indelibly transformed by his
                                visionary luxury.
                            </p>
                            <Link
                                className="innovation-section-btn-link-tabet"
                                to={"collection"}
                            >
                                <SeeMoreButton />
                            </Link>
                        </div>
                        <div className="img-wrapper">
                            <img src="images/innovation-img-2.jpg" alt="" />
                        </div>

                        <Link
                            className="innovation-section-btn-link"
                            to={"collection"}
                        >
                            <SeeMoreButton />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationComponent;
