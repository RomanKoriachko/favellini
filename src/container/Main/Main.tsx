import AboutComponent from "../../components/AboutComponent/AboutComponent";
import ExploreComponent from "../../components/ExploreComponent/ExploreComponent";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
    return (
        <main className="main">
            <VideoComponent />
            <AboutComponent />
            <ExploreComponent />
        </main>
    );
};

export default Main;
