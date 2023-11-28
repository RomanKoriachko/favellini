import Marquee from "react-fast-marquee";
import "./SaleComponent.scss";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import useBoop from "../UseBoop/UseBoop";

type Props = {};

const SaleComponent = (props: Props) => {
    const [styleBtn1, triggerBtn1] = useBoop({ scale: 1.1 });
    const [styleBtn2, triggerBtn2] = useBoop({ scale: 1.1 });
    const [styleBtn3, triggerBtn3] = useBoop({ scale: 1.1 });
    const [styleBtn4, triggerBtn4] = useBoop({ scale: 1.1 });
    return (
        <>
            <div className="sale-section-anker" id="sale"></div>
            <section className="sale-section">
                <div className="small-container">
                    <div className="row sale-title-wrapper">
                        <div className="sale-title">
                            <p className="sale-red">Sale</p>
                            <p className="sale-persents">61%</p>
                        </div>
                        <div className="sale-description">
                            Discover unmatched luxury and comfort with the
                            exclusive Favellini sale, offering an incredible 61%
                            discount on our opulent bedding collections. Elevate
                            your sleep experience to the pinnacle of indulgence
                            while enjoying this limited-time offer on our
                            signature luxury sheets and experience the epitome
                            of comfort for less! Hurry, seize this extraordinary
                            opportunity and embrace luxury at an unparalleled
                            value with Favellini's exclusive sale!
                        </div>
                    </div>
                </div>
                <Marquee
                    className="marquee"
                    autoFill={true}
                    speed={30}
                    pauseOnHover={true}
                >
                    <div className="marquee-item marquee-item-1">
                        <div className="marquee-img marquee-img-1">
                            <img
                                src="images/sale-img-2.jpg"
                                alt="white begging set 1"
                            />
                        </div>
                        <div className="row marquee-item-description-row">
                            <div className="marquee-item-name-wrapper">
                                <p className="marquee-item-color">White</p>
                                <p className="marquee-item-type">bedding set</p>
                            </div>
                            <div className="marquee-item-price-and-btn row">
                                <p className="marquee-item-price">
                                    from <span>97€</span>
                                </p>
                                <a
                                    href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AnimatedButton
                                        classText="marquee-item-button"
                                        style={styleBtn1}
                                        trigger={triggerBtn1}
                                        text="Go To The Store"
                                    />
                                </a>
                            </div>
                        </div>
                        <a
                            className="mobile-btn"
                            href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Go To The Store</button>
                        </a>
                    </div>
                    <div className="marquee-item marquee-item-2">
                        <div className="marquee-img marquee-img-2">
                            <img
                                src="images/sale-img-1.jpg"
                                alt="white begging set 2"
                            />
                        </div>
                        <div className="row marquee-item-description-row">
                            <div className="marquee-item-name-wrapper">
                                <p className="marquee-item-color">White</p>
                                <p className="marquee-item-type">bedding set</p>
                            </div>
                            <div className="marquee-item-price-and-btn row">
                                <p className="marquee-item-price">
                                    from <span>97€</span>
                                </p>
                                <a
                                    href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AnimatedButton
                                        classText="marquee-item-button"
                                        style={styleBtn2}
                                        trigger={triggerBtn2}
                                        text="Go To The Store"
                                    />
                                </a>
                            </div>
                        </div>
                        <a
                            className="mobile-btn"
                            href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Go To The Store</button>
                        </a>
                    </div>
                    <div className="marquee-item marquee-item-3">
                        <div className="marquee-img marquee-img-3">
                            <img
                                src="images/sale-img-3.jpg"
                                alt="white begging set 3"
                            />
                        </div>
                        <div className="row marquee-item-description-row">
                            <div className="marquee-item-name-wrapper">
                                <p className="marquee-item-color">White</p>
                                <p className="marquee-item-type">bedding set</p>
                            </div>
                            <div className="marquee-item-price-and-btn row">
                                <p className="marquee-item-price">
                                    from <span>97€</span>
                                </p>
                                <a
                                    href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AnimatedButton
                                        classText="marquee-item-button"
                                        style={styleBtn3}
                                        trigger={triggerBtn3}
                                        text="Go To The Store"
                                    />
                                </a>
                            </div>
                        </div>
                        <a
                            className="mobile-btn"
                            href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Go To The Store</button>
                        </a>
                    </div>
                    <div className="marquee-item marquee-item-4">
                        <div className="marquee-img marquee-img-1">
                            <img
                                src="images/sale-img-1.jpg"
                                alt="white begging set 1"
                            />
                        </div>
                        <div className="row marquee-item-description-row">
                            <div className="marquee-item-name-wrapper">
                                <p className="marquee-item-color">White</p>
                                <p className="marquee-item-type">bedding set</p>
                            </div>
                            <div className="marquee-item-price-and-btn row">
                                <p className="marquee-item-price">
                                    from <span>97€</span>
                                </p>
                                <a
                                    href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AnimatedButton
                                        classText="marquee-item-button"
                                        style={styleBtn4}
                                        trigger={triggerBtn4}
                                        text="Go To The Store"
                                    />
                                </a>
                            </div>
                        </div>
                        <a
                            className="mobile-btn"
                            href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>Go To The Store</button>
                        </a>
                    </div>
                </Marquee>
            </section>
        </>
    );
};

export default SaleComponent;
