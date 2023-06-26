import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardFAQ from "../components/CardFAQ";
import dbFAQ from "../db/dbFAQ";


export default function FAQ (props) { 
    return (
        <div className="container-fluid relative md:max-lg:top-2 lg:top-7">
            <Navbar FAQStyle={true} />
            <h1>Hai kamu!</h1>

            {/* FAQ */}
            {/* {dbFAQ.slice().map((FAQ) => {
                <CardFAQ 
                    key={FAQ.id}
                    FAQJudul={FAQ.FAQJudul}
                    FAQDeskripsi={FAQ.FAQDeskripsi}
                />
            })} */}
            
            <Footer />
        </div>
    )
 }

