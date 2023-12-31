import React, {useState, useEffect} from "react";
import axios from 'axios';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardLayanan from "../components/CardLayanan";
import Btn from "../components/Btn";


export default function Blog (props) { 
    const defaultProps = {
        center: {
          lat: -7.435006,
          lng: 109.250161,
        },
        zoom: 15,
    };

    // server
    const [blog, setBlog] = useState([]);
        
    useEffect(() => {
        getBlog();
    }, []);
    
    const getBlog = async () => {
        try {
            const response = await axios.get("https://tough-teal-duck.cyclic.app/blog");
            setBlog(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container-fluid relative md:max-lg:top-2 lg:top-7">
            <Navbar BlogStyle={true} />

            <div className="mt-20">
                <h2 className="mb-10 text-4xl text-center text-cyan-700 font-semibold">
                    Blog
                </h2>

                {blog.slice().map((blog) => (
                    <div className="flex justify-center max-md:my-5 md:max-lg:my-10 lg:my-10 max-md:mx-5 md:max-lg:mx-10">
                        <CardLayanan 
                            key={blog.id}
                            Media={blog.url}
                            Judul={blog.nama}
                            Deskripsi={blog.deskripsi.substring(0, 100)}
                            href={`blog/detail/${blog.id}`}
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