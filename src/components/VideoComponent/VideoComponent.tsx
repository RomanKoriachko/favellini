import "./VideoComponent.scss";
import videoBg from "../../assets/videoBg.m4v";

type Props = {};

const VideoComponent = (props: Props) => {
    const windowHeight = window.innerHeight;
    const scrollDownBtnClick = () => {
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth",
        });
    };
    return (
        <section className="video-section">
            <video
                className="video-bg"
                src={videoBg}
                preload="auto"
                poster="images/background.png"
                autoPlay
                muted
                loop
            />
            <div className="video-section-bg"></div>
            <div className="video-section-logo"></div>
            <p className="video-section-logo-text">Symphony Of Nature</p>
            <button
                className="video-section-btn"
                onClick={scrollDownBtnClick}
            ></button>
        </section>
    );
};

export default VideoComponent;
