import AnimatedButton from "../AnimatedButton/AnimatedButton";
import useBoop from "../UseBoop/UseBoop";
import "./SaleComponent.scss";

type Props = {};

const SaleComponent = (props: Props) => {
    const [styleBtn, triggerBtn] = useBoop({ scale: 1.1 });
    return (
        <>
            <div className="sale-section-anker" id="sale"></div>
            <section className="sale-section">
                <div className="container">
                    <div className="sale-wrapper row">
                        <div className="sale-title">
                            <p>Sale</p>
                            <p>
                                up to <span>61%</span> OFF
                            </p>
                            <p>Sale</p>
                        </div>
                        <div className="sale-text">
                            <div className="sale-text-blur"></div>
                            <p>
                                Discover unmatched luxury and comfort with the
                                exclusive Favellini sale, offering an incredible
                                61% discount on our opulent bedding collections.
                                Hurry, seize this extraordinary opportunity and
                                embrace luxury at an unparalleled value with
                                Favellini's exclusive sale!
                            </p>
                        </div>
                        <div className="sale-item">
                            <div className="sale-img-wrapper">
                                <img
                                    className="sale-img"
                                    src="images/sale-img-1.jpg"
                                    alt="sale item"
                                />
                            </div>
                            <div className="sale-item-description row">
                                <div className="sale-item-name-wrapper">
                                    <p className="sale-item-color">White</p>
                                    <p className="sale-item-type">
                                        bedding set
                                    </p>
                                </div>
                                <div className="sale-item-price-and-btn row">
                                    <div className="sale-item-price-wrapper">
                                        <p className="sale-item-rpice">
                                            from <span>97€</span>
                                        </p>
                                    </div>
                                    <a
                                        href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <AnimatedButton
                                            classText="sale-btn"
                                            style={styleBtn}
                                            trigger={triggerBtn}
                                            text="Go To The Store"
                                        />
                                    </a>
                                </div>
                            </div>
                            <a
                                href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="sale-tablet-btn">
                                    Go To The Store
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SaleComponent;
