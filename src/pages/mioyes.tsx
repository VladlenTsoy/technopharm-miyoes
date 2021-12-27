import React from "react"
import Header from "../layouts/header/Header"
import Banner from "../components/mioyes/banner/Banner"
import Arguments from "../components/mioyes/arguments/Arguments"
import HowWork from "../components/mioyes/how-work/HowWork"
import Benefits from "../components/mioyes/benefits/Benefits"
import ClinicalTrialResults from "../components/mioyes/clinical-trial-results/ClinicalTrialResults"
import ContactUs from "../components/contact-us/ContactUs"

const Mioyes = () => {
    return (
        <>
            <Header />
            <Banner />
            <Arguments />
            <HowWork />
            <Benefits />
            <ClinicalTrialResults />
            {/*<AboutUs />*/}
            {/*<Activities />*/}
            <ContactUs />
        </>
    )
}

export default Mioyes