import React from "react"
import Header from "./layouts/header/Header"
import Banner from "./components/banner/Banner"
import Arguments from "./components/arguments/Arguments"
import HowWork from "./components/how-work/HowWork"
import Benefits from "./components/benefits/Benefits"
import ClinicalTrialResults from "./components/clinical-trial-results/ClinicalTrialResults"
import AboutUs from "./components/about-us/AboutUs"
import Activities from "./components/activities/Activities"
import ContactUs from "./components/contact-us/ContactUs"

const App = () => {
    return (
        <div style={{width: "100%", overflowX: "hidden"}}>
            <Header />
            <Banner />
            <Arguments />
            <HowWork />
            <Benefits />
            <ClinicalTrialResults />
            <AboutUs />
            <Activities />
            <ContactUs />
        </div>
    )
}

export default App
