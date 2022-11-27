import React from "react"
import Header from "../layouts/header/Header"
import Banner from "../components/miosta/banner/Banner"
import Arguments from "../components/miosta/arguments/Arguments"
import HowWork from "../components/miosta/how-work/HowWork"
import Benefits from "../components/miosta/benefits/Benefits"
import ClinicalTrialResults from "../components/miosta/clinical-trial-results/ClinicalTrialResults"
import AboutUs from "../components/miosta/about-us/AboutUs"
import ContactUs from "../components/contact-us/ContactUs"

const Miosta = () => {
    return (
        <div className="miosta">
            <Header />
            <Banner />
            <Arguments />
            <HowWork />
            <Benefits />
            <ClinicalTrialResults />
            <AboutUs />
            <ContactUs />
        </div>
    )
}

export default Miosta