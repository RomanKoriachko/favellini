import PakingComponent from "../../components/PakingComponent/PakingComponent";
import "./CollectionPage.scss";

type Props = {};

const CollectionPage = (props: Props) => {
    return (
        <main className="main">
            <div className="collection-page">
                <div className="header-bg"></div>
                <PakingComponent />
            </div>
        </main>
    );
};

export default CollectionPage;
