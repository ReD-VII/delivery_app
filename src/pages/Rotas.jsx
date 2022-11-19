import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";


// Pages
import Home from './Home/index'
import Access from './Access/index'
import MinhaConta from './MinhaConta/index'
import Products from './Products/index'







const Rotas = () => {



    return (

        <BrowserRouter>
            <Routes>

                <Route component = { Home }  path="/" exact />
                <Route component = { Access }  path="/access" />
                <Route component = { MinhaConta }  path="/minhaconta" />
                <Route component = { Products }  path="/products" />

            </Routes>

        </BrowserRouter>
    )
}

export default Rotas