import ItemComponent from "../../components/ItemComponent/ItemComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import itemsArray from "./itemsArray";
import "./CollectionPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import { useState } from "react";
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

    // Price filter

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);

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
                            <p>Sorting: defauilt</p>
                            <div className={`arrow ${sortingState}`}></div>
                        </div>
                        <div className={`sorting-list ${sortingState}`}>
                            <p>From expensive to cheap</p>
                            <p>From cheap to expensive</p>
                            <p>By popularity</p>
                            <p>In stock</p>
                        </div>
                    </div>
                    <div className="collection-wrapper">
                        <div className="filter">
                            <div className="filter-block categories-filter">
                                <p className="filter-block-title">Categories</p>
                                <p className="category">All goods</p>
                                <p className="category">Bedding Set</p>
                                <p className="disable-category category">
                                    Robes <span>SOON</span>
                                </p>
                                <p className="disable-category category">
                                    Accessories <span>SOON</span>
                                </p>
                            </div>
                            <div className="filter-block categories-filter">
                                <p className="filter-block-title">Selected</p>
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
                                            />
                                            <label htmlFor="queen">Queen</label>
                                        </div>
                                        <div className="checkbox-row">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                id="king"
                                            />
                                            <label htmlFor="king">King</label>
                                        </div>
                                    </div>
                                    <button className="filter-btn">
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
                                    <button className="filter-btn">
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div className="filter-block price-filter">
                                <div
                                    className="row filter-title-row"
                                    onClick={changePriceMenuState}
                                >
                                    <p className="filter-block-title">Size</p>
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
                                                    maxLength={4}
                                                    value={maxPrice}
                                                    onChange={(e) => {
                                                        const newMaxPrice =
                                                            parseInt(
                                                                e.target.value,
                                                                10
                                                            );
                                                        if (
                                                            !isNaN(
                                                                newMaxPrice
                                                            ) &&
                                                            newMaxPrice >
                                                                minPrice
                                                        ) {
                                                            setMaxPrice(
                                                                newMaxPrice
                                                            );
                                                        }
                                                    }}
                                                    onBlur={() => {
                                                        if (maxPrice > 3000) {
                                                            setMaxPrice(3000);
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
                                    <button className="filter-btn">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
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
