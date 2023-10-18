import "./Footer.scss";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="footer">
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
                        <div>
                            <button className="footer-btn facebook-btn"></button>
                            <button className="footer-btn instagram-btn"></button>
                        </div>
                    </div>
                    <form className="form" action="">
                        <div className="form-wrapper">
                            <input
                                className="form-input form-email"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Write your email"
                            />
                            <textarea
                                className="form-input form-message"
                                name="message"
                                id="message"
                                placeholder="Write your Message"
                            ></textarea>
                            <button className="form-btn">Send</button>
                        </div>
                    </form>
                </div>
                <div className="copyright">
                    <p>©2023 Favellini. All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
