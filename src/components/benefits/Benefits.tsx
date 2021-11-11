import React, {useEffect} from "react"
import styles from "./Benefits.module.css"
import LogoImage from "../../assets/images/logo-2.svg"
import Icon3Image from "../../assets/images/icon-3.svg"
import Icon4Image from "../../assets/images/icon-4.svg"
import Icon5Image from "../../assets/images/icon-5.svg"
import Icon6Image from "../../assets/images/icon-6.svg"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"
import TitleColorAnimation from "../title/TitleColorAnimation"

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
                    <div className={styles.title}>Perfect metabolite to stimulate musclegrowth in animals</div>
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
                        <motion.div variants={item} className={styles.desc}>Additional profit to the farmer up to 15%
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
                        <motion.div variants={item} transition={{delay: 2}} className={styles.desc}>Safe final processed
                            food
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.item}
                        animate={controls}
                        variants={container}
                        initial="hidden"
                    >
                        <motion.img variants={item} transition={{delay: 2.5}} src={Icon4Image} alt="" />
                        <motion.div variants={item} transition={{delay: 3}} className={styles.desc}>Cost-saving for
                            livestock keeping
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={styles.item}
                        animate={controls}
                        variants={container}
                        initial="hidden"
                    >
                        <motion.img variants={item} transition={{delay: 3.5}} src={Icon6Image} alt="" />
                        <motion.div variants={item} transition={{delay: 4}} className={styles.desc}>Enhanced meat
                            quality
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className={styles.card}>
                    <div className={styles.wrapper} ref={secondRef}>
                        <TitleColorAnimation>Biological effects of injecting Mioyes</TitleColorAnimation>
                        <motion.ul
                            variants={container}
                            initial="hidden"
                            animate={secondControls}
                        >
                            <motion.li
                                variants={secondItem}
                            >
                                Increase in muscle mass
                            </motion.li>
                            <motion.li
                                variants={secondItem}
                            >
                                Improving the taste of meat by increasing the protein quality indicator
                            </motion.li>
                            <motion.li
                                variants={secondItem}
                            >
                                Improving the physical condition of the animal
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits