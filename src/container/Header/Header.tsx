import "./Header.scss";
import { Link } from "react-router-dom";
import { Link as LinkNav } from "react-scroll";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/">
                        <img
                            className="header-logo"
                            src="images/logo.svg"
                            alt=""
                        />
                    </Link>
                    <div className="row header-menu-wrapper">
                        <Link className="header-menu-item" to={"collection"}>
                            collection
                        </Link>
                        <LinkNav to="history" smooth={true} duration={500}>
                            <div className="header-menu-item">Our History</div>
                        </LinkNav>
                        <LinkNav to="contacts" smooth={true} duration={500}>
                            <div className="header-menu-item">Contact Us</div>
                        </LinkNav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
