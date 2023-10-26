import itemsArray from "../../pages/CollectionPage/itemsArray";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setItemsState } from "../../redux/itemsReducer";
import { setSortingTitleState } from "../../redux/sortingReducer";
import { closeTabletSortingState } from "../../redux/tabletSortingReducer";
import "./SortingTabletComponent.scss";
import { useState } from "react";

type Props = {};

type SortingType = {
    expensiveToCheap: boolean;
    cheapToExpensive: boolean;
    byPopularyty: boolean;
    inStock: boolean;
    default: boolean;
};

const SortingTabletComponent = (props: Props) => {
    const itemsArrState = useAppSelector((state) => state.itemsState);
    const dispatch = useAppDispatch();

    function sortByField<T>(array: T[], field: keyof T, ascending = true): T[] {
        return [...array].sort((a, b) => {
            if (ascending) {
                return (a[field] as any) - (b[field] as any);
            } else {
                return (b[field] as any) - (a[field] as any);
            }
        });
    }

    const [sortingCheckboxState, setSortingCheckboxState] =
        useState<SortingType>({
            expensiveToCheap: false,
            cheapToExpensive: false,
            byPopularyty: false,
            inStock: false,
            default: true,
        });

    const onExpensiveClick = () => {
        setSortingCheckboxState({
            expensiveToCheap: true,
            cheapToExpensive: false,
            byPopularyty: false,
            inStock: false,
            default: false,
        });
    };
    const onCheapClick = () => {
        setSortingCheckboxState({
            expensiveToCheap: false,
            cheapToExpensive: true,
            byPopularyty: false,
            inStock: false,
            default: false,
        });
    };
    const onPopularityClick = () => {
        setSortingCheckboxState({
            expensiveToCheap: false,
            cheapToExpensive: false,
            byPopularyty: true,
            inStock: false,
            default: false,
        });
    };
    const onInStockClick = () => {
        setSortingCheckboxState({
            expensiveToCheap: false,
            cheapToExpensive: false,
            byPopularyty: false,
            inStock: true,
            default: false,
        });
    };
    const onDefaultClick = () => {
        setSortingCheckboxState({
            expensiveToCheap: false,
            cheapToExpensive: false,
            byPopularyty: false,
            inStock: false,
            default: true,
        });
    };

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

    const onApplySortingClick = () => {
        if (sortingCheckboxState.expensiveToCheap) {
            handleSortByField("queensPrice", false);
            dispatch(setSortingTitleState("From expensive to cheap"));
        } else if (sortingCheckboxState.cheapToExpensive) {
            handleSortByField("queensPrice", true);
            dispatch(setSortingTitleState("From cheap to expensive"));
        } else if (sortingCheckboxState.byPopularyty) {
            handleSortByField("popularity", false);
            dispatch(setSortingTitleState("By popularity"));
        } else if (sortingCheckboxState.inStock) {
            handleSortByField("inStock", false);
            dispatch(setSortingTitleState("In stock"));
        } else {
            handleSortByField("id", true);
            dispatch(setSortingTitleState("Default"));
        }
        dispatch(closeTabletSortingState());
        document.body.style.overflow = "auto";
    };

    return (
        <div>
            <div className="sorting-list">
                <div className="checkbox-row row">
                    <input
                        className="checkbox"
                        type="checkbox"
                        id="default"
                        checked={sortingCheckboxState.default}
                        onChange={onDefaultClick}
                    />
                    <label htmlFor="default">Default</label>
                </div>
                <div className="checkbox-row row">
                    <input
                        className="checkbox"
                        type="checkbox"
                        id="from-expensive-to-cheap"
                        checked={sortingCheckboxState.expensiveToCheap}
                        onChange={onExpensiveClick}
                    />
                    <label htmlFor="from-expensive-to-cheap">
                        From expensive to cheap
                    </label>
                </div>
                <div className="checkbox-row row">
                    <input
                        className="checkbox"
                        type="checkbox"
                        id="from-cheap-to-expensive"
                        checked={sortingCheckboxState.cheapToExpensive}
                        onChange={onCheapClick}
                    />
                    <label htmlFor="from-cheap-to-expensive">
                        From cheap to expensive
                    </label>
                </div>
                <div className="checkbox-row row">
                    <input
                        className="checkbox"
                        type="checkbox"
                        id="by-popularity"
                        checked={sortingCheckboxState.byPopularyty}
                        onChange={onPopularityClick}
                    />
                    <label htmlFor="by-popularity">By popularity</label>
                </div>
                <div className="checkbox-row row">
                    <input
                        className="checkbox"
                        type="checkbox"
                        id="in-stock"
                        checked={sortingCheckboxState.inStock}
                        onChange={onInStockClick}
                    />
                    <label htmlFor="in-stock">In stock</label>
                </div>
            </div>
            <button
                className="tablet-sorting-btn"
                onClick={onApplySortingClick}
            >
                Apply
            </button>
        </div>
    );
};

export default SortingTabletComponent;
