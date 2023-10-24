import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./App.scss";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <div className="App">
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
