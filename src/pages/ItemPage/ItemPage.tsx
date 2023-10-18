import { useParams } from "react-router-dom";
import "./ItemPage.scss";

type Props = {};

const ItemPage = (props: Props) => {
    const { color } = useParams();
    return <div>{color}</div>;
};

export default ItemPage;
