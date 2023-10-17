import AboutComponent from "../../components/AboutComponent/AboutComponent";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
    return (
        <main className="main">
            <VideoComponent />
            <AboutComponent />
        </main>
    );
};

export default Main;
