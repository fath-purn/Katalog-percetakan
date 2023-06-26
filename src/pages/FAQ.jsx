import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardFAQ from "../components/CardFAQ";
import Btn from "../components/Btn";


export default function FAQ (props) { 
    return (
        <div className="container-fluid relative md:max-lg:top-2 lg:top-7">
            <Navbar FAQStyle={true} />

            {/* FAQ */}
            <CardFAQ />

            {/* WhatsApps */}
            <div className="">
                <Btn
                keterangan="WhatsApps"
                Wa={true}
                linkWa={true}
                />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
 }

