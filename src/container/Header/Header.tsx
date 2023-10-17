import "./Header.scss";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <img className="header-logo" src="images/logo.svg" alt="" />
                    <div className="row header-menu-wrapper">
                        <Link className="header-menu-item" to={"collection"}>
                            collection
                        </Link>
                        <div className="header-menu-item">Our History</div>
                        <div className="header-menu-item">Contact Us</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
