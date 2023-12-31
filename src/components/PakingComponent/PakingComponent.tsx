import "./PakingComponent.scss";

type Props = {};

const PakingComponent = (props: Props) => {
    return (
        <section className="paking-section">
            <div className="small-container">
                <p className="subtitle">Our Packaging</p>
                <p className="title">Favellini</p>
                <p className="text">
                    All Favellini products are packaged in a gift box.
                </p>
                <p className="text">
                    This box is convenient for storing laundry at home.
                </p>
                <img
                    className="paking-img-1"
                    src="/images/innovation-img-1.jpg"
                    alt=""
                />
                <div className="tablet-text">
                    <p className="text">
                        All Favellini products are packaged in a gift box.
                    </p>
                    <p className="text">
                        This box is convenient for storing laundry at home.
                    </p>
                </div>
                <div className="paking-img-2-wrapper">
                    <img
                        className="paking-img-2"
                        src="/images/innovation-img-2.jpg"
                        alt=""
                    />
                    <div className="cetrificate-wrapper"></div>
                </div>
            </div>
        </section>
    );
};

export default PakingComponent;
