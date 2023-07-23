

import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';

import Home from './Home';
import Produk from './Produk';
import Layanan from './Layanan';
import FAQ from './FAQ';
import Blog from "./Blog";

import LoginForm from "./AdminPages/Login";
import Register from "./AdminPages/Register";

// Admin
import Admin from "./Admin";


// produk
import ProdukList from "./AdminPages/ProdukList";
import ProdukAdd from "./AdminPages/ProdukAdd";
import ProdukEdit from "./AdminPages/ProdukEdit";

// layanan
import LayananList from "./AdminPages/LayananList"; 
import LayananAdd from "./AdminPages/LayananAdd";
import LayananEdit from "./AdminPages/LayananEdit";

// Blog
import BlogList from "./AdminPages/BlogList";
import BlogAdd from "./AdminPages/BlogAdd";
import BlogEdit from "./AdminPages/BlogEdit";

// Detail
import DetailBlog from "./Detail/DetailBlog";
import DetailProduk from "./Detail/DetailProduk";
import DetailLayanan from "./Detail/DetailLayanan";
// import SearchProduk from "./Detail/SearchProduk";





function App() {
    AOS.init();
  
    return (
        // <BrowserRouter basename="/">
            <Router>
                <Routes>
                    <Route path="/*" element={<Home />} />
            
                    {/* Produk */}
                    <Route path="/produk" element={<Produk />} />
                    <Route path="/produk/detail/:id" element={<DetailProduk />} />
            
                    {/* Layanan */}
                    <Route path="/layanan" element={<Layanan />} />
                    <Route path="/layanan/detail/:id" element={<DetailLayanan />} />
            
                    {/* FAQ */}
                    <Route path="/faq" element={<FAQ />} />
            
                    {/* Blog */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/detail/:id" element={<DetailBlog />} />
            
                    {/* Login */}
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
            
                    {/* Admin */}
                    <Route path="/admin" element={<Admin />} />
        
                    {/* Produk */}
                    <Route path="/admin/produk" element={<ProdukList />} />
                    <Route path="/admin/produk/addproduk" element={<ProdukAdd />} />
                    <Route path="/admin/produk/editproduk/:id" element={<ProdukEdit />} />
        
                    {/* Layanan */}
                    <Route path="/admin/layanan" element={<LayananList />} />
                    <Route path="/admin/layanan/addlayanan" element={<LayananAdd />} />
                    <Route path="/admin/layanan/editlayanan/:id" element={<LayananEdit />} />
        
                    {/* Blog */}
                    <Route path="/admin/blog" element={<BlogList />} />
                    <Route path="/admin/blog/addblog" element={<BlogAdd />} />
                    <Route path="/admin/blog/editblog/:id" element={<BlogEdit />} />

                </Routes>
            </Router>
        // </BrowserRouter>
    );
  }
  
  export default App;
  
  
