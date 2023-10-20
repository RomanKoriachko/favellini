import { Link } from "react-router-dom";
import "./ItemComponent.scss";

type Props = {
    type: string;
    color: string;
    queensPrice: number;
    img1: string;
    inStock: boolean;
};

const ItemComponent = ({ type, color, queensPrice, img1, inStock }: Props) => {
    return (
        <div className={`item ${inStock ? "" : "out-of-stock"}`}>
            <Link to={`/collection/${color}`}>
                <div className="img-wrapper">
                    <img className="item-img" src={`images/${img1}`} alt="" />
                </div>
            </Link>
            <div className="row description-row">
                <div>
                    <Link to={`/collection/${color}`}>
                        <p>{color}</p>
                    </Link>
                    <p className="item-type">{type}</p>
                </div>
                {inStock ? (
                    <div className="price">from {queensPrice}€</div>
                ) : (
                    <div className="price out-of-stock">Out of stock</div>
                )}
            </div>
        </div>
    );
};

export default ItemComponent;
