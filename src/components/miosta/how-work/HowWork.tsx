import React, {useEffect} from "react"
import styles from "./HowWork.module.css"
import image3 from "../../../assets/images/miosta/how-work-01.svg"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"
import {useTranslation} from "react-i18next"

const HowWork = () => {
    const {t} = useTranslation()
    const [secondRef, secondInView] = useInView()
    const secondControls = useAnimation()

    useEffect(() => {
        if (secondInView) {
            secondControls.start("visible")
        }
    }, [secondControls, secondInView])

    return (
        <div className={styles.howWork} ref={secondRef} id="products">
            <div className={styles.image}>
                <motion.img
                    src={image3} alt=""
                    animate={secondControls}
                    initial="hidden"
                    transition={{duration: 1}}
                    variants={{
                        visible: {opacity: 1, x: 0},
                        hidden: {opacity: 0, x: -100}
                    }}
                />
            </div>
            <div className={styles.content}>
                <TitleColorAnimation>Miosta Н <span className="r">®</span></TitleColorAnimation>
                <motion.div
                    className={styles.text}
                    animate={secondControls}
                    initial="hidden"
                    transition={{duration: 1, delay: 1}}
                    variants={{
                        visible: {opacity: 1, x: 0},
                        hidden: {opacity: 0, x: 100}
                    }}
                >
                    <p>
                        {t("miosta.how_work.desc")}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default HowWork
