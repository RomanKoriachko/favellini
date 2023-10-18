import { useParams } from "react-router-dom";
import "./ItemPage.scss";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";

type Props = {};

const ItemPage = (props: Props) => {
    const { color } = useParams();
    return (
        <main className="main">
            <div className="item-page">
                <div className="header-bg"></div>
                {color}
                <HistoryComponent />
            </div>
        </main>
    );
};

export default ItemPage;
