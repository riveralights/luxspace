import React from "react";
import Header from "../parts/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "assets/parts/Details/ProductDetails";
import Suggestion from "assets/parts/Details/Suggestion";
// import Clients from "assets/parts/Clients";
import Sitemap from "assets/parts/Sitemap";
import Footer from "assets/parts/Footer";

export default function Details(props) {
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
                        url: "/categories/217",
                        name: "Office Room",
                    },
                    {
                        url: "/categories/217/products/788",
                        name: "Details",
                    },
                ]}
            />
            <ProductDetails />
            <Suggestion />
            {/* <Clients /> */}
            <Sitemap />
            <Footer />
        </>
    );
}
