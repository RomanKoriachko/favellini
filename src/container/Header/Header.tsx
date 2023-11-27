import { useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { Element, Link as LinkNav } from "react-scroll";

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

    // Burger menu

    const [burgerMenuState, setBurgerMenuState] = useState<string>("");

    const onBurgerMenuClick = () => {
        if (burgerMenuState === "") {
            setBurgerMenuState("open");
            document.body.style.overflow = "hidden";
        } else {
            setBurgerMenuState("");
            document.body.style.overflow = "auto";
        }
    };

    const closeBurgerMenu = () => {
        setBurgerMenuState("");
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <Element name="header"></Element>
            <header className={`header ${headerClass}`}>
                <div className="container">
                    <div className="header-wrapper">
                        <Link to="/" onClick={closeBurgerMenu}>
                            <img
                                className="header-logo"
                                src={`/images/${headerLogo}`}
                                alt=""
                            />
                        </Link>
                        <div className="row header-menu-wrapper">
                            <div
                                className="burger-menu-img"
                                onClick={onBurgerMenuClick}
                            >
                                <div
                                    className={`burger-menu-bg ${burgerMenuState}`}
                                ></div>
                                <div
                                    className={`burger-menu ${burgerMenuState}`}
                                >
                                    <Link
                                        className="header-menu-item active"
                                        to="/collection"
                                        onClick={closeBurgerMenu}
                                    >
                                        collection
                                    </Link>
                                    <LinkNav
                                        to="history"
                                        smooth={true}
                                        duration={500}
                                        onClick={closeBurgerMenu}
                                    >
                                        <div className="header-menu-item">
                                            Our History
                                        </div>
                                    </LinkNav>
                                    <LinkNav
                                        to="contacts"
                                        smooth={true}
                                        duration={500}
                                        onClick={closeBurgerMenu}
                                    >
                                        <div className="header-menu-item">
                                            Contact Us
                                        </div>
                                    </LinkNav>
                                </div>
                            </div>
                            <Link
                                className="header-menu-item"
                                to={"collection"}
                            >
                                collection
                            </Link>
                            <LinkNav to="history" smooth={true} duration={500}>
                                <div className="header-menu-item">
                                    Our History
                                </div>
                            </LinkNav>
                            <LinkNav to="contacts" smooth={true} duration={500}>
                                <div className="header-menu-item">
                                    Contact Us
                                </div>
                            </LinkNav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
