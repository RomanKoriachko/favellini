import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <Helmet>
                    <title>Favellini</title>
                    <meta
                        name="description"
                        content="Founded by the visionary designer, Roberto Favellini, our brand has redefined opulence and perfection. We believe that luxury should be an everyday experience, and our mission is to bring unparalleled comfort to your life."
                    />
                </Helmet>
                <ArrowUp />
                <ScrollToTop />
                <Header />
                <Outlet />
                <Footer />
            </div>
        </HelmetProvider>
    );
}

export default App;
