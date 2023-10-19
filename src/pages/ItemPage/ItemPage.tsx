import { useParams } from "react-router-dom";
import "./ItemPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import itemsArray from "../CollectionPage/itemsArray";
import SliderComponent from "../../components/SliderComponent/SliderComponent";

type Props = {};

const ItemPage = (props: Props) => {
    const { color } = useParams();
    let currentItem;
    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].color === color) {
            currentItem = itemsArray[i];
        }
    }
    return (
        <main className="main">
            <div className="item-page">
                <div className="header-bg"></div>
                <div className="container">
                    <PagesNavigation />
                    <div className="row item-content-wrapper">
                        <SliderComponent />
                        <div></div>
                    </div>
                </div>
                <HistoryComponent />
            </div>
        </main>
    );
};

export default ItemPage;
