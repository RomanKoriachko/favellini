import "./ErrorPage.scss";
import { useRouteError } from "react-router-dom";

type Props = {};

const ErrorPage = (props: Props) => {
    let error = useRouteError();
    console.log(error);
    return (
        <main className="error-page">
            <div className="error-message">
                <p className="error-message-title">Oops!</p>
                <p className="error-message-subtitle">
                    Sorry, something went wrong
                </p>

                <p className="error-message-text">
                    {/* @ts-ignore */}
                    {error.data ?? error.message}
                </p>
            </div>
        </main>
    );
};

export default ErrorPage;
