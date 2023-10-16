import "./Header.scss";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="header row">
            <p>Header</p>
            <Link to={"collection"}>collection</Link>
        </header>
    );
};

export default Header;
