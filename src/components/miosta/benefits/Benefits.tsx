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
                    <div className={styles.title}>
                        A drug for the treatment of alimentary dystrophy
                        and protein-energy malnutrition (PEM).
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
                            Normalization of protein metabolism
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
                            Positive changes in the clinical status of calves (improved appetite, coat (smooth and shiny), motor activity);
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
                            Increasing the daily weight gain of animals;
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
                            Additional benefits for the farmer up to 15%.
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className={styles.card}>
                    <div className={styles.wrapper} ref={secondRef}>
                        <TitleColorAnimation>Application of Miosta Н<span className="r">®</span>{'\u00A0'}{'\u00A0'}allows:</TitleColorAnimation>
                        <motion.ul
                            variants={container}
                            initial="hidden"
                            animate={secondControls}
                        >
                            <motion.li
                                variants={secondItem}
                            >
                                increase the muscle mass of the animal up to 12-15%;
                            </motion.li>
                            <motion.li
                                variants={secondItem}
                            >
                                increase the daily weight gain of calves up to 20%;
                            </motion.li>
                            <motion.li
                                variants={secondItem}
                            >
                                to increase the protein content in the body of animals up to 12%;
                            </motion.li>
                            <motion.li
                                variants={secondItem}
                            >
                                to increase the physical activity of animals.
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
