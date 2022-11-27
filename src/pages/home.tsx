import React from "react"
import Header from "../layouts/header/Header"
import MioyesBanner from "../components/mioyes/banner/Banner"
import MiostaBanner from "../components/miosta/banner/Banner"
import AboutUs from "../components/about-us/AboutUs"
import Activities from "../components/mioyes/activities/Activities"
import ContactUs from "../components/contact-us/ContactUs"
import {CarouselProvider, Slider, Slide} from "pure-react-carousel"

const Home = () => {
    return (
        <>
            <Header />
            <CarouselProvider
                naturalSlideHeight={window.innerHeight - 100}
                naturalSlideWidth={window.innerWidth}
                totalSlides={2}
                visibleSlides={1}
                step={1}
                dragStep={1}
                infinite
                isPlaying
            >
                <Slider>
                    <Slide index={0} key={0}>
                        <MioyesBanner />
                    </Slide>
                    <Slide index={1} key={1}>
                        <MiostaBanner />
                    </Slide>
                </Slider>
            </CarouselProvider>
            <AboutUs />
            <Activities />
            <ContactUs />
        </>
    )
}

export default Home