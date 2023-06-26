import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardBlog from "../components/CardBlog";
import dbBlog from "../db/dbBlog";
import Btn from "../components/Btn";


export default function Layanan (props) { 
    return (
        <div className="container-fluid relative md:max-lg:top-2 lg:top-7">
            <Navbar LayananStyle={true} />

            <div className="mt-20">
                <h2 className="mb-10 text-4xl text-center text-cyan-700 font-semibold">
                    Blog
                </h2>

                {dbBlog.slice().map((blog) => (
                    <div className="flex justify-center max-md:my-5 md:max-lg:my-10 lg:my-10 max-md:mx-5 md:max-lg:mx-10">
                        <CardBlog 
                            key={blog.id}
                            Media={blog.BlogMedia}
                            Judul={blog.BlogJudul}
                            Deskripsi={blog.BlogDeskripsi.substring(0, 100)}
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

            <Footer />
        </div>
    )
 }