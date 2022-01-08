import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Details from "assets/pages/Details";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/categories/:idc" element={<Details />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
