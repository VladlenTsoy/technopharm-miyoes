import React, {useEffect} from "react"
import styles from "./AboutUs.module.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {useTranslation} from "react-i18next"

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

const AboutUs = () => {
    const {t} = useTranslation()
    const [ref, inView] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>{t("miosta.about.title")}</h1>
                <div className={styles.subTitle}>{t("miosta.about.desc")}</div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    variants={container}
                    initial="hidden"
                    className={styles.blocks}
                >
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>{t("miosta.about.items.first.title")}</h3>
                        <p dangerouslySetInnerHTML={{__html: t("miosta.about.items.first.desc")}} />
                        <motion.span
                            className={styles.after}
                            initial="hidden"
                            animate={controls}
                            transition={{delay: 1, duration: 1}}
                            variants={{
                                hidden: {width: 0},
                                visible: {width: "100%"}
                            }}
                        />
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>{t("miosta.about.items.second.title")}</h3>
                        <p dangerouslySetInnerHTML={{__html: t("miosta.about.items.second.desc")}} />
                        <motion.span
                            className={styles.after}
                            initial="hidden"
                            animate={controls}
                            transition={{delay: 2, duration: 1}}
                            variants={{
                                hidden: {width: 0},
                                visible: {width: "calc(100% - 28px)"}
                            }}
                        />
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>{t("miosta.about.items.three.title")}</h3>
                        <p dangerouslySetInnerHTML={{__html: t("miosta.about.items.three.desc")}} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs
