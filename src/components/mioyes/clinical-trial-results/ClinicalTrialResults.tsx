import React, {useEffect} from "react"
import styles from "./ClinicalTrialResults.module.css"
import Bg1Image from "../../../assets/images/01/bg.svg"
import Content1Image from "../../../assets/images/01/content-1.svg"
import Content2Image from "../../../assets/images/02/content-1.svg"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

const ClinicalTrialResults = () => {
    const [ref, inView] = useInView()
    const [secondRef, secondInView] = useInView()
    const controls = useAnimation()
    const secondControls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    useEffect(() => {
        if (secondInView) {
            secondControls.start("visible")
        }
    }, [secondControls, secondInView])


    return (
        <div
            ref={ref}
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <TitleColorAnimation>Clinical trial results</TitleColorAnimation>
                    <b>Increase in the weight gain of pigs during clinical trials, in kg</b>
                    <div className={styles.wrapperImages}>
                        <motion.img
                            animate={controls}
                            initial="hidden"
                            transition={{duration: 1}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                            src={Bg1Image} alt=""
                        />
                        <motion.img
                            animate={controls}
                            initial="hidden"
                            transition={{duration: 1, delay: 1}}
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: 100}
                            }}
                            className={styles.imageContent}
                            src={Content1Image} alt=""
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <b>Increase in the daily weight gain of pigs during clinical trials, in gramm</b>
                    <div className={styles.wrapperImages}>
                        <motion.img
                            animate={controls}
                            initial="hidden"
                            transition={{duration: 1, delay: 2}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                            src={Content2Image} alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.card} ref={secondRef}>
                <h1>Clinical trials of Mioyes H showed</h1>
                <div className={styles.blocks}>
                    <motion.div
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1},
                            hidden: {opacity: 0}
                        }}
                        className={styles.block}>
                        <b>high efficiency of action,</b> since the drug blocks
                        <b> the activin receptor (ActRIIb)</b> and <b>does not require
                        constant administration to the body</b> in high doses,
                        like myostatin blockers;
                    </motion.div>
                    <motion.div
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1, delay: 1}}
                        variants={{
                            visible: {opacity: 1},
                            hidden: {opacity: 0}
                        }}
                        className={styles.block}>
                        the drug is <b>not hormonal in nature,</b> since only a fragment
                        of the ActRIIb receptor is present in its composition;
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ClinicalTrialResults
