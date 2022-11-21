import React from 'react'


import { Routes, Route, Link } from "react-router-dom";



// Pages
import Home from './Home/index'
import Access from './Access/index'
import MinhaConta from './MinhaConta/index'
import Products from './Products/index'







const Rotas = () => {



    return (

        <>
            
                <Link to="/">Home</Link>
                <Link to="/access">Access</Link>
                <Link to="/minhaconta">Minha Conta</Link>
                <Link to="/products">Produtos</Link>

                <Routes>
                    <Route path="/" component={<Home/>}  />
                    <Route path="/access" component={<Access/>}  />
                    <Route path="/minhaconta" component={<MinhaConta/>}  />
                    <Route path="/products" component={<Products/>}  />
                </Routes>

            
            
        </>



    )
}

export default Rotas