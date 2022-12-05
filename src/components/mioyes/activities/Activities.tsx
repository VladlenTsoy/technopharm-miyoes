import React, {useEffect} from "react"
import styles from "./Activities.module.css"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"
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

const Activities = () => {
    const {t} = useTranslation()
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

    const [thirdRef, thirdInView] = useInView()
    const thirdControls = useAnimation()

    useEffect(() => {
        if (thirdInView) {
            thirdControls.start("visible")
        }
    }, [thirdControls, thirdInView])


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1>{t("home.activities_title")}</h1>
                    <motion.ul ref={ref}
                               animate={controls}
                               variants={container}
                               initial="hidden"
                    >
                        <motion.li variants={item}>
                            {t("home.activities_item_first")}
                        </motion.li>
                        <motion.li variants={item}>
                            {t("home.activities_item_second")}
                        </motion.li>
                        <motion.li variants={item}>
                            {t("home.activities_item_three")}
                        </motion.li>
                        <motion.li variants={item}>
                            {t("home.activities_item_fourth")}
                        </motion.li>
                    </motion.ul>
                </div>
                <h1>{t("home.core_values.title")}</h1>
                <motion.div className={styles.blocks} ref={secondRef}
                            animate={secondControls}
                            variants={container}
                            initial="hidden"
                >
                    <motion.div variants={item} className={styles.block}>
                        <div className={styles.card}>
                            <h3>{t("home.core_values.items.first.title")}</h3>
                            <p>{t("home.core_values.items.first.desc")}</p>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <div className={styles.card}>
                            <h3>{t("home.core_values.items.second.title")}</h3>
                            <p>{t("home.core_values.items.second.desc")}</p>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <div className={styles.card}>
                            <h3>{t("home.core_values.items.three.title")}</h3>
                            <p>{t("home.core_values.items.three.desc")}</p>
                        </div>
                    </motion.div>
                </motion.div>
                <div className={styles.content}>
                    <h1>{t("home.strategies.title")}</h1>
                    <motion.ul ref={thirdRef}
                               animate={thirdControls}
                               variants={container}
                               initial="hidden"
                               className={styles.strategies}>
                        <motion.li variants={item}>{t("home.strategies.items.first")}</motion.li>
                        <motion.li variants={item}>{t("home.strategies.items.second")}</motion.li>
                        <motion.li variants={item}>{t("home.strategies.items.three")}</motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}

export default Activities
