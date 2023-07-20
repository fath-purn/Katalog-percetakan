import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "../Home.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Btn from "../../components/Btn";
import BtnDetail from "../../components/BtnDetail";
import BreadCrumb from "../../components/BreadCrumb";
import CardProduk from "../../components/CardProduk";

function handlePrice(price, language = "id-ID") {
  if (price) {
    return price.toLocaleString(language);
  } else {
    return "N/A";
  }
}

export default function DetailProduk() {
  // maps
  const defaultProps = {
    center: {
      lat: -7.435006,
      lng: 109.250161,
    },
    zoom: 15,
  };

  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState();
  const [kategori, setKategori] = useState("");
  const [ulasan, setUlasan] = useState("");
  const [gambar, setGambar] = useState("");
  const [idProduk, setId] = useState();

  // router
  const { id } = useParams();
  const getProdukById = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setNama(response.data.data.nama);
      setDeskripsi(response.data.data.deskripsi);
      setHarga(response.data.data.harga);
      setKategori(response.data.data.kategori);
      setUlasan(response.data.data.ulasan);
      setGambar(response.data.data.url);
      setId(id);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    getProdukById();
  }, [getProdukById]);

  // server
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    getProduk();
  }, []);

  const getProduk = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProduk(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid relative md:max-lg:top-2 lg:top-7">
      {/* Navbar */}
      <Navbar ProdukStyle={true} />

      {/* Produk */}
      <section id="Produk">
        <div className="bg-slate-100 max-md:py-20 md:max-lg:py-20 lg:py-32 lg:p-10">
          <div className="flex flex-wrap max-md:mx-5 md:max-lg:mx-10 lg:mx-10 bg-white drop-shadow-lg max-md:py-5 md:max-lg:py-10 lg:py-20 md:max-md:p-3 lg:p-10">
            <div className="max-md:mx-5 md:max-lg:mx-10 lg:mx-10 max-lg:w-[100%] lg:w-[40%]">
              <img src={gambar} alt={nama} width="100%" />
              <div className="flex justify-center mt-5 w-full">
                <BtnDetail
                  keterangan="Pesan Sekarang"
                  href="/produk"
                  className="bg-black"
                  text={nama}
                  link={`http://localhost:3000/products/${id}`}
                />
              </div>
            </div>

            <div
              className="max-md:m-5 md:max-lg:my-5 max-md:mx-5 md:max-lg:mx-10 lg:mx-10 max-md:w-full lg:w-[40%] h-auto "
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <BreadCrumb
                keterangan={nama.substring(0, 20)}
                menu="Produk"
                href="/produk"
              />
              <p className=" text-cyan-700 my-2">{kategori}</p>
              <h2 className="mb-5 text-4xl font-semibold">{nama}</h2>
              <h3 className="text-2xl mb-5">Rp {handlePrice(harga)}</h3>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 out of 5
                </p>
              </div>
            </div>
            <p className="w-[-webkit-fill-available] max-md:mx-5 md:max-lg:mx-10 lg:mx-10 lg:mt-5 text-gray-500">
              {deskripsi}
            </p>

            {/* Produk lain */}
            <div className="max-md:mx-5 md:max-lg:mx-10 lg:mx-10 mt-10">
              <h2 className="mb-5 max-md:text-2xl md:text-3xl text-center text-cyan-700 font-semibold">
                Produk
              </h2>
            </div>
            <div className="flex flex-wrap justify-between max-md:mx-5 md:max-lg:mx-10 lg:mx-10 gap-7">
              {produk
                .filter((index) => index.id !== parseInt(id))
                .slice(0, 3)
                .map((dbProduct) => (
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
        </div>
      </section>

      {/* WhatsApps */}
      <div className="">
        <Btn keterangan="WhatsApps" Wa={true} linkWa={true} />
      </div>

      {/* Footer */}
      <Footer center={defaultProps.center} zoom={defaultProps.zoom} />
    </div>
  );
}
