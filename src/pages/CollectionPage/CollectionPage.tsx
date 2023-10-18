import ItemComponent from "../../components/ItemComponent/ItemComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import itemsArray from "./itemsArray";
import "./CollectionPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";

type Props = {};

const CollectionPage = (props: Props) => {
    return (
        <main className="main">
            <div className="collection-page">
                <div className="header-bg"></div>
                <div className="container">
                    <PagesNavigation />
                    <div className="collection-wrapper">
                        <div className="filter"></div>
                        <div className="items-wrapper">
                            {itemsArray.map(
                                ({ id, type, color, queensPrice, img1 }) => (
                                    <ItemComponent
                                        key={id}
                                        type={type}
                                        color={color}
                                        queensPrice={queensPrice}
                                        img1={img1}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
                <HistoryComponent />
                <PakingComponent />
            </div>
        </main>
    );
};

export default CollectionPage;
