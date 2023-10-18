import "./ItemComponent.scss";

type Props = {
    type: string;
    color: string;
    queensPrice: number;
    img1: string;
};

const ItemComponent = ({ type, color, queensPrice, img1 }: Props) => {
    return (
        <div className="item">
            <div className="img-wrapper">
                <img className="item-img" src={`images/${img1}`} alt="" />
            </div>
            <div className="row description-row">
                <div>
                    <p>{color}</p>
                    <p className="item-type">{type}</p>
                </div>
                <div className="price">from {queensPrice}€</div>
            </div>
        </div>
    );
};

export default ItemComponent;
