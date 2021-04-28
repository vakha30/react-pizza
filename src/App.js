import React from "react";
import { Route } from "react-router-dom";
import {Header} from "./components";

import { Home, Cart } from './pages'
import Gallery from './gallery/Gallery'

import './scss/app.scss'
function App() {

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route exact path="/gallery">
                    <Gallery />
                </Route>
            </div>
        </div>
    );
}

export default App
