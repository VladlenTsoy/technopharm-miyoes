import React, {useEffect} from "react"
import styles from "./Benefits.module.css"
import LogoImage from "../../../assets/images/miosta/logo-2.svg"
import Icon3Image from "../../../assets/images/miosta/icon-3.svg"
import Icon4Image from "../../../assets/images/miosta/icon-5.svg"
import Icon5Image from "../../../assets/images/miosta/icon-4.svg"
import Icon6Image from "../../../assets/images/miosta/icon-6.svg"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {useTranslation} from "react-i18next"

const container = {
    visible: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5
        }
    }
}

const item = {
    hidden: {y: 20, opacity: 0},
    visible: {y: 0, opacity: 1}
}

const secondItem = {
    hidden: {x: 20, opacity: 0},
    visible: {x: 0, opacity: 1}
}

const Benefits = () => {
    const {t} = useTranslation()
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
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img src={LogoImage} alt="logo" />
                    </div>
                    <div className={styles.title}>
                        {t("miosta.benefits.desc")}
                    </div>
                </div>
                <motion.div
                    className={styles.content}
                    ref={ref}
                    variants={container}
                >
                    <motion.div
                        className={styles.item}
                        animate={controls}
                        variants={container}
                        initial="hidden"
                    >
                        <motion.img variants={item} src={Icon3Image} alt="" />
                        <motion.div variants={item} className={styles.desc}>
                            {t("miosta.benefits.items.first")}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.item}
                        animate={controls}
                        variants={container}
                        initial="hidden"
                    >
                        <motion.img variants={item} transition={{delay: 1.5}}
                                    src={Icon5Image} alt="" />
                        <motion.div variants={item} transition={{delay: 2}} className={styles.desc}>
                            {t("miosta.benefits.items.second")}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.item}
                        animate={controls}
                        variants={container}
                        initial="hidden"
                    >
                        <motion.img variants={item} transition={{delay: 2.5}} src={Icon4Image} alt="" />
                        <motion.div variants={item} transition={{delay: 3}} className={styles.desc}>
                            {t("miosta.benefits.items.three")}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.item}
                        animate={controls}
                        variants={container}
                        initial="hidden"
                    >
                        <motion.img variants={item} transition={{delay: 3.5}} src={Icon6Image} alt="" />
                        <motion.div variants={item} transition={{delay: 4}} className={styles.desc}>
                            {t("miosta.benefits.items.fourth")}
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className={styles.card}>
                    <div className={styles.wrapper} ref={secondRef}>
                        <TitleColorAnimation>{t("miosta.application.title.first")}{" "}
                            <span className="textLogo">Miosta Н<span className="r">®</span>
                            </span>{"\u00A0"}{"\u00A0"}{t("miosta.application.title.second")}:
                        </TitleColorAnimation>
                        <motion.ul
                            variants={container}
                            initial="hidden"
                            animate={secondControls}
                        >
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.1")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.2")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.3")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.4")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.5")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.6")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.7")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.8")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.9")}
                            </motion.li>
                            <motion.li variants={secondItem}>
                                {t("miosta.application.items.10")}
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
