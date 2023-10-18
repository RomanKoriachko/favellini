import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { Link as LinkNav } from "react-scroll";

type Props = {};

const Header = (props: Props) => {
    const location = useLocation();
    let headerClass = "";
    let headerLogo = "logo.svg";
    if (location.pathname.includes("collection")) {
        headerClass = "header-pages";
        headerLogo = "logo-collection.svg";
    } else {
        headerClass = "";
        headerLogo = "logo.svg";
    }
    return (
        <header className={`header ${headerClass}`}>
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/">
                        <img
                            className="header-logo"
                            src={`images/${headerLogo}`}
                            alt=""
                        />
                    </Link>
                    <div className="row header-menu-wrapper">
                        <Link className="header-menu-item" to={"collection"}>
                            collection
                        </Link>
                        <LinkNav
                            className="header-link"
                            to="history"
                            smooth={true}
                            duration={500}
                        >
                            <div className="header-menu-item">Our History</div>
                        </LinkNav>
                        <Link to="/" className="pages-header-menu-item">
                            <div className="header-menu-item">Our History</div>
                        </Link>
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
