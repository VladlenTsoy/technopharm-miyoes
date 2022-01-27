import React, {useEffect} from "react"
import styles from "./AboutUs.module.css"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

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
                <h1>When the efficiency of will be seen?</h1>
                <div className={styles.subTitle}>results of clinical trials, carried out on calves</div>
                <motion.div
                    ref={ref}
                    animate={controls}
                    variants={container}
                    initial="hidden"
                    className={styles.blocks}
                >
                    <motion.div variants={item} className={styles.block}>
                        <motion.span className={styles.before} />
                        <h3>First injection</h3>
                        <p>
                            2 months after the first injection,
                            the weight of the experimental group of calves
                            in clinical trials increased by an average
                            of 12.8% compared to the control group.
                        </p>
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
                        <h3>Second injection</h3>
                        <p>
                            4 months after the first injection,
                            the weight of the experimental group of calves
                            in clinical trials increased by an average
                            of 22.8% compared to the control group.
                        </p>
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
                        <h3>Final weight</h3>
                        <p>
                            By the time of the final weighing
                            (6 months after the first injection),
                            the weight of the experimental group
                            of calves increased by 29.6% compared
                            to the control group.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs
