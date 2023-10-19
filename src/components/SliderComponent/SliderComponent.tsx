import { useRef } from "react";
import { useParams } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import itemsArray from "../../pages/CollectionPage/itemsArray";
import "./SliderComponent.scss";

type Props = {};

export type ItemType = {
    id: number;
    type: string;
    size: string;
    color: string;
    queensPrice: number;
    kingsPrice: number;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
};

const SliderComponent = (props: Props) => {
    const { color } = useParams();
    let currentItem: ItemType = {
        id: 0,
        type: "",
        size: "",
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

    const slider1 = useRef<Slider | null>(null);
    const slider2 = useRef<Slider | null>(null);

    const settings1: Settings = {
        asNavFor: slider2.current || undefined,
        dots: true,
    };

    const settings2: Settings = {
        asNavFor: slider1.current || undefined,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    // Додавання обробника події кліку на зображеннях в другому слайдері
    const handleImageClick = (index: number) => {
        if (slider1.current) {
            slider1.current.slickGoTo(index);
        }
    };

    return (
        <div className="sliders">
            <Slider
                className="first-slider"
                {...settings1}
                ref={(slider) => (slider1.current = slider)}
            >
                <img
                    className="first-slider-item"
                    src={`/images/${currentItem.img2}`}
                    alt=""
                />
                <img
                    className="first-slider-item"
                    src={`/images/${currentItem.img3}`}
                    alt=""
                />
                <img
                    className="first-slider-item"
                    src={`/images/${currentItem.img4}`}
                    alt=""
                />
            </Slider>
            <Slider
                className="second-slider"
                {...settings2}
                ref={(slider) => (slider2.current = slider)}
            >
                <div
                    className="second-slider-item"
                    onClick={() => handleImageClick(0)}
                >
                    <img src={`/images/${currentItem.img2}`} alt="" />
                </div>
                <div
                    className="second-slider-item"
                    onClick={() => handleImageClick(1)}
                >
                    <img src={`/images/${currentItem.img3}`} alt="" />
                </div>
                <div
                    className="second-slider-item"
                    onClick={() => handleImageClick(2)}
                >
                    <img src={`/images/${currentItem.img4}`} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
