import React from "react";

import "./Home.css";
import Navbar from "../components/Navbar";
import CardProduk from "../components/CardProduk";
import dbProduk from "../db/dbProduk";
import Footer from "../components/Footer";
import Btn from "../components/Btn";

export default function Produk() {
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
    <div className="container-fluid relative md:max-lg:top-3 lg:top-10">
      {/* Navbar */}
      <Navbar
        HomeStyle={unPages}
        ProdukStyle={pages}
        LayananStyle={unPages}
        FAQStyle={unPages}
        blogStyle={unPages}
      />

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
