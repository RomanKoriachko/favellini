import itemsArray from "../../pages/CollectionPage/itemsArray";
import "./PagesNavigation.scss";
import { Link, useParams } from "react-router-dom";

type Props = {};

const PagesNavigation = (props: Props) => {
    const { color } = useParams();
    let currentItem;
    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].color === color) {
            currentItem = itemsArray[i];
        }
    }

    let curentPageClass = {
        currentCollection: "current-page",
        currentItem: "current-page",
    };

    if (color) {
        curentPageClass.currentCollection = "";
        curentPageClass.currentItem = "current-page";
    } else {
        curentPageClass.currentCollection = "current-page";
        curentPageClass.currentItem = "";
    }

    return (
        <div className="row pages">
            <Link className="page-text" to="/">
                <p>Home</p>
            </Link>
            <div className="page-text">{">"}</div>
            <Link
                className={`page-text ${curentPageClass.currentCollection}`}
                to="/collection"
            >
                <p>Collection</p>
            </Link>
            {currentItem ? (
                <>
                    <div className="page-text">{">"}</div>
                    <Link
                        className={`page-text ${curentPageClass.currentItem}`}
                        to={`/collection/${color}`}
                    >
                        <p>{currentItem.type}</p>
                    </Link>
                </>
            ) : undefined}
        </div>
    );
};

export default PagesNavigation;
