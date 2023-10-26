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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    closeTabletFilterState,
    openTabletFilterState,
} from "../../redux/tabletFilterReduser";
import SortingTabletComponent from "../../components/SortingTabletComponent/SortingTabletComponent";
import {
    closeTabletSortingState,
    openTabletSortingState,
} from "../../redux/tabletSortingReducer";
import { useEffect } from "react";
import { setItemsState } from "../../redux/itemsReducer";

type Props = {};

const CollectionPage = (props: Props) => {
    function sortByField<T>(array: T[], field: keyof T, ascending = true): T[] {
        return [...array].sort((a, b) => {
            if (ascending) {
                return (a[field] as any) - (b[field] as any);
            } else {
                return (b[field] as any) - (a[field] as any);
            }
        });
    }

    useEffect(() => {
        let availableItems = itemsArrState.filter((item) => item.inStock);
        let unavailableItems = itemsArrState.filter((item) => !item.inStock);

        const sortedAvailableItems = sortByField(
            availableItems,
            "inStock",
            false
        );
        const sortedUnavailableItems = sortByField(
            unavailableItems,
            "inStock",
            false
        );

        const sortedItems = [
            ...sortedAvailableItems,
            ...sortedUnavailableItems,
        ];

        dispatch(setItemsState(sortedItems));
        // eslint-disable-next-line
    }, []);

    const itemsArrState = useAppSelector((state) => state.itemsState);
    const tabletFilterState = useAppSelector(
        (state) => state.tabletFilterState
    );
    const tabletSortingState = useAppSelector(
        (state) => state.tabletSortingState
    );
    const dispatch = useAppDispatch();

    const onTabletFilterClick = () => {
        if (tabletFilterState === "") {
            dispatch(openTabletFilterState());
            document.body.style.overflow = "hidden";
        } else {
            dispatch(closeTabletFilterState());
            document.body.style.overflow = "auto";
        }
    };

    const closeTabletFilter = () => {
        dispatch(closeTabletFilterState());
        document.body.style.overflow = "auto";
    };

    const onTabletSortingClick = () => {
        if (tabletSortingState === "") {
            dispatch(openTabletSortingState());
            document.body.style.overflow = "hidden";
        } else {
            dispatch(closeTabletSortingState());
            document.body.style.overflow = "auto";
        }
    };

    const closeTabletSorting = () => {
        dispatch(closeTabletSortingState());
        document.body.style.overflow = "auto";
    };

    // TabletSorting

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
            <div className={`collection-page`}>
                <div className="header-bg"></div>
                <div className="container">
                    <PagesNavigation />
                    <SortingComponent />
                    <div className="tablet-buttons-row row">
                        <div
                            className="tablet-button filters-btn"
                            onClick={onTabletFilterClick}
                        >
                            <p>Filters</p>
                            <div className="filters-btn-img btn-img"></div>
                        </div>
                        <div
                            className="tablet-button sorting-btn"
                            onClick={onTabletSortingClick}
                        >
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
                <div className={`filter-tablet ${tabletFilterState}`}>
                    <div className="filter-tablet-title row">
                        <div
                            className="close-img"
                            onClick={closeTabletFilter}
                        ></div>
                        <p>Filters</p>
                    </div>
                    <FilterComponent />
                </div>
                <div className={`sorting-tablet ${tabletSortingState}`}>
                    <div className="sorting-tablet-title row">
                        <div
                            className="close-img"
                            onClick={closeTabletSorting}
                        ></div>
                        <p>Sorting</p>
                    </div>
                    <SortingTabletComponent />
                </div>
                <div
                    className={`tablet-filter-bg ${tabletFilterState} ${tabletSortingState}`}
                ></div>
                <HistoryComponent />
                <PakingComponent />
            </div>
        </main>
    );
};

export default CollectionPage;
