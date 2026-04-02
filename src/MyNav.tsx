import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function MyNav() {
  return (
    <BrowserRouter>
        <SetNav />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
    );
}

function SetNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default MyNav;