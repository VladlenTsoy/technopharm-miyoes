import React, {useEffect} from "react"
import styles from "./AboutUs.module.css"
import Logo2Image from "../../../assets/images/logo-2.svg"
import AboutImage from "../../../assets/images/about.svg"
import {useAnimation, motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

const container = {
    visible: {
        transition: {
            delayChildren: 1,
            staggerChildren: 1
        }
    }
}

const item = {
    hidden: {opacity: 0},
    visible: {
        x: 0, opacity: 1
    }
}

const afterItem = {
    hidden: {width: 0},
    visible: {width: "100%"}
}

const AboutUs = () => {
    const [ref, inView] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

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
                <h1>When the efficiency will be seen?</h1>
                <div className={styles.subTitle}>
                    How
                    <img className={styles.logo} src={Logo2Image} alt="" />
                    works
                </div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    variants={container}
                    initial="hidden"
                    className={styles.blocks}
                >
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>First injection</h3>
                        <p>
                            21 days after the first injection,
                            the weight of the experimental group
                            of pigs inclinical trials increased by an average of 11.3% compared to the control group.
                        </p>
                        <motion.span className={styles.after} initial="hidden" animate={controls}
                                     transition={{delay: 1, duration: 1}}
                                     variants={afterItem} />
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>Second injection</h3>
                        <p>
                            21 days after the second injection,
                            the weight of the experimental group
                            of pigs inclinical trials increased by an average of 5% compared to the control group.
                        </p>
                        <motion.span className={styles.after} initial="hidden" animate={controls}
                                     transition={{delay: 2, duration: 1}}
                                     variants={afterItem} />
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>Final weight</h3>
                        <p>
                            By the time of the final weighing
                            (64 days after the first injection),
                            the weight of theexperimental group of pigs increased by 12% compared to the control group.
                        </p>
                    </motion.div>
                </motion.div>
                <div className={styles.card} id="about-us" ref={secondRef}>
                    <motion.h1
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: -100}
                        }}
                    >About<br />Technopharm Investment
                    </motion.h1>
                    <motion.img
                        animate={controls}
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
                            opened in Tashkent in 2019
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