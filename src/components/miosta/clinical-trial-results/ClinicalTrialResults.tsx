import React, {useEffect} from "react"
import styles from "./ClinicalTrialResults.module.css"
import Bg1Image from "../../../assets/images/miosta/01/bg.svg"
import Content1Image from "../../../assets/images/miosta/01/content-1.svg"
import Content2Image from "../../../assets/images/miosta/02/content-1.svg"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

const ClinicalTrialResults = () => {
    const [ref, inView] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div
            ref={ref}
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <TitleColorAnimation>Clinical trial results</TitleColorAnimation>
                    <b>Increase in weight gain of calves in clinical trials, kg</b>
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
                    <b>Increase in daily weight gain of calves in clinical trials, kg</b>
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
        </div>
    )
}

export default ClinicalTrialResults