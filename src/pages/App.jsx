import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './Home';
import Produk from './Produk';
import Layanan from './Layanan';
import FAQ from './FAQ';
import Blog from "./Blog";
import DetailProduk from './Detail/Produk';
import DetailBlog from './Detail/Blog';
import DetailLayanan from './Detail/Layanan';




function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/data')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produk" element={<Produk/>} />
                <Route path="/layanan" element={<Layanan />} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/*" element={<Produk/>} />
            </Routes>
        </Router>
    );
}

export default App;
