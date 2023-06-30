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

                {/* Layanan */}
                <Route path="/admin/layanan" element={<LayananList />} />
                <Route path="/admin/produk/addlayanan" element={<LayananAdd />} />
                <Route path="/admin/produk/editlayanan/:id" element={<LayananEdit />} />

                {/* Blog */}
                <Route path="/admin/blog" element={<BlogList />} />
                <Route path="/admin/produk/addblog" element={<BlogAdd />} />
                <Route path="/admin/produk/editblog/:id" element={<BlogEdit />} />

                {/* FAQ */}
                <Route path="/admin/faq" element={<FAQList />} />
                <Route path="/admin/produk/addfaq" element={<FAQAdd />} />
                <Route path="/admin/produk/editfaq/:id" element={<FAQEdit />} />

            </Routes>
        </Router>
    );
}

export default App;
