import AnimatedButton from "../AnimatedButton/AnimatedButton";
import useBoop from "../UseBoop/UseBoop";
import "./ExploreComponent.scss";

type Props = {};

const ExploreComponent = (props: Props) => {
    const [style, trigger] = useBoop({ x: 10 });
    return (
        <section className="explore-section">
            <div className="container">
                <p className="subtitle">Products</p>
                <p className="title">
                    Explore
                    <br />
                    Our Collections
                </p>
                <p className="text">
                    Discover the Symphony Of Nature and experience a new level
                    of luxury and comfort. Elevate your sleep to an
                    unprecedented realm of relaxation with Favellini’s Soft &
                    Silky, Cooling, Lightweight, and Breathable bedding sets.
                </p>
                <div className="items-wrapper">
                    <div className="explore-section-item explore-section-item-1">
                        <div className="item-img"></div>
                        <p className="item-name">white king size</p>
                    </div>
                    <div className="explore-section-item explore-section-item-2">
                        <div className="item-img"></div>
                        <p className="item-name">charming blue king size</p>
                    </div>
                    <div className="explore-section-item explore-section-item-3">
                        <div className="item-img"></div>
                        <p className="item-name">light green king size</p>
                    </div>
                    <a href="" className="store-link">
                        <AnimatedButton
                            style={style}
                            trigger={trigger}
                            classText="explore-section-item explore-section-link"
                            text="our store"
                        />
                        {/* <div className="explore-section-item explore-section-link">
                            our store
                        </div> */}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExploreComponent;
