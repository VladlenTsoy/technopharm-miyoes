import React from "react"
import Header from "../layouts/header/Header"
import MiostaBanner from "../components/miosta/banner/Banner"
import AboutUs from "../components/about-us/AboutUs"
import Activities from "../components/mioyes/activities/Activities"
import ContactUs from "../components/contact-us/ContactUs"

const Home = () => {
    return (
        <>
            <Header />
            <MiostaBanner />
            <AboutUs />
            <Activities />
            <ContactUs />
        </>
    )
}

export default Home
