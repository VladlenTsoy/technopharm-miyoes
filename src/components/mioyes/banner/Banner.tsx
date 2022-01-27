import React, {useEffect} from "react"
import BannerImage from "../../../assets/images/box_1.png"
import styles from "./Banner.module.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import TitleColorAnimation from "../../title/TitleColorAnimation"

const Banner = () => {
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
                <img src={BannerImage} alt="" />
            </motion.div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <TitleColorAnimation>
                        What is Miyoes
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
                        And why this drug is necessary<br />in animal husbandry?
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner