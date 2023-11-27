import "./Footer.scss";
import useBoop from "../../components/UseBoop/UseBoop";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";

type Props = {};

const Footer = (props: Props) => {
    // const [styleFb, triggerFb] = useBoop({ rotation: 20 });
    const [styleAm, triggerAm] = useBoop({ rotation: 20 });
    const [styleInst, triggerInst] = useBoop({ rotation: 20 });
    const [styleForm, triggerForm] = useBoop({ scale: 1.1 });
    return (
        <footer className="footer" id="contacts">
            <div className="small-container">
                <div className="footer-wrapper">
                    <div>
                        <p className="footer-subtitle">Contact Us</p>
                        <p className="footer-title">Let’s Work Together</p>
                        <p className="footer-text">
                            We’re here to make your sleep extraordinary. Contact
                            our team at <span>pr@favellini.com</span> or fill
                            out the form
                        </p>
                        <div className="row footer-buttons-row">
                            {/* <div className="footer-btn facebook-btn">
                                <AnimatedButton
                                    classText="footer-btn facebook-btn"
                                    style={styleFb}
                                    trigger={triggerFb}
                                    text=""
                                />
                            </div> */}
                            <div className="footer-btn amazon-btn">
                                <a
                                    href="https://www.amazon.com/stores/FAVELLINI/page/1A0380A7-DFAD-4C65-B77A-F24D55333BC2?ref_=ast_bln"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AnimatedButton
                                        classText="footer-btn amazon-btn"
                                        style={styleAm}
                                        trigger={triggerAm}
                                        text=""
                                    />
                                </a>
                            </div>
                            <div className="footer-btn instagram-btn">
                                <a
                                    href="https://www.instagram.com/favellini_tm/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <AnimatedButton
                                        classText="footer-btn instagram-btn"
                                        style={styleInst}
                                        trigger={triggerInst}
                                        text=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <form
                        className="form"
                        action="https://formsubmit.co/kate.gorushenko@gmail.com"
                        method="POST"
                    >
                        <div className="form-wrapper">
                            <input
                                required
                                className="form-input form-email"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Write your email"
                            />
                            <textarea
                                required
                                className="form-input form-message"
                                name="message"
                                id="message"
                                placeholder="Write your Message"
                            ></textarea>
                            <AnimatedButton
                                classText="form-btn"
                                style={styleForm}
                                trigger={triggerForm}
                                text="Send"
                            />
                        </div>
                    </form>
                    <div className="row footer-buttons-row-tablet">
                        <div className="footer-btn amazon-btn">
                            <AnimatedButton
                                classText="footer-btn amazon-btn"
                                style={styleAm}
                                trigger={triggerAm}
                                text=""
                            />
                        </div>
                        <div className="footer-btn instagram-btn">
                            <a href="https://www.instagram.com/favellini_tm/">
                                <AnimatedButton
                                    classText="footer-btn instagram-btn"
                                    style={styleInst}
                                    trigger={triggerInst}
                                    text=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>©2023 Favellini. All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
