import "./PagesNavigation.scss";
import { Link } from "react-router-dom";

type Props = {};

const PagesNavigation = (props: Props) => {
    return (
        <div className="row pages">
            <Link className="page-text" to="/">
                <p>Home</p>
            </Link>
            <div className="page-text">{">"}</div>
            <Link className="page-text current-pages" to="/collection">
                <p>Collection</p>
            </Link>
        </div>
    );
};

export default PagesNavigation;
