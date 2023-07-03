import React, {useState, useEffect} from "react";
import axios from 'axios';

import "./Home.css";
import Navbar from "../components/Navbar";
import CardProduk from "../components/CardProduk";
import Footer from "../components/Footer";
import Btn from "../components/Btn";

export default function Produk() {
  // maps
  const defaultProps = {
    center: {
      lat: -7.435006,
      lng: 109.250161,
    },
    zoom: 15,
  };

  // server
  const [produk, setProduk] = useState([]);
    
    useEffect(() => {
        getProduk();
    }, []);
    
    const getProduk = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProduk(response.data);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className="container-fluid relative md:max-lg:top-2 lg:top-7">
      {/* Navbar */}
      <Navbar
        ProdukStyle={true}
      />

      {/* Produk */}
      <section id="Produk">
        <div className="my-20">
          <h2 className="mb-10 text-4xl text-center text-cyan-700 font-semibold">
            Produk
          </h2>
          <div className="flex flex-wrap justify-between max-md:mx-5 md:max-lg:mx-10 lg:mx-10 gap-7">
            {produk.map((dbProduct) => (
              <CardProduk
                key={dbProduct.id}
                srcProduk={dbProduct.url}
                alt={dbProduct.nama}
                namaProduk={dbProduct.nama}
                harga={dbProduct.harga}
                deskripsi={dbProduct.deskripsi.substring(0, 100)}
                keterangan="Pesan Sekarang"
                href={`/produk/detail/${dbProduct.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApps */}
      <div className="">
        <Btn
          keterangan="WhatsApps"
          Wa={true}
          linkWa={true}
        />
      </div>

      {/* Footer */}
      <Footer center={defaultProps.center} zoom={defaultProps.zoom} />
    </div>
  );
}
