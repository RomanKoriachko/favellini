import AboutComponent from "../../components/AboutComponent/AboutComponent";
import ExploreComponent from "../../components/ExploreComponent/ExploreComponent";
import FeedbackComponent from "../../components/FeedbackComponent/FeedbackComponent";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import InnovationComponent from "../../components/InnovationComponent/InnovationComponent";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import "./Main.scss";

type Props = {};

const Main = (props: Props) => {
    return (
        <main className="main">
            <VideoComponent />
            <AboutComponent />
            <ExploreComponent />
            <HistoryComponent />
            <InnovationComponent />
            {/* <FeedbackComponent /> */}
        </main>
    );
};

export default Main;
