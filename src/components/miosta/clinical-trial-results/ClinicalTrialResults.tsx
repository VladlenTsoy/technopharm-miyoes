import React, {useEffect} from "react"
import styles from "./ClinicalTrialResults.module.css"
import Bg1Image from "../../../assets/images/miosta/01/bg.svg"
import Bg1ImageRU from "../../../assets/images-ru/miosta/01/bg.svg"
import Content1Image from "../../../assets/images/miosta/01/content-1.svg"
import Content1ImageRU from "../../../assets/images-ru/miosta/01/content-1.svg"
import Content2Image from "../../../assets/images/miosta/02/content-1.svg"
import Content2ImageRU from "../../../assets/images-ru/miosta/02/content-1.svg"
import Content3Image from "../../../assets/images/miosta/03/content-1.svg"
import Content3ImageRU from "../../../assets/images-ru/miosta/03/content-1.svg"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useTranslation} from "react-i18next"

const ClinicalTrialResults = () => {
    const {t, i18n} = useTranslation()
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
                    <TitleColorAnimation>{t("miosta.clinical.title")}</TitleColorAnimation>
                    <b>{t("miosta.clinical.desc.first")}</b>
                    <div className={styles.wrapperImages}>
                        <motion.img
                            animate={controls}
                            initial="hidden"
                            transition={{duration: 1}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                            src={i18n.language === "ru" ? Bg1ImageRU : Bg1Image} alt=""
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
                            src={i18n.language === "ru" ? Content1ImageRU : Content1Image} alt=""
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <b>{t("miosta.clinical.desc.second")}</b>
                    <div className={styles.wrapperImages}>
                        <motion.img
                            animate={controls}
                            initial="hidden"
                            transition={{duration: 1, delay: 2}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                            src={i18n.language === "ru" ? Content2ImageRU : Content2Image} alt=""
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <b>{t("miosta.clinical.desc.three")}</b>
                    <div className={styles.wrapperImages}>
                        <motion.img
                            animate={controls}
                            initial="hidden"
                            transition={{duration: 1, delay: 2}}
                            variants={{
                                visible: {opacity: 1},
                                hidden: {opacity: 0}
                            }}
                            src={i18n.language === "ru" ? Content3ImageRU : Content3Image} alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicalTrialResults
