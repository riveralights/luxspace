import Breadcrumb from "assets/components/Breadcrumb";
import Footer from "assets/parts/Footer";
import Header from "assets/parts/Header";
import Sitemap from "assets/parts/Sitemap";
import Congratulation from "assets/parts/Success/Congratulation";
import React from "react";

export default function Success() {
    return (
        <>
            <Header theme="black" />
            <Breadcrumb
                list={[
                    {
                        url: "/",
                        name: "Home",
                    },
                    {
                        url: "/success",
                        name: "Success Checkout",
                    },
                ]}
            />
            <Congratulation />
            <Sitemap />
            <Footer />
        </>
    );
}
