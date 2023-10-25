import "./ArrowUp.scss";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import useBoop from "../UseBoop/UseBoop";
import { Link } from "react-scroll";
import { useState } from "react";

type Props = {};

const ArrowUp = (props: Props) => {
    const [style, trigger] = useBoop({
        y: 5,
    });

    const [scrollUpBtnState, setScrollUpBtnState] = useState<string>("hide");
    window.addEventListener("scroll", () => {
        if (window.scrollY >= window.innerHeight) {
            setScrollUpBtnState("show");
        } else {
            setScrollUpBtnState("hide");
        }
    });

    return (
        <Link
            to="header"
            smooth={true}
            className={`arrow-up-wrapper ${scrollUpBtnState}`}
        >
            <AnimatedButton
                style={style}
                trigger={trigger}
                classText={`arrow-up`}
                text=""
            ></AnimatedButton>
        </Link>
    );
};

export default ArrowUp;
