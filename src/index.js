import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner"
import NavBar from "./components/NavBar/NavBar";
import Cart from './components/Cart/Cart'

import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'
import Checkout from './components/Checkout/Checkout';




ReactDOM.render(
    <CartContextProvider>
    <React.StrictMode>
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailConteiner />} /> 
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </Router>
    </React.StrictMode>
    </CartContextProvider>,
    document.getElementById('root')
);
