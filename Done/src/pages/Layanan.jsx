import React, {useState, useEffect} from "react";
import axios from 'axios';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardLayanan from "../components/CardLayanan";
import Btn from "../components/Btn";


export default function Layanan (props) { 
    // Maps
    const defaultProps = {
        center: {
          lat: -7.435006,
          lng: 109.250161,
        },
        zoom: 15,
    };
    
    // server
    const [layanan, setLayanan] = useState([]);
        
    useEffect(() => {
        getLayanan();
    }, []);
    
    const getLayanan = async () => {
        try {
            const response = await axios.get("https://tough-teal-duck.cyclic.app/layanan");
            setLayanan(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="container-fluid relative md:max-lg:top-2 lg:top-7 ">
            <Navbar LayananStyle={true} />

            <div className="mt-20">
                <h2 className="mb-10 text-4xl text-center text-cyan-700 font-semibold">
                    Layanan
                </h2>

                {layanan.slice().map((layanan) => (
                    <div className="flex justify-center max-md:my-5 md:max-lg:my-10 lg:my-10 max-md:mx-5 md:max-lg:mx-10">
                        <CardLayanan 
                            key={layanan.id}
                            Media={layanan.url}
                            Judul={layanan.nama}
                            Deskripsi={layanan.deskripsi.substring(0, 100)}
                            href={`layanan/detail/${layanan.id}`}
                            time={layanan.updatedAt}
                        />
                    </div>
                ))}
            </div>
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