import React, {useEffect} from "react"
import styles from "./Arguments.module.css"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"
import {useTranslation} from "react-i18next"

const Arguments = () => {
    const {t} = useTranslation()
    const [ref, inView] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <div className={styles.arguments}>
            <motion.div
                className={styles.card}
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{duration: 1}}
                variants={{
                    visible: {opacity: 1, y: 0},
                    hidden: {opacity: 0, y: 100}
                }}
            >
                <div className={styles.item}>
                    <h2>{t("miosta.arguments.title")}</h2>
                </div>
                <div className={styles.item}>
                    <ul>
                        <li>{t("miosta.arguments.items.first")}</li>
                        <li>{t("miosta.arguments.items.second")}</li>
                    </ul>
                    <b>{t("miosta.arguments.items.three")}</b>
                </div>
            </motion.div>
        </div>
    )
}

export default Arguments
