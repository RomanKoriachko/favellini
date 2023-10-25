import AboutComponent from "../../components/AboutComponent/AboutComponent";
import ExploreComponent from "../../components/ExploreComponent/ExploreComponent";
import FeedbackComponent from "../../components/FeedbackComponent/FeedbackComponent";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
import InnovationComponent from "../../components/InnovationComponent/InnovationComponent";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import "./Main.scss";
import { Helmet } from "react-helmet-async";

type Props = {};

const Main = (props: Props) => {
    return (
        <main className="main">
            <Helmet>
                <title>Favellini - Home</title>
                <meta
                    name="description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
            </Helmet>
            <VideoComponent />
            <AboutComponent />
            <ExploreComponent />
            <HistoryComponent />
            <InnovationComponent />
            <FeedbackComponent />
        </main>
    );
};

export default Main;
