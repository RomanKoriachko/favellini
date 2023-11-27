import "./ExploreComponent.scss";
import { Link } from "react-router-dom";

type Props = {};

const ExploreComponent = (props: Props) => {
    // const [style, trigger] = useBoop({ x: 10 });
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
                        <Link className="item-link" to={`collection/white`}>
                            <div className="item-img"></div>
                        </Link>
                        <Link to={`collection/white`}>
                            <p className="item-name">white king size</p>
                        </Link>
                    </div>
                    <div className="explore-section-item explore-section-item-2">
                        <Link
                            className="item-link"
                            to={`collection/charming%20blue`}
                        >
                            <div className="item-img"></div>
                        </Link>
                        <Link to={`collection/charming%20blue`}>
                            <p className="item-name">charming blue king size</p>
                        </Link>
                    </div>
                    <div className="explore-section-item explore-section-item-3">
                        <Link
                            className="item-link"
                            to={`collection/light%20green`}
                        >
                            <div className="item-img"></div>
                        </Link>
                        <Link to={`collection/light%20green`}>
                            <p className="item-name">light green king size</p>
                        </Link>
                    </div>
                    <a
                        href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                        className="store-link"
                        target="_blank"
                    >
                        <button className="explore-section-item explore-section-link">
                            <p>our store</p>
                        </button>
                        {/* <AnimatedButton
                            style={style}
                            trigger={trigger}
                            classText="explore-section-item explore-section-link"
                            text="our store"
                        /> */}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExploreComponent;
