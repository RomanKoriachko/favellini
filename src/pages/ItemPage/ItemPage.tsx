import { Link, useParams } from "react-router-dom";
import "./ItemPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import itemsArray from "../CollectionPage/itemsArray";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import { useState } from "react";
import PakingComponent from "../../components/PakingComponent/PakingComponent";
import { Helmet } from "react-helmet-async";
import { ItemType } from "../../redux/itemsReducer";

type Props = {};

const ItemPage = (props: Props) => {
    // Get current item data

    const { color } = useParams();
    let currentItem: ItemType = {
        id: 0,
        type: "",
        kingSize: false,
        queenSize: false,
        color: "",
        queensPrice: 0,
        kingsPrice: 0,
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        popularity: 0,
        inStock: false,
    };
    for (let i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].color === color) {
            currentItem = itemsArray[i];
        }
    }

    // Adding options in dropdown menu

    let tempArr = itemsArray.filter((item) => {
        return item.color !== currentItem.color;
    });

    // Open Dropdown color menu
    const [dropdownColorState, setDropdownColorState] = useState("");
    const openDropdown = () => {
        dropdownColorState === ""
            ? setDropdownColorState("open")
            : setDropdownColorState("");
    };
    const closeDropdown = () => {
        setDropdownColorState("");
    };

    // Open other dropdown
    const [dropdownDescriptionState, setDropdownDescriptionState] =
        useState("open");
    const openDescriptionDropdown = () => {
        dropdownDescriptionState === ""
            ? setDropdownDescriptionState("open")
            : setDropdownDescriptionState("");
    };

    const [dropdownSizeState, setDropdownSizeState] = useState("open");
    const openSizeDropdown = () => {
        dropdownSizeState === ""
            ? setDropdownSizeState("open")
            : setDropdownSizeState("");
    };

    const [dropdownMaterialsState, setDropdownMaterialsState] =
        useState("open");
    const openMaterialsDropdown = () => {
        dropdownMaterialsState === ""
            ? setDropdownMaterialsState("open")
            : setDropdownMaterialsState("");
    };

    return (
        <main className="main">
            <Helmet>
                <title>Favellini - Collection</title>
                <meta
                    name="description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
            </Helmet>
            <div className="item-page">
                <div className="header-bg"></div>
                <div className="container">
                    <PagesNavigation />
                    <div className="row item-content-wrapper">
                        <SliderComponent />
                        <div className="item-description">
                            <div className="row title-row">
                                <div>
                                    <p className="item-title">
                                        {currentItem.color}
                                    </p>
                                    <p className="item-type">
                                        {currentItem.type}
                                    </p>
                                </div>
                                <p className="item-title second-item-title">
                                    <span>from</span> {currentItem.queensPrice}€
                                </p>
                            </div>
                            <p className="item-text">Sizes:</p>
                            <div className="row sizes-row">
                                <p className="item-price">
                                    {currentItem.queensPrice}€{" "}
                                    <span>Queen size</span>
                                </p>
                                <p className="item-price">
                                    {currentItem.kingsPrice}€{" "}
                                    <span>King size</span>
                                </p>
                            </div>
                            <div className="row dropdown-title-row">
                                <p className="dropdown-title">Choose a color</p>
                                <p className="dropdown-title-description">
                                    Product color may slightly vary due to
                                    photographic lighting sources or your
                                    monitor settings.
                                </p>
                            </div>

                            <div className="dropdown-menu">
                                <div
                                    className="current-item row"
                                    onClick={openDropdown}
                                >
                                    {currentItem.color}
                                    <div
                                        className={`arrow-down ${dropdownColorState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`other-variants ${dropdownColorState}`}
                                >
                                    {tempArr.map((element, i) => (
                                        <Link
                                            key={i}
                                            className="dropdown-menu-item"
                                            to={`/collection/${element.color}`}
                                            onClick={closeDropdown}
                                        >
                                            {element.color}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <a
                                href="https://www.amazon.com/FAVELLINI-Symphony-Nature-Organically-Viscose/dp/B0CNLCNLRQ?ref_=ast_sto_dp"
                                target="_blank"
                            >
                                <button className="shop-btn">
                                    let's go to the store
                                </button>
                            </a>
                            <div className="product-description-block">
                                <div
                                    onClick={openDescriptionDropdown}
                                    className="row product-description-block-row"
                                >
                                    <p>product description</p>
                                    <div
                                        className={`arrow-down ${dropdownDescriptionState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`product-description-block-content ${dropdownDescriptionState}`}
                                >
                                    <div className="margin"></div>
                                    <div>
                                        Discover the Symphony Of Nature and
                                        experience a new level of luxury and
                                        comfort. Elevate your sleep to an
                                        unprecedented realm of relaxation with
                                        Favellini's Soft & Silky, Cooling,
                                        Lightweight, and Breathable bedding
                                        sets.
                                    </div>
                                    <div>
                                        Favellini's unwavering commitment to
                                        perfection permeates every facet of its
                                        work. The brand scrupulously selects
                                        materials, with a particular emphasis on
                                        100% organically grown bamboo viscose,
                                        renowned for its unmatched softness and
                                        eco-friendliness. Each thread is chosen
                                        with meticulous care, and every stitch
                                        attests to Favellini's dedication to
                                        quality.
                                    </div>
                                    <div>
                                        The result is a bedding collection that
                                        transcends ordinary comfort. Favellini's
                                        bedding collection is not mere fabric;
                                        it's an indulgence for the senses, with
                                        a velvety texture that tenderly caresses
                                        the skin, transforming every night's
                                        sleep into a regal experience.
                                    </div>
                                </div>
                            </div>
                            <div className="product-description-block">
                                <div
                                    onClick={openSizeDropdown}
                                    className="row product-description-block-row"
                                >
                                    <p>Size chart</p>
                                    <div
                                        className={`arrow-down ${dropdownSizeState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`product-description-block-content ${dropdownSizeState}`}
                                >
                                    <div className="margin"></div>
                                    <div className="size-table">
                                        <div className="table-title">Size</div>
                                        <div className="table-title">
                                            Duvet cover
                                        </div>
                                        <div className="table-title">Sheet</div>
                                        <div className="table-title">
                                            Pillowcase
                                        </div>
                                        <div>Queen size</div>
                                        <div>220x230</div>
                                        <div>231x259</div>
                                        <div>51x86</div>
                                        <div>King size</div>
                                        <div>264x234</div>
                                        <div>274x259</div>
                                        <div>51x102</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-description-block">
                                <div
                                    onClick={openMaterialsDropdown}
                                    className="row product-description-block-row"
                                >
                                    <p>product description</p>
                                    <div
                                        className={`arrow-down ${dropdownMaterialsState}`}
                                    ></div>
                                </div>
                                <div
                                    className={`product-description-block-content ${dropdownMaterialsState}`}
                                >
                                    <div className="margin"></div>
                                    <div>
                                        <p>
                                            <span>Easy Care & Durable:</span>{" "}
                                            Machine wash separately in cold
                                            water, gentle cycle, Do not bleach.
                                            No pilling, no shrink, no fade,
                                            labor tests show that the bamboo
                                            rayon sheets set keep its shape and
                                            stay brands new after 100+ wash
                                            cycles.
                                        </p>
                                        <p>
                                            <span>
                                                The Softest Luxury Sheets You'll
                                                Ever Own:
                                            </span>{" "}
                                            Rest like royalty in our
                                            ultra-smooth and incredibly soft
                                            sheets set. Includes 2 pillowcases,
                                            1 fitted sheet, and 1 flat sheet,
                                            which is packaged in a reusable
                                            storage box made from paper.
                                        </p>
                                        <p>
                                            <span>All-Season Comfort:</span> Our
                                            sheets set keeps you cool in the
                                            summer and toasty in the winter.
                                            These non pilling sheets adjust to
                                            the condition of the surroundings,
                                            so you can say goodbye to night
                                            sweats. Made for Sheet Connoisseurs:
                                            These extra deep pocket sheets have
                                            a tight twill weave that do not
                                            pill, so your luxury bedding lasts.
                                        </p>
                                        <p>
                                            <span>
                                                Sheet & Pillowcase Sets for
                                                Sensitive Skin:
                                            </span>{" "}
                                            Our hotel quality sheets and
                                            pillowcases are made with round
                                            fibers that are incredibly soft.
                                            This viscose derived from bamboo
                                            sheet set do not collect sweat and
                                            dirt, so you can stay comfortable
                                            all night long.
                                        </p>
                                        <p>
                                            <span>
                                                The Only Responsible
                                                Alternative:
                                            </span>
                                            Favellini is committed to providing
                                            every family with luxurious linens
                                            that last. Ethically made with
                                            organic Viscose derived from Bamboo,
                                            the fabrics in our bed sheets are
                                            OEKO-TEX standard 100 certified.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="care-wrapper">
                        <p className="care-title">
                            care and cleaning instructions
                        </p>
                        <div className="care-icons row">
                            <div className="care-icons-item care-icons-item-1">
                                <div className="care-icon care-icon-1"></div>
                                <p>Organic</p>
                            </div>
                            <div className="care-icons-item care-icons-item-2">
                                <div className="care-icon care-icon-2"></div>
                                <p>cooling</p>
                            </div>
                            <div className="care-icons-item care-icons-item-3">
                                <div className="care-icon care-icon-3"></div>
                                <p>breathable</p>
                            </div>
                            <div className="care-icons-item care-icons-item-4">
                                <div className="care-icon care-icon-4"></div>
                                <p>300TC</p>
                            </div>
                            <div className="care-icons-item care-icons-item-5">
                                <div className="care-icon care-icon-5"></div>
                                <p>Double stitch</p>
                            </div>
                        </div>
                        <div className="care-instructions">
                            <div className="care-instructions-item row">
                                <div className="care-instructions-img care-instructions-img-1"></div>
                                <div className="care-instructions-desc">
                                    <p className="care-instructions-title">
                                        cold water wash only
                                    </p>
                                    <p className="care-instructions-subtitle">
                                        Machine wash or hand wash in cold water
                                        only. Never wash in hot water.
                                    </p>
                                </div>
                            </div>
                            <div className="care-instructions-item row">
                                <div className="care-instructions-img care-instructions-img-2"></div>
                                <div className="care-instructions-desc">
                                    <p className="care-instructions-title">
                                        do not dry clean
                                    </p>
                                    <p className="care-instructions-subtitle">
                                        Do not dry clean Pure Bamboo bed sheets
                                    </p>
                                </div>
                            </div>
                            <div className="care-instructions-item row">
                                <div className="care-instructions-img care-instructions-img-3"></div>
                                <div className="care-instructions-desc">
                                    <p className="care-instructions-title">
                                        No Bleach
                                    </p>
                                    <p className="care-instructions-subtitle">
                                        Bleach will damage Pure Bamboo bed
                                        sheets
                                    </p>
                                </div>
                            </div>
                            <div className="care-instructions-item row">
                                <div className="care-instructions-img care-instructions-img-4"></div>
                                <div className="care-instructions-desc">
                                    <p className="care-instructions-title">
                                        tumble dry low heat
                                    </p>
                                    <p className="care-instructions-subtitle">
                                        Low heat drying only.Remove from dryer
                                        immediately to avoid wrinkles
                                    </p>
                                </div>
                            </div>
                            <div className="care-instructions-item row">
                                <div className="care-instructions-img care-instructions-img-5"></div>
                                <div className="care-instructions-desc">
                                    <p className="care-instructions-title">
                                        dye free detergent
                                    </p>
                                    <p className="care-instructions-subtitle">
                                        Use a laundry pre-treater to remove
                                        stains
                                    </p>
                                </div>
                            </div>
                            <div className="care-instructions-item row">
                                <div className="care-instructions-img care-instructions-img-6"></div>
                                <div className="care-instructions-desc">
                                    <p className="care-instructions-title">
                                        low heat iron only
                                    </p>
                                    <p className="care-instructions-subtitle">
                                        Hight heat ironing will damage Pure
                                        Bamboo bed sheets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HistoryComponent />
                <PakingComponent />
            </div>
        </main>
    );
};

export default ItemPage;
