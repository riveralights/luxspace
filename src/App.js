import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Details from "assets/pages/Details";
import Cart from "assets/pages/Cart";
import Success from "assets/pages/Success";
import Notfound from "assets/pages/Notfound";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/categories/:idc" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
