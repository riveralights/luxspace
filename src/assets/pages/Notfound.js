import ErrorMessage from "assets/parts/ErrorMessage";
import Footer from "assets/parts/Footer";
import Header from "assets/parts/Header";
import Sitemap from "assets/parts/Sitemap";
import React from "react";

export default function Notfound() {
    return (
        <>
            <Header theme="black" />
            <ErrorMessage />
            <Sitemap />
            <Footer />
        </>
    );
}
