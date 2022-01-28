import React, {useEffect} from "react"
import styles from "./AboutUs.module.css"
import AboutImage from "../../assets/images/about.svg"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

const AboutUs = () => {
    const [secondRef, secondInView] = useInView()
    const secondControls = useAnimation()

    useEffect(() => {
        if (secondInView) {
            secondControls.start("visible")
        }
    }, [secondControls, secondInView])


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.card} id="about-us" ref={secondRef}>
                    <motion.h1
                        animate={secondControls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: -100}
                        }}
                    >About<br />Technopharm Investment
                    </motion.h1>
                    <motion.img
                        animate={secondControls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 100}
                        }}
                        src={AboutImage} alt="" />
                    <div className={styles.items}>
                        <div className={styles.item}>
                            Company was established
                            in 2018 in Scotland
                        </div>
                        <div className={styles.item}>
                            The sales office was opened
                            in Moscow in 2018
                        </div>
                        <div className={styles.item}>
                            The representative office was
                            opened in Tashkent in 2018
                        </div>
                        <div className={styles.item}>
                            The penetration to South East
                            Asian market in 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
