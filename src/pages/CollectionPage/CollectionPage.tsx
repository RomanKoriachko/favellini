import ItemComponent from "../../components/ItemComponent/ItemComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import itemsArray from "./itemsArray";
import "./CollectionPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import StickyBox from "react-sticky-box";
import { Helmet } from "react-helmet-async";

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

    // Sorting

    const [itemsArrState, setItemsArrState] = useState(itemsArray);

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

        setItemsArrState(sortedItems);
        // eslint-disable-next-line
    }, []);

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

        setItemsArrState(sortedItems);
    };

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
        onClearAllFiltersClick();

        let filteredItems = itemsArray;

        if (category !== "All goods") {
            filteredItems = itemsArray.filter((item) => {
                return item.type === category.toLowerCase();
            });
        }

        if (sortingTitleState === "From cheap to expensive") {
            filteredItems.sort((a, b) => a.queensPrice - b.queensPrice);
        } else if (sortingTitleState === "From expensive to cheap") {
            filteredItems.sort((a, b) => b.queensPrice - a.queensPrice);
        } else if (sortingTitleState === "By popularity") {
            filteredItems.sort((a, b) => b.popularity - a.popularity);
        }

        setItemsArrState(filteredItems);
    };

    const [queenChecked, setQueenChecked] = useState(false);
    const [kingChecked, setKingChecked] = useState(false);
    const [localQueenChecked, setLocalQueenChecked] = useState(false);
    const [localKingChecked, setLocalKingChecked] = useState(false);

    const handleQueenCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalQueenChecked(event.target.checked);
    };
    const handleKingCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalKingChecked(event.target.checked);
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

    const [localWhiteChecked, setLocalWhiteChecked] = useState(false);
    const [localBlackChecked, setLocalBlackChecked] = useState(false);
    const [localBlueChecked, setLocalBlueChecked] = useState(false);
    const [localBrownChecked, setLocalBrownChecked] = useState(false);
    const [localGreenChecked, setLocalGreenChecked] = useState(false);
    const [localGrayChecked, setLocalGrayChecked] = useState(false);
    const [localOrangeChecked, setLocalOrangeChecked] = useState(false);
    const [localBeigeChecked, setLocalBeigeChecked] = useState(false);
    const [localVioletChecked, setLocalVioletChecked] = useState(false);
    const [localBordeauxChecked, setLocalBordeauChecked] = useState(false);
    const [localPinkChecked, setLocalPinkChecked] = useState(false);
    const [localYellowChecked, setLocalYellowChecked] = useState(false);

    const handleWhiteCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalWhiteChecked(event.target.checked);
    };
    const handleBlackCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalBlackChecked(event.target.checked);
    };
    const handleBlueCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalBlueChecked(event.target.checked);
    };
    const handleBrownnCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalBrownChecked(event.target.checked);
    };
    const handleGreenCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalGreenChecked(event.target.checked);
    };
    const handleGrayCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalGrayChecked(event.target.checked);
    };
    const handleOrangeCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalOrangeChecked(event.target.checked);
    };
    const handleBeigeCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalBeigeChecked(event.target.checked);
    };
    const handleVioletCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalVioletChecked(event.target.checked);
    };
    const handleBordeauxCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalBordeauChecked(event.target.checked);
    };
    const handlePinkCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalPinkChecked(event.target.checked);
    };
    const handleYellowCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLocalYellowChecked(event.target.checked);
    };

    // Price component

    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(3000);
    const [localMinPrice, setLocalMinPrice] = useState<number>(0);
    const [localMaxPrice, setLocalMaxPrice] = useState<number>(3000);

    function log(value: number | number[]) {
        if (typeof value === "object") {
            if (!isNaN(value[0]) && value[0] <= value[1]) {
                setLocalMinPrice(value[0]);
            }
            if (!isNaN(value[1]) && value[1] >= value[0]) {
                setLocalMaxPrice(value[1]);
            }
        }
    }

    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleFilterToggle = (filterName: string, isActive: boolean) => {
        if (isActive && !selectedFilters.includes(filterName)) {
            setSelectedFilters((prevFilters) => [...prevFilters, filterName]);
        }
        if (!isActive) {
            setSelectedFilters((prevFilters) =>
                prevFilters.filter((filter) => filter !== filterName)
            );
        }
    };

    const filtrationBody = () => {
        let filteredItems = itemsArray.filter((item) => item.inStock);

        // Size filter

        if (queenChecked || kingChecked) {
            filteredItems = filteredItems.filter((item) => {
                return (
                    (queenChecked && item.queenSize) ||
                    (kingChecked && item.kingSize)
                );
            });
        }
        handleFilterToggle("Queen", queenChecked);
        handleFilterToggle("King", kingChecked);

        // Color filter

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
                            item.color === "gray stripe")) ||
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
                        (item.color === "silver gray" ||
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
        handleFilterToggle("White", whiteChecked);
        handleFilterToggle("Black", blackChecked);
        handleFilterToggle("Blue", blueChecked);
        handleFilterToggle("Brown", brownChecked);
        handleFilterToggle("Green", greenChecked);
        handleFilterToggle("Gray", grayChecked);
        handleFilterToggle("Orange", orangeChecked);
        handleFilterToggle("Beige", beigeChecked);
        handleFilterToggle("Violet", violetChecked);
        handleFilterToggle("Bordeaux", bordeauxChecked);
        handleFilterToggle("Pink", pinkChecked);
        handleFilterToggle("Yellow", yellowChecked);

        // Price filter
        if (minPrice !== 0 || maxPrice !== 3000) {
            filteredItems = filteredItems.filter((item) => {
                return (
                    item.queensPrice >= minPrice && item.queensPrice <= maxPrice
                );
            });
        }
        handleFilterToggle(`from ${minPrice.toString()}€`, minPrice !== 0);
        handleFilterToggle(`to ${maxPrice.toString()}€`, maxPrice !== 3000);

        if (categoriesState === "Bedding Set") {
            filteredItems = filteredItems.filter((item) => {
                return item.type === "bedding set";
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

        setItemsArrState(filteredItems);
    };

    useEffect(() => {
        filtrationBody();
        // eslint-disable-next-line
    }, [
        queenChecked,
        kingChecked,
        whiteChecked,
        blackChecked,
        blueChecked,
        brownChecked,
        greenChecked,
        grayChecked,
        orangeChecked,
        beigeChecked,
        violetChecked,
        bordeauxChecked,
        pinkChecked,
        yellowChecked,
        minPrice,
        maxPrice,
    ]);

    const handeleDeliteSelectedFilter = (filterName: string) => {
        setSelectedFilters((prevFilters) =>
            prevFilters.filter((filter) => filter !== filterName)
        );

        if (filterName === "Queen") {
            setQueenChecked(false);
            setLocalQueenChecked(false);
        }
        if (filterName === "King") {
            setKingChecked(false);
            setLocalKingChecked(false);
        }

        if (filterName === "White") {
            setWhiteChecked(false);
            setLocalWhiteChecked(false);
        }
        if (filterName === "Black") {
            setBlackChecked(false);
            setLocalBlackChecked(false);
        }
        if (filterName === "Blue") {
            setBlueChecked(false);
            setLocalBlueChecked(false);
        }
        if (filterName === "Brown") {
            setBrownChecked(false);
            setLocalBrownChecked(false);
        }
        if (filterName === "Green") {
            setGreenChecked(false);
            setLocalGreenChecked(false);
        }
        if (filterName === "Gray") {
            setGrayChecked(false);
            setLocalGrayChecked(false);
        }
        if (filterName === "Orange") {
            setOrangeChecked(false);
            setLocalOrangeChecked(false);
        }
        if (filterName === "Beige") {
            setBeigeChecked(false);
            setLocalBeigeChecked(false);
        }
        if (filterName === "Violet") {
            setVioletChecked(false);
            setLocalVioletChecked(false);
        }
        if (filterName === "Bordeaux") {
            setBordeauChecked(false);
            setLocalBordeauChecked(false);
        }
        if (filterName === "Pink") {
            setPinkChecked(false);
            setLocalPinkChecked(false);
        }
        if (filterName === "Yellow") {
            setYellowChecked(false);
            setLocalYellowChecked(false);
        }

        if (filterName.includes("from")) {
            setMinPrice(0);
            setLocalMinPrice(0);
        }
        if (filterName.includes("to")) {
            setMaxPrice(3000);
            setLocalMaxPrice(3000);
        }
    };

    const handleApplyFilters = () => {
        setQueenChecked(localQueenChecked);
        setKingChecked(localKingChecked);
        setWhiteChecked(localWhiteChecked);
        setBlackChecked(localBlackChecked);
        setBlueChecked(localBlueChecked);
        setBrownChecked(localBrownChecked);
        setGreenChecked(localGreenChecked);
        setGrayChecked(localGrayChecked);
        setOrangeChecked(localOrangeChecked);
        setBeigeChecked(localBeigeChecked);
        setVioletChecked(localVioletChecked);
        setBordeauChecked(localBordeauxChecked);
        setPinkChecked(localPinkChecked);
        setYellowChecked(localYellowChecked);
        setMinPrice(localMinPrice);
        setMaxPrice(localMaxPrice);

        filtrationBody();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const onClearAllFiltersClick = () => {
        setLocalQueenChecked(false);
        setLocalQueenChecked(false);
        setLocalKingChecked(false);
        setLocalWhiteChecked(false);
        setLocalBlackChecked(false);
        setLocalBlueChecked(false);
        setLocalBrownChecked(false);
        setLocalGreenChecked(false);
        setLocalGrayChecked(false);
        setLocalOrangeChecked(false);
        setLocalBeigeChecked(false);
        setLocalVioletChecked(false);
        setLocalBordeauChecked(false);
        setLocalPinkChecked(false);
        setLocalYellowChecked(false);
        setLocalMinPrice(0);
        setLocalMaxPrice(3000);

        setQueenChecked(false);
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

        setSelectedFilters([]);

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

    const colorsObj = [
        "White",
        "Black",
        "Blue",
        "Brown",
        "Green",
        "Gray",
        "Orange",
        "Beige",
        "Violet",
        "Bordeaux",
        "Pink",
        "Yellow",
    ];

    return (
        <main className="main">
            <Helmet>
                <title>Favellini - Collection</title>
                <meta
                    name="description"
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
                    <div className="collection-wrapper">
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div className="filter">
                                <div className="filter-block categories-filter">
                                    <p className="filter-block-title">
                                        Categories
                                    </p>
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
                                    <p className="filter-block-title">
                                        Selected
                                    </p>
                                    <div
                                        className="row selected-filter-row clear-all-btn"
                                        onClick={onClearAllFiltersClick}
                                    >
                                        <div className="delite-img"></div>
                                        <p>Clear all filters</p>
                                    </div>
                                    {selectedFilters.map((selectedFilter) => (
                                        <div
                                            key={selectedFilter}
                                            className="row selected-filter-row"
                                        >
                                            <div
                                                className="delite-img"
                                                onClick={() =>
                                                    handeleDeliteSelectedFilter(
                                                        selectedFilter
                                                    )
                                                }
                                            ></div>
                                            {colorsObj.map((color) =>
                                                selectedFilter.includes(
                                                    color
                                                ) ? (
                                                    <div
                                                        key={color}
                                                        className={`color-example ${color.toLowerCase()}`}
                                                    ></div>
                                                ) : undefined
                                            )}
                                            <p>{selectedFilter}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="filter-block size-filter">
                                    <div
                                        className="row filter-title-row"
                                        onClick={changeSizeMenuState}
                                    >
                                        <p className="filter-block-title">
                                            Size
                                        </p>
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
                                                    checked={localQueenChecked}
                                                    onChange={
                                                        handleQueenCheckboxChange
                                                    }
                                                />
                                                <label htmlFor="queen">
                                                    Queen
                                                </label>
                                            </div>
                                            <div className="checkbox-row">
                                                <input
                                                    className="checkbox"
                                                    type="checkbox"
                                                    id="king"
                                                    checked={localKingChecked}
                                                    onChange={
                                                        handleKingCheckboxChange
                                                    }
                                                />
                                                <label htmlFor="king">
                                                    King
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
                                <div className="filter-block color-filter">
                                    <div
                                        className="row filter-title-row"
                                        onClick={changeColorMenuState}
                                    >
                                        <p className="filter-block-title">
                                            Color
                                        </p>
                                        <div
                                            className={`arrow ${colorMenuState}`}
                                        ></div>
                                    </div>
                                    <div
                                        className={`filter-content-wrapper ${colorMenuState}`}
                                    >
                                        <div className="margin"></div>
                                        <p className="color-description">
                                            Product color may slightly vary due
                                            to photographic lighting sources or
                                            your monitor settings.
                                        </p>
                                        <div className="checkbox-wrapper">
                                            <div className="checkbox-row">
                                                <input
                                                    className="checkbox"
                                                    type="checkbox"
                                                    id="white"
                                                    checked={localWhiteChecked}
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
                                                    checked={localBlackChecked}
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
                                                    checked={localBlueChecked}
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
                                                    checked={localBrownChecked}
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
                                                    checked={localGreenChecked}
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
                                                    checked={localGrayChecked}
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
                                                    checked={localOrangeChecked}
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
                                                    checked={localBeigeChecked}
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
                                                    checked={localVioletChecked}
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
                                                    checked={
                                                        localBordeauxChecked
                                                    }
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
                                                    checked={localPinkChecked}
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
                                                    checked={localYellowChecked}
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
                                        <p className="filter-block-title">
                                            Price
                                        </p>
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
                                                        value={localMinPrice}
                                                        onChange={(e) => {
                                                            const newMinPrice =
                                                                parseInt(
                                                                    e.target
                                                                        .value,
                                                                    10
                                                                );
                                                            if (
                                                                !isNaN(
                                                                    newMinPrice
                                                                ) &&
                                                                newMinPrice <
                                                                    localMaxPrice
                                                            ) {
                                                                setLocalMinPrice(
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
                                                                if (
                                                                    localMinPrice >
                                                                    0
                                                                ) {
                                                                    const newMinPrice =
                                                                        Math.floor(
                                                                            localMinPrice /
                                                                                10
                                                                        );
                                                                    setLocalMinPrice(
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
                                                        value={localMaxPrice}
                                                        onChange={(e) => {
                                                            const newMaxPrice =
                                                                parseInt(
                                                                    e.target
                                                                        .value,
                                                                    10
                                                                );
                                                            if (
                                                                !isNaN(
                                                                    newMaxPrice
                                                                )
                                                            ) {
                                                                setLocalMaxPrice(
                                                                    newMaxPrice
                                                                );
                                                            }
                                                        }}
                                                        onKeyDown={(e) => {
                                                            if (
                                                                e.key ===
                                                                "Backspace"
                                                            ) {
                                                                if (
                                                                    localMaxPrice >
                                                                    0
                                                                ) {
                                                                    e.preventDefault();
                                                                    const newMaxPrice =
                                                                        Math.floor(
                                                                            localMaxPrice /
                                                                                10
                                                                        );
                                                                    setLocalMaxPrice(
                                                                        Math.max(
                                                                            0,
                                                                            newMaxPrice
                                                                        )
                                                                    );
                                                                }
                                                            } else if (
                                                                e.key.length ===
                                                                    1 &&
                                                                !/^\d+$/.test(
                                                                    e.key
                                                                )
                                                            ) {
                                                                e.preventDefault();
                                                                const newValue =
                                                                    localMaxPrice
                                                                        .toString()
                                                                        .slice(
                                                                            0,
                                                                            -1
                                                                        ) +
                                                                    "0" +
                                                                    e.key;
                                                                setLocalMaxPrice(
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
                                                                        caretPos +
                                                                            1
                                                                    );
                                                                }
                                                            }
                                                        }}
                                                        onBlur={() => {
                                                            if (
                                                                localMaxPrice >
                                                                3000
                                                            ) {
                                                                setLocalMaxPrice(
                                                                    3000
                                                                );
                                                            }
                                                            if (
                                                                localMaxPrice <
                                                                localMinPrice
                                                            ) {
                                                                setLocalMaxPrice(
                                                                    localMinPrice
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
                                                    value={[
                                                        localMinPrice,
                                                        localMaxPrice,
                                                    ]}
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
