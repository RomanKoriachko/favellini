import ItemComponent from "../../components/ItemComponent/ItemComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import "./CollectionPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import "rc-slider/assets/index.css";
import StickyBox from "react-sticky-box";
import { Helmet } from "react-helmet-async";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import SortingComponent from "../../components/SortingComponent/SortingComponent";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

const CollectionPage = (props: Props) => {
    const itemsArrState = useAppSelector((state) => state.itemsState);

    return (
        <main className="main">
            <Helmet>
                <title>Favellini - Collection</title>
                <meta property="og:title" content="Favellini - Collection" />
                <meta
                    property="telegram:title"
                    content="Favellini - Collection"
                />
                <meta
                    name="description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
                <meta
                    property="og:description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
                <meta
                    property="telegram:description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
            </Helmet>
            <div className="collection-page">
                <div className="header-bg"></div>
                <div className="container">
                    <PagesNavigation />
                    <SortingComponent />
                    <div className="tablet-buttons-row row">
                        <div className="tablet-button filters-btn">
                            <p>Filters</p>
                            <div className="filters-btn-img btn-img"></div>
                        </div>
                        <div className="tablet-button sorting-btn">
                            <p>Sorting</p>
                            <div className="sorting-btn-img btn-img"></div>
                        </div>
                    </div>
                    <div className="collection-wrapper">
                        <StickyBox
                            offsetTop={20}
                            offsetBottom={20}
                            className="sticky-box"
                        >
                            <FilterComponent />
                        </StickyBox>
                        {itemsArrState.length < 1 ? (
                            <div className="no-result">No matches</div>
                        ) : (
                            <div className="items-wrapper">
                                {itemsArrState.map(
                                    ({
                                        id,
                                        type,
                                        color,
                                        queensPrice,
                                        img1,
                                        inStock,
                                    }) => (
                                        <ItemComponent
                                            key={id}
                                            type={type}
                                            color={color}
                                            queensPrice={queensPrice}
                                            img1={img1}
                                            inStock={inStock}
                                        />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <HistoryComponent />
                <PakingComponent />
            </div>
        </main>
    );
};

export default CollectionPage;
