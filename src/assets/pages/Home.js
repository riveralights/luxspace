import React from "react";
import Hero from "../parts/Hero";
import Header from "../parts/Header";
import BrowseRoom from "assets/parts/Home/BrowseRoom";
import JustArrived from "assets/parts/Home/JustArrived";
import Clients from "assets/parts/Clients";
import Sitemap from "assets/parts/Sitemap";
import Footer from "assets/parts/Footer";

export default function Home(props) {
    return (
        <>
            <Header />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    );
}
