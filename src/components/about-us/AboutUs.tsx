import React, {useEffect} from "react"
import styles from "./AboutUs.module.css"
import AboutImageRU from "../../assets/images-ru/about.svg"
import AboutImage from "../../assets/images/about.svg"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useTranslation} from "react-i18next"

const AboutUs = () => {
    const {t, i18n} = useTranslation()
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
                    >{t("home.about")}
                    </motion.h1>
                    <motion.img
                        animate={secondControls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 100}
                        }}
                        src={i18n.language === "ru" ? AboutImageRU : AboutImage} alt="" />
                    <div className={styles.items}>
                        <div className={styles.item}>
                            {t("home.about_item_first")}
                        </div>
                        <div className={styles.item}>
                            {t("home.about_item_second")}
                        </div>
                        <div className={styles.item}>
                            {t("home.about_item_three")}
                        </div>
                        <div className={styles.item}>
                            {t("home.about_item_fourth")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
