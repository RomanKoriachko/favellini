import { Link, useParams } from "react-router-dom";
import "./ItemPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import PagesNavigation from "../../components/PagesNavigation/PagesNavigation";
import itemsArray from "../CollectionPage/itemsArray";
import SliderComponent, {
    ItemType,
} from "../../components/SliderComponent/SliderComponent";
import { useState } from "react";
import PakingComponent from "../../components/PakingComponent/PakingComponent";

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
                                <p className="item-title">
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
                            <p className="dropdown-title">Choose a color</p>
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
                            <a href="">
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
                                    <p>Матеріали та догляд</p>
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
                                            <span>Чохол:</span> поліестер з
                                            водовідштовхувальною пропиткою
                                            (Oxford)
                                        </p>
                                        <p>
                                            <span>Наповнювач:</span> холофайбер
                                        </p>
                                        <p>
                                            <span>Деталі:</span> ручки - шкіра,
                                            фурнітура - метал
                                        </p>
                                    </div>
                                    <div>
                                        Сумку можна прати тільки вручну. Вкладку
                                        (дно) не можна прати - тільки сам чохол.
                                        Дайте висохнути на сушильній решітці та
                                        потрусіть, щоб розправити наповнювач.
                                    </div>
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
