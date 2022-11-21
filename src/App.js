import React, { useEffect, useState } from 'react';


import './styles/App.css';

// import { useSignOut } from 'react-firebase-hooks/auth';
// import { auth } from './services/firebase';



import { Routes, Route, Link, Outlet } from "react-router-dom";

// Pages
import Home from './pages/Home/index'
import Access from './pages/Access/index'
import MinhaConta from './pages/MinhaConta/index'
import Products from './pages/Products/index'
import Header from './components/Header';
import NotFound from './pages/NotFound/index'


//removendo a barra de menu da pagina access




function App() {
  const [pageAtive, setPageAtive] = useState()

  useEffect(() => {
    setPageAtive(window.location.pathname);
  }, [])


  return (
    <>
      <Header />
  

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="access" element={<Access />} />
        <Route exact path="minhaconta" element={<MinhaConta />} />
        <Route exact path="products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div>
        <Outlet />
      </div>

    </>

  );
}

export default App;
