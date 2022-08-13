import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Motores from "./components/pages/motores";
import Grupos from "./components/pages/grupos";
import NavBar from "./components/NavBar/NavBar";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route path="/motores" element={<Motores />} />
                <Route path="/grupos" element={<Grupos/>} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
