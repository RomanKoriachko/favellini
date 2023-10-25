import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import { Helmet } from "react-helmet-async";

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Favellini - Home</title>
                <meta
                    name="description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
                <meta property="og:title" content="Favellini - Home" />
                <meta
                    property="og:description"
                    content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                />
            </Helmet>
            <ArrowUp />
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
