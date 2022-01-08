import React from "react";
import Header from "assets/parts/Header";
import Breadcrumb from "assets/components/Breadcrumb";
import Footer from "assets/parts/Footer";
import Sitemap from "assets/parts/Sitemap";
import ShoppingCart from "assets/parts/Cart/ShoppingCart";
import ShippingDetails from "assets/parts/Cart/ShippingDetails";

export default function Cart() {
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
                        url: "/cart",
                        name: "Shopping Cart",
                    },
                ]}
            />

            <section class="md:py-16">
                <div class="container mx-auto px-4">
                    <div class="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>

            <Sitemap />
            <Footer />
        </>
    );
}
