import React, {useEffect} from "react"
import {useInView} from "react-intersection-observer"
import {motion, useAnimation} from "framer-motion"
import styles from "./Banner.module.css"
import BannerImage from "../../../assets/images/miosta/box_1.png"
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
        <div className={`miosta ${styles.banner}`} id="home">
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
                        Miosta
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
                        it is a new receptor drug for the treatment <br/>
                        of alimentary dystrophy and protein-energy <br/>
                        malnutrition (PEM)
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner