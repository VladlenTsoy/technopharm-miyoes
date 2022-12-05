import React, {useEffect} from "react"
import BannerImage from "../../../assets/images/box_1.png"
import BannerImageRU from "../../../assets/images-ru/mioyes/box_1.png"
import styles from "./Banner.module.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {useTranslation} from "react-i18next"

const Banner = () => {
    const {t, i18n} = useTranslation()
    const [ref, inView] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div className={styles.banner} id="home">
            <motion.div
                className={styles.bg}
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{duration: 1}}
                variants={{
                    visible: {opacity: 1, y: 0},
                    hidden: {opacity: 0, y: 100}
                }}
            >
                <img src={i18n.language === "ru" ? BannerImageRU : BannerImage} alt="" />
            </motion.div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <TitleColorAnimation>
                        {t("mioyes.banner.title")}{" "}
                        <span className="textLogo">Mioyes H<span className="r">®</span></span>
                    </TitleColorAnimation>
                    <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: 100}
                        }}
                    >
                        {t("mioyes.banner.desc")}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner
