import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import Btn from "../../components/Btn";

export default function DetailBlog() {
  // Maps
  const defaultProps = {
    center: {
      lat: -7.435006,
      lng: 109.250161,
    },
    zoom: 15,
  };

  const { id } = useParams();

  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const getLayananById = async () => {
      try {
        const response = await axios.get(`https://tough-teal-duck.cyclic.app/blog/${id}`);
        setNama(response.data.data.nama);
        setDeskripsi(response.data.data.deskripsi);
        setImage(response.data.data.url);
      } catch (error) {
        console.log(error);
      }
    };

    getLayananById();
  }, [id]);

    return (
      <div className="container-fluid relative md:max-lg:top-2 lg:top-7 ">
        {/* Navar */}
        <Navbar BlogStyle={true} />

        {/* Blog */}
        <section className="mt-20">
          <div className="max-md:mx-5 md:max-lg:mx-[10%] lg:mx-[20%] lg:mt-5 mb-5">
            <div className="max-md:w-[100%] md:max-lg:w-[100%] lg:w-[60%] flex justify-center m-auto" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <img src={image} alt={nama} width="100%" />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h2 className="my-5 max-md:text-2xl md:text-3xl text-center text-cyan-700 font-semibold">{nama} </h2>
              <BreadCrumb keterangan={nama.substring(0, 30)} href="/blog" menu="Blog" />
              <p className="text-gray-500 mt-2">{deskripsi}</p>
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
    )
  }
  