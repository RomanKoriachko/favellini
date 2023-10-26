import ItemComponent from "../../components/ItemComponent/ItemComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import itemsArray from "./itemsArray";
import "./CollectionPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import { useState, useEffect } from "react";
import "rc-slider/assets/index.css";
import StickyBox from "react-sticky-box";
import { Helmet } from "react-helmet-async";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setItemsState } from "../../redux/itemsReducer";
import { setSortingTitleState } from "../../redux/sortingReducer";

type Props = {};

const CollectionPage = (props: Props) => {
    const itemsArrState = useAppSelector((state) => state.itemsState);
    const sortingTitleState = useAppSelector((state) => state.sortingState);
    const dispatch = useAppDispatch();

    // Open Sorting menu

    const [sortingState, setSortingState] = useState("");
    const openSortingList = () => {
        sortingState === "" ? setSortingState("open") : setSortingState("");
    };

    // Sorting

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

    // const [sortingTitleState, setSortingTitleState] =
    //     useState<string>("Default");

    function sortByField<T>(array: T[], field: keyof T, ascending = true): T[] {
        return [...array].sort((a, b) => {
            if (ascending) {
                return (a[field] as any) - (b[field] as any);
            } else {
                return (b[field] as any) - (a[field] as any);
            }
        });
    }

    const handleSortByField = (
        field: keyof (typeof itemsArray)[0],
        ascending = true
    ) => {
        let availableItems = itemsArrState.filter((item) => item.inStock);
        let unavailableItems = itemsArrState.filter((item) => !item.inStock);

        const sortedAvailableItems = sortByField(
            availableItems,
            field,
            ascending
        );
        const sortedUnavailableItems = sortByField(
            unavailableItems,
            field,
            ascending
        );

        const sortedItems = [
            ...sortedAvailableItems,
            ...sortedUnavailableItems,
        ];

        dispatch(setItemsState(sortedItems));
    };

    const sortByLowerPrice = () => {
        handleSortByField("queensPrice", true);
        dispatch(setSortingTitleState("From cheap to expensive"));
        setSortingState("");
    };
    const sortByHighestPrice = () => {
        handleSortByField("queensPrice", false);
        dispatch(setSortingTitleState("From expensive to cheap"));
        setSortingState("");
    };
    const sortByPopularity = () => {
        handleSortByField("popularity", false);
        dispatch(setSortingTitleState("By popularity"));
        setSortingState("");
    };
    const sortByStock = () => {
        handleSortByField("inStock", false);
        dispatch(setSortingTitleState("In stock"));
        setSortingState("");
    };
    const sortByDefault = () => {
        handleSortByField("id", true);
        dispatch(setSortingTitleState("Default"));
        setSortingState("");
    };

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
                    <div className="sorting">
                        <div
                            className="row sorting-row"
                            onClick={openSortingList}
                        >
                            <p>Sorting: {sortingTitleState}</p>
                            <div className={`arrow ${sortingState}`}></div>
                        </div>
                        <div className={`sorting-list ${sortingState}`}>
                            <p
                                className={`${
                                    sortingTitleState ===
                                    "From expensive to cheap"
                                        ? "disable"
                                        : ""
                                }`}
                                onClick={sortByHighestPrice}
                            >
                                From expensive to cheap
                            </p>
                            <p
                                className={`${
                                    sortingTitleState ===
                                    "From cheap to expensive"
                                        ? "disable"
                                        : ""
                                }`}
                                onClick={sortByLowerPrice}
                            >
                                From cheap to expensive
                            </p>
                            <p
                                className={`${
                                    sortingTitleState === "By popularity"
                                        ? "disable"
                                        : ""
                                }`}
                                onClick={sortByPopularity}
                            >
                                By popularity
                            </p>
                            <p
                                className={`${
                                    sortingTitleState === "In stock"
                                        ? "disable"
                                        : ""
                                }`}
                                onClick={sortByStock}
                            >
                                In stock
                            </p>
                            <p
                                className={`${
                                    sortingTitleState === "Default"
                                        ? "disable"
                                        : ""
                                }`}
                                onClick={sortByDefault}
                            >
                                Default
                            </p>
                        </div>
                    </div>
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
