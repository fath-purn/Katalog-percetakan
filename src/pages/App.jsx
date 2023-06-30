import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';
import Produk from './Produk';
import Layanan from './Layanan';
import FAQ from './FAQ';
import Blog from "./Blog";

// Admin
import Admin from "./Admin";

// produk
import ProdukList from "./AdminPages/ProdukList";
import ProdukAdd from "./AdminPages/ProdukAdd";
import ProdukEdit from "./AdminPages/ProdukEdit";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produk" element={<Produk/>} />
                <Route path="/layanan" element={<Layanan />} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/*" element={<Produk/>} />

                {/* Admin */}
                <Route path="/admin" element={<Admin />} />

                {/* Produk */}
                <Route path="/admin/produk" element={<ProdukList />} />
                <Route path="/admin/produk/addproduk" element={<ProdukAdd />} />
                <Route path="/admin/produk/editproduk/:id" element={<ProdukEdit />} />

                {/* Blog */}

                {/* Layanan */}

                {/* FAQ */}
            </Routes>
        </Router>
    );
}

export default App;
