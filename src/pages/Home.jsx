import React, {useState, useEffect} from "react";
import axios from 'axios';


import "./Home.css";
import Navbar from "../components/Navbar";
import Head from "../img/head-2.png";
import CardProduk from "../components/CardProduk";
import Btn from "../components/Btn";
import Footer from "../components/Footer";

function Home() {
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
        const response = await axios.get("https://tough-teal-duck.cyclic.app/products");
        setProduk(response.data.data);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="container-fluid relative">
      {/* Navbar */}
      <Navbar
        HomeStyle={true}
      />

      {/* Header */}
      <section id="Header" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="flex items-center mt-20 mb-20 bg-white max-md:flex-col md:max-lg:flex-col lg:flex-wrap">
          <div className="flex-1 flex-col max-md:ml-5 md:ml-20">
            <h1 className="leading-normal max-md:text-4xl md:max-lg:text-5xl lg:text-5xl w-10/12 mb-4 tracking-normal font-medium text-gray-900">
              Tempat Mencetak Buku Yasin Terbaik, Murah dan Berkualitas
              !!
            </h1>
            <p className="mb-4 text-gray-500 text-xl w-10/12 ">
              Kami akan membantumu mecetak keperluan cetak mu dengan cepat,
              baik, murah dan tentunya berkualitas.
            </p>

            {/* Button */}
            <Btn href="/produk" keterangan="Pesan Sekarang" />
          </div>
          <div className="flex-1 items-end justify-center max-md:mt-10 md:max-lg:mt-10">
            <img src={Head} alt="Logo" />
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="Keunggulan" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="pt-5 pb-5 kelebihan">
          <h2>
            Mengapa Harus <br /> di JAVAINDO Yasin's <br /> Islamic Book Center?
          </h2>
          <div className="kelebihan-list pt-3">
            <div className="row pb-5">
              <div className="col-2 kelebihan-nomor kelebihan-nomor-2">
                <h6>1.</h6>
              </div>
              <div className="col-10 mt-3">
                <h3>Proses Cetak Cepat</h3>
                <p>
                  Proses cetak dapat ditunggu karena dilakukan dengan proses
                  yang cepat sehingga dapat mempersingkat waktu pengambilan
                  barang.
                </p>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-2 kelebihan-nomor kelebihan-nomor-2">
                <h6>2.</h6>
              </div>
              <div className="col-10 mt-3">
                <h3>Harga Yang Terjangkau</h3>
                <p>
                  Harga yang ramah dikantong yang pastinya tidak akan membuat
                  dompet kering.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2 kelebihan-nomor kelebihan-nomor-2">
                <h6>3.</h6>
              </div>
              <div className="col-10 mt-3">
                <h3>Menggunakan Bahan Yang Berkualitas</h3>
                <p>
                  Menggunakan bahan yang berkualitas yang pastinya hasil tidak
                  akan mengecewakan meskipun dengan harga yang ramah di kantong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produk */}
      <section id="Produk" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="my-20">
          <h2 className="mb-10 text-4xl text-center text-cyan-700 font-semibold">
            Produk
          </h2>
          <div className="flex flex-wrap justify-between max-md:mx-5 md:max-lg:mx-10 lg:mx-10 gap-7">
            {produk.slice(0, 3).map((dbProduct) => (
              <CardProduk
                key={dbProduct.id}
                srcProduk={dbProduct.url}
                alt={dbProduct.nama}
                namaProduk={dbProduct.nama}
                harga={dbProduct.harga}
                deskripsi={dbProduct.deskripsi.substring(0, 100)}
                keterangan="Pesan Sekarang"
                href={`produk/detail/${dbProduct.id}`}
              />
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <a
              href="/produk"
              className="text-center text-cyan-700 text-[16px] font-light"
            >
              Produk Lainnya
            </a>
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

export default Home;
