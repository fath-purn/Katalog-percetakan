import React from "react";

import "./Home.css";
import Navbar from "../components/Navbar";
import Head from "../img/head-2.png";
import CardProduk from "../components/CardProduk";
import Btn from "../components/Btn";
import dbProduk from "../db/dbProduk";
import Footer from "../components/Footer";
import ComplexNavbar from "../components/Coba";

function App() {
  const unPages =
    "text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400";
  const pages =
    "text-neutral-800 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400";

  const defaultProps = {
    center: {
      lat: -7.435006,
      lng: 109.250161,
    },
    zoom: 15,
  };

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <Navbar
        HomeStyle={pages}
        ProdukStyle={unPages}
        LayananStyle={unPages}
        FAQStyle={unPages}
        blogStyle={unPages}
      />

      {/* Header */}
      <section id="Header">
        <div className="flex relative items-center mt-20 mb-20 bg-white max-md:flex-col md:max-lg:flex-col lg:flex-wrap">
          <div className="flex-1 flex-col ml-20">
            <h1 className="leading-normal max-md:text-4xl md:max-lg:text-5xl lg:text-5xl w-10/12 mb-4 tracking-normal font-medium text-gray-900">
              Tempat Terbaik Mencetak Buku Yasin Terbaik, Murah dan Berkualitas
              !!
            </h1>
            <p className="mb-4 text-gray-500 text-xl w-10/12 ">
              Kami akan membantumu mecetak keperluan cetak mu dengan cepat,
              baik, murah dan tentunya berkualitas.
            </p>

            {/* Button */}
            <Btn href="#Keunggulan" keterangan="Pesan Sekarang" />
          </div>
          <div className="flex-1 items-end justify-center max-md:mt-10 md:max-lg:mt-10">
            <img src={Head} alt="Logo" />
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section id="Keunggulan">
        <div class="pt-5 pb-5 kelebihan">
          <h2>
            Mengapa Harus <br /> di JAVAINDO Yasin's <br /> Islamic Book Center?
          </h2>
          <div class="kelebihan-list pt-3">
            <div class="row pb-5">
              <div class="col-2 kelebihan-nomor kelebihan-nomor-2">
                <h6>1.</h6>
              </div>
              <div class="col-10 mt-3">
                <h3>Proses Cetak Cepat</h3>
                <p>
                  Proses cetak dapat ditunggu karena dilakukan dengan proses
                  yang cepat sehingga dapat mempersingkat waktu pengambilan
                  barang.
                </p>
              </div>
            </div>
            <div class="row pb-5">
              <div class="col-2 kelebihan-nomor kelebihan-nomor-2">
                <h6>2.</h6>
              </div>
              <div class="col-10 mt-3">
                <h3>Harga Yang Terjangkau</h3>
                <p>
                  Harga yang ramah dikantong yang pastinya tidak akan membuat
                  dompet kering.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-2 kelebihan-nomor kelebihan-nomor-2">
                <h6>3.</h6>
              </div>
              <div class="col-10 mt-3">
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
      <section id="Produk">
        <div className="my-20">
          <h2 className="mb-10 text-4xl text-center text-cyan-700 font-semibold">
            Produk
          </h2>
          <div className="flex flex-wrap justify-between max-md:mx-5 md:max-lg:mx-10 lg:mx-10 gap-7">
            {dbProduk.slice(0, 3).map((dbProduct) => (
              <CardProduk
                key={dbProduct.id}
                srcProduk={dbProduct.media}
                alt={dbProduct.namaProduk}
                namaProduk={dbProduct.namaProduk}
                harga={dbProduct.harga}
                deskripsi={dbProduct.deskripsi.substring(0, 100)}
                keterangan="Detail"
                href="#"
              />
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <a
              href="#"
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
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          }
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

export default App;
