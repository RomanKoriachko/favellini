import "./SortingComponent.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setItemsState } from "../../redux/itemsReducer";
import itemsArray from "../../pages/CollectionPage/itemsArray";
import { setSortingTitleState } from "../../redux/sortingReducer";

type Props = {};

const SortingComponent = (props: Props) => {
    const itemsArrState = useAppSelector((state) => state.itemsState);
    const sortingTitleState = useAppSelector((state) => state.sortingState);
    const dispatch = useAppDispatch();

    // Open Sorting menu

    const [sortingState, setSortingState] = useState("");
    const openSortingList = () => {
        sortingState === "" ? setSortingState("open") : setSortingState("");
    };

    // Sorting

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
        <div className="sorting">
            <div className="row sorting-row" onClick={openSortingList}>
                <p>Sorting: {sortingTitleState}</p>
                <div className={`arrow ${sortingState}`}></div>
            </div>
            <div className={`sorting-list ${sortingState}`}>
                <p
                    className={`${
                        sortingTitleState === "From expensive to cheap"
                            ? "disable"
                            : ""
                    }`}
                    onClick={sortByHighestPrice}
                >
                    From expensive to cheap
                </p>
                <p
                    className={`${
                        sortingTitleState === "From cheap to expensive"
                            ? "disable"
                            : ""
                    }`}
                    onClick={sortByLowerPrice}
                >
                    From cheap to expensive
                </p>
                <p
                    className={`${
                        sortingTitleState === "By popularity" ? "disable" : ""
                    }`}
                    onClick={sortByPopularity}
                >
                    By popularity
                </p>
                <p
                    className={`${
                        sortingTitleState === "In stock" ? "disable" : ""
                    }`}
                    onClick={sortByStock}
                >
                    In stock
                </p>
                <p
                    className={`${
                        sortingTitleState === "Default" ? "disable" : ""
                    }`}
                    onClick={sortByDefault}
                >
                    Default
                </p>
            </div>
        </div>
    );
};

export default SortingComponent;
