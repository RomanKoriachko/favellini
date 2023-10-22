import ItemComponent from "../../components/ItemComponent/ItemComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import itemsArray from "./itemsArray";
import "./CollectionPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {};

const CollectionPage = (props: Props) => {
    // Open Sorting menu

    const [sortingState, setSortingState] = useState("");
    const openSortingList = () => {
        sortingState === "" ? setSortingState("open") : setSortingState("");
    };

    // Open filter dropdown

    const [sizeMenuState, setSizeMenuState] = useState("open");
    const changeSizeMenuState = () => {
        sizeMenuState === "" ? setSizeMenuState("open") : setSizeMenuState("");
    };

    const [colorMenuState, setColorMenuState] = useState("open");
    const changeColorMenuState = () => {
        colorMenuState === ""
            ? setColorMenuState("open")
            : setColorMenuState("");
    };

    const [priceMenuState, setPriceMenuState] = useState("open");
    const changePriceMenuState = () => {
        priceMenuState === ""
            ? setPriceMenuState("open")
            : setPriceMenuState("");
    };

    // Price component

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(3000);

    function log(value: number | number[]) {
        if (typeof value === "object") {
            if (!isNaN(value[0]) && value[0] <= value[1]) {
                setMinPrice(value[0]);
            }
            if (!isNaN(value[1]) && value[1] >= value[0]) {
                setMaxPrice(value[1]);
            }
        }
    }

    // Sorting

    const [itemsArrState, setItemsArrState] = useState(itemsArray);
    const [sortingTitleState, setSortingTitleState] =
        useState<string>("Default");

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
        const availableItems = itemsArrState.filter((item) => item.inStock);
        const unavailableItems = itemsArrState.filter((item) => !item.inStock);

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

        setItemsArrState(sortedItems);
    };

    useEffect(() => {
        handleSortByField("inStock", false);
        // eslint-disable-next-line
    }, []);

    const sortByLowerPrice = () => {
        handleSortByField("queensPrice", true);
        setSortingTitleState("From cheap to expensive");
        setSortingState("");
    };
    const sortByHighestPrice = () => {
        handleSortByField("queensPrice", false);
        setSortingTitleState("From expensive to cheap");
        setSortingState("");
    };
    const sortByPopularity = () => {
        handleSortByField("popularity", false);
        setSortingTitleState("By popularity");
        setSortingState("");
    };
    const sortByStock = () => {
        handleSortByField("inStock", false);
        setSortingTitleState("In stock");
        setSortingState("");
    };
    const sortByDefault = () => {
        handleSortByField("id", true);
        setSortingTitleState("Default");
        setSortingState("");
    };

    // ------------------ Filters -----------------------

    const [categoriesState, setCategoriesState] = useState("All goods");

    const handleChangeCaterogy = (category: string) => {
        setCategoriesState(category);
        if (category !== "All goods") {
            const categoriesFiltred = itemsArrState.filter((item) => {
                return item.type === category.toLowerCase();
            });
            if (sortingTitleState === "From cheap to expensive") {
                sortByLowerPrice();
            } else if (sortingTitleState === "From expensive to cheap") {
                sortByHighestPrice();
            } else if (sortingTitleState === "By popularity") {
                sortByPopularity();
            }
            setItemsArrState(categoriesFiltred);
        } else {
            setItemsArrState(itemsArray);
            if (sortingTitleState === "From cheap to expensive") {
                sortByLowerPrice();
            } else if (sortingTitleState === "From expensive to cheap") {
                sortByHighestPrice();
            } else if (sortingTitleState === "By popularity") {
                sortByPopularity();
            }
        }
    };

    const [queenChecked, setQueenChecked] = useState(false);
    const [kingChecked, setKingChecked] = useState(false);

    const handleQueenCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQueenChecked(event.target.checked);
    };
    const handleKingCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setKingChecked(event.target.checked);
    };

    const [whiteChecked, setWhiteChecked] = useState(false);
    const [blackChecked, setBlackChecked] = useState(false);
    const [blueChecked, setBlueChecked] = useState(false);
    const [brownChecked, setBrownChecked] = useState(false);
    const [greenChecked, setGreenChecked] = useState(false);
    const [grayChecked, setGrayChecked] = useState(false);
    const [orangeChecked, setOrangeChecked] = useState(false);
    const [beigeChecked, setBeigeChecked] = useState(false);
    const [violetChecked, setVioletChecked] = useState(false);
    const [bordeauxChecked, setBordeauChecked] = useState(false);
    const [pinkChecked, setPinkChecked] = useState(false);
    const [yellowChecked, setYellowChecked] = useState(false);

    const handleWhiteCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setWhiteChecked(event.target.checked);
    };
    const handleBlackCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBlackChecked(event.target.checked);
    };
    const handleBlueCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBlueChecked(event.target.checked);
    };
    const handleBrownnCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBrownChecked(event.target.checked);
    };
    const handleGreenCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setGreenChecked(event.target.checked);
    };
    const handleGrayCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setGrayChecked(event.target.checked);
    };
    const handleOrangeCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setOrangeChecked(event.target.checked);
    };
    const handleBeigeCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBeigeChecked(event.target.checked);
    };
    const handleVioletCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setVioletChecked(event.target.checked);
    };
    const handleBordeauxCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBordeauChecked(event.target.checked);
    };
    const handlePinkCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPinkChecked(event.target.checked);
    };
    const handleYellowCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setYellowChecked(event.target.checked);
    };

    const handleApplyFilters = () => {
        let filteredItems = itemsArray.filter((item) => item.inStock);

        // Фільтр за ціною (queensPrice)
        if (minPrice !== 0 || maxPrice !== 3000) {
            filteredItems = filteredItems.filter((item) => {
                return (
                    item.queensPrice >= minPrice && item.queensPrice <= maxPrice
                );
            });
        }

        // Фільтр за розміром (queenSize та kingSize)
        if (queenChecked || kingChecked) {
            filteredItems = filteredItems.filter((item) => {
                return (
                    (queenChecked && item.queenSize) ||
                    (kingChecked && item.kingSize)
                );
            });
        }

        // Фільтр за кольором
        if (
            whiteChecked ||
            blackChecked ||
            blueChecked ||
            brownChecked ||
            greenChecked ||
            grayChecked ||
            orangeChecked ||
            beigeChecked ||
            violetChecked ||
            bordeauxChecked ||
            pinkChecked ||
            yellowChecked
        ) {
            filteredItems = filteredItems.filter((item) => {
                return (
                    (whiteChecked &&
                        (item.color === "white" ||
                            item.color === "grey stripe")) ||
                    (blackChecked && item.color === "charcoal gray") ||
                    (blueChecked &&
                        (item.color === "young blue" ||
                            item.color === "charming blue")) ||
                    (brownChecked &&
                        (item.color === "skin color" ||
                            item.color === "earth brown")) ||
                    (greenChecked &&
                        (item.color === "light green" ||
                            item.color === "forest" ||
                            item.color === "sage")) ||
                    (grayChecked &&
                        (item.color === "silver grey" ||
                            item.color === "steel gray" ||
                            item.color === "steel gray" ||
                            item.color === "dark gray" ||
                            item.color === "charcoal gray" ||
                            item.color === "gray stripe")) ||
                    (orangeChecked && item.color === "orange") ||
                    (beigeChecked &&
                        (item.color === "shell" ||
                            item.color === "skin color")) ||
                    (violetChecked && item.color === "violet") ||
                    (bordeauxChecked && item.color === "bordeaux") ||
                    (pinkChecked &&
                        (item.color === "young pink" ||
                            item.color === "rose pink" ||
                            item.color === "light pink"))
                );
            });
        }

        if (sortingTitleState === "From cheap to expensive") {
            filteredItems.sort((a, b) => {
                return (a["queensPrice"] as any) - (b["queensPrice"] as any);
            });
        } else if (sortingTitleState === "From expensive to cheap") {
            filteredItems.sort((a, b) => {
                return (b["queensPrice"] as any) - (a["queensPrice"] as any);
            });
        } else if (sortingTitleState === "By popularity") {
            filteredItems.sort((a, b) => {
                return (b["popularity"] as any) - (a["popularity"] as any);
            });
        }

        // console.log(filteredItems);

        setItemsArrState(filteredItems);
    };

    const onClearAllFiltersClick = () => {
        handleChangeCaterogy("All goods");
        setQueenChecked(false);
        setKingChecked(false);
        setWhiteChecked(false);
        setBlackChecked(false);
        setBlueChecked(false);
        setBrownChecked(false);
        setGreenChecked(false);
        setGrayChecked(false);
        setOrangeChecked(false);
        setBeigeChecked(false);
        setVioletChecked(false);
        setBordeauChecked(false);
        setPinkChecked(false);
        setYellowChecked(false);
        setMinPrice(0);
        setMaxPrice(3000);

        let filteredItems = itemsArray;
        if (sortingTitleState === "From cheap to expensive") {
            filteredItems.sort((a, b) => {
                return (a["queensPrice"] as any) - (b["queensPrice"] as any);
            });
            setItemsArrState(itemsArray);
        } else if (sortingTitleState === "From expensive to cheap") {
            filteredItems.sort((a, b) => {
                return (b["queensPrice"] as any) - (a["queensPrice"] as any);
            });
            setItemsArrState(itemsArray);
        } else if (sortingTitleState === "By popularity") {
            filteredItems.sort((a, b) => {
                return (b["popularity"] as any) - (a["popularity"] as any);
            });
            setItemsArrState(itemsArray);
        } else {
            setItemsArrState(itemsArray);
        }
    };

    // console.log(itemsArrState);

    return (
        <main className="main">
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
                    <div className="collection-wrapper">
                        <div className="filter">
                            <div className="filter-block categories-filter">
                                <p className="filter-block-title">Categories</p>
                                <p
                                    className={`category ${
                                        categoriesState === "All goods"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleChangeCaterogy("All goods")
                                    }
                                >
                                    All goods
                                </p>
                                <p
                                    className={`category ${
                                        categoriesState === "Bedding Set"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleChangeCaterogy("Bedding Set")
                                    }
                                >
                                    Bedding Set
                                </p>
                                <p className="category disable-category">
                                    Robes <span>SOON</span>
                                </p>
                                <p className="category disable-category">
                                    Accessories <span>SOON</span>
                                </p>
                            </div>
                            <div className="filter-block selected-filter">
                                <p className="filter-block-title">Selected</p>
                                <div
                                    className="row selected-filter-row clear-all-btn"
                                    onClick={onClearAllFiltersClick}
                                >
                                    <div className="delite-img"></div>
                                    <p>Clear all filters</p>
                                </div>
                            </div>
                            <div className="filter-block size-filter">
                                <div
                                    className="row filter-title-row"
                                    onClick={changeSizeMenuState}
                                >
                                    <p className="filter-block-title">Size</p>
                                    <div
                                        className={`arrow ${sizeMenuState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`filter-content-wrapper ${sizeMenuState}`}
                                >
                                    <div className="margin"></div>
                                    <div className="checkbox-wrapper">
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="queen"
                                                checked={queenChecked}
                                                onChange={
                                                    handleQueenCheckboxChange
                                                }
                                            />
                                            <label htmlFor="queen">Queen</label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="king"
                                                checked={kingChecked}
                                                onChange={
                                                    handleKingCheckboxChange
                                                }
                                            />
                                            <label htmlFor="king">King</label>
                                        </div>
                                    </div>
                                    <button
                                        className="filter-btn"
                                        onClick={handleApplyFilters}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div className="filter-block color-filter">
                                <div
                                    className="row filter-title-row"
                                    onClick={changeColorMenuState}
                                >
                                    <p className="filter-block-title">Color</p>
                                    <div
                                        className={`arrow ${colorMenuState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`filter-content-wrapper ${colorMenuState}`}
                                >
                                    <div className="margin"></div>
                                    <div className="checkbox-wrapper">
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="white"
                                                checked={whiteChecked}
                                                onChange={
                                                    handleWhiteCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="white"
                                            >
                                                <div className="color-example white"></div>
                                                White
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="black"
                                                checked={blackChecked}
                                                onChange={
                                                    handleBlackCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="black"
                                            >
                                                <div className="color-example black"></div>
                                                Black
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="blue"
                                                checked={blueChecked}
                                                onChange={
                                                    handleBlueCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="blue"
                                            >
                                                <div className="color-example blue"></div>
                                                Blue
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="brown"
                                                checked={brownChecked}
                                                onChange={
                                                    handleBrownnCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="brown"
                                            >
                                                <div className="color-example brown"></div>
                                                Brown
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="green"
                                                checked={greenChecked}
                                                onChange={
                                                    handleGreenCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="green"
                                            >
                                                <div className="color-example green"></div>
                                                Green
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="Gray"
                                                checked={grayChecked}
                                                onChange={
                                                    handleGrayCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="Gray"
                                            >
                                                <div className="color-example gray"></div>
                                                Gray
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="orange"
                                                checked={orangeChecked}
                                                onChange={
                                                    handleOrangeCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="orange"
                                            >
                                                <div className="color-example orange"></div>
                                                Orange
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="beige"
                                                checked={beigeChecked}
                                                onChange={
                                                    handleBeigeCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="beige"
                                            >
                                                <div className="color-example beige"></div>
                                                Beige
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="violet"
                                                checked={violetChecked}
                                                onChange={
                                                    handleVioletCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="violet"
                                            >
                                                <div className="color-example violet"></div>
                                                Violet
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="bordeaux"
                                                checked={bordeauxChecked}
                                                onChange={
                                                    handleBordeauxCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="bordeaux"
                                            >
                                                <div className="color-example bordeaux"></div>
                                                Bordeaux
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="pink"
                                                checked={pinkChecked}
                                                onChange={
                                                    handlePinkCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="pink"
                                            >
                                                <div className="color-example pink"></div>
                                                Pink
                                            </label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="yellow"
                                                checked={yellowChecked}
                                                onChange={
                                                    handleYellowCheckboxChange
                                                }
                                            />
                                            <label
                                                className="row color-example-row"
                                                htmlFor="yellow"
                                            >
                                                <div className="color-example yellow"></div>
                                                Yellow
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        className="filter-btn"
                                        onClick={handleApplyFilters}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div className="filter-block price-filter">
                                <div
                                    className="row filter-title-row"
                                    onClick={changePriceMenuState}
                                >
                                    <p className="filter-block-title">Price</p>
                                    <div
                                        className={`arrow ${priceMenuState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`filter-content-wrapper ${priceMenuState}`}
                                >
                                    <div className="margin"></div>
                                    <div className="input-wrapper">
                                        <div className="row input-row">
                                            <div>
                                                <input
                                                    className="price-input"
                                                    type="text"
                                                    maxLength={4}
                                                    value={minPrice}
                                                    onChange={(e) => {
                                                        const newMinPrice =
                                                            parseInt(
                                                                e.target.value,
                                                                10
                                                            );
                                                        if (
                                                            !isNaN(
                                                                newMinPrice
                                                            ) &&
                                                            newMinPrice <
                                                                maxPrice
                                                        ) {
                                                            setMinPrice(
                                                                newMinPrice
                                                            );
                                                        }
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key ===
                                                            "Backspace"
                                                        ) {
                                                            e.preventDefault();
                                                            if (minPrice > 0) {
                                                                const newMinPrice =
                                                                    Math.floor(
                                                                        minPrice /
                                                                            10
                                                                    );
                                                                setMinPrice(
                                                                    Math.max(
                                                                        0,
                                                                        newMinPrice
                                                                    )
                                                                );
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="price-input-line"></div>
                                            <div>
                                                <input
                                                    className="price-input"
                                                    type="text"
                                                    maxLength={5}
                                                    value={maxPrice}
                                                    onChange={(e) => {
                                                        const newMaxPrice =
                                                            parseInt(
                                                                e.target.value,
                                                                10
                                                            );
                                                        if (
                                                            !isNaN(newMaxPrice)
                                                        ) {
                                                            setMaxPrice(
                                                                newMaxPrice
                                                            );
                                                        }
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key ===
                                                            "Backspace"
                                                        ) {
                                                            if (maxPrice > 0) {
                                                                e.preventDefault();
                                                                const newMaxPrice =
                                                                    Math.floor(
                                                                        maxPrice /
                                                                            10
                                                                    );
                                                                setMaxPrice(
                                                                    Math.max(
                                                                        0,
                                                                        newMaxPrice
                                                                    )
                                                                );
                                                            }
                                                        } else if (
                                                            e.key.length ===
                                                                1 &&
                                                            !/^\d+$/.test(e.key)
                                                        ) {
                                                            e.preventDefault();
                                                            const newValue =
                                                                maxPrice
                                                                    .toString()
                                                                    .slice(
                                                                        0,
                                                                        -1
                                                                    ) +
                                                                "0" +
                                                                e.key;
                                                            setMaxPrice(
                                                                parseInt(
                                                                    newValue,
                                                                    10
                                                                )
                                                            );
                                                            const input =
                                                                e.target as HTMLInputElement;
                                                            const caretPos =
                                                                input.selectionStart;
                                                            if (
                                                                caretPos !==
                                                                null
                                                            ) {
                                                                input.setSelectionRange(
                                                                    caretPos,
                                                                    caretPos + 1
                                                                );
                                                            }
                                                        }
                                                    }}
                                                    onBlur={() => {
                                                        if (maxPrice > 3000) {
                                                            setMaxPrice(3000);
                                                        }
                                                        if (
                                                            maxPrice < minPrice
                                                        ) {
                                                            setMaxPrice(
                                                                minPrice
                                                            );
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="price-slider">
                                            <Slider
                                                range
                                                min={0}
                                                max={3000}
                                                onChange={log}
                                                value={[minPrice, maxPrice]}
                                                allowCross={false}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="filter-btn"
                                        onClick={handleApplyFilters}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
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
                    </div>
                </div>
                <HistoryComponent />
                <PakingComponent />
            </div>
        </main>
    );
};

export default CollectionPage;
