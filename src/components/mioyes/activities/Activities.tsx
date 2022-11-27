import React, {useEffect} from "react"
import styles from "./Activities.module.css"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"

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
                    <h1>Technopharm Investments<br />activities</h1>
                    <motion.ul ref={ref}
                               animate={controls}
                               variants={container}
                               initial="hidden"
                    >
                        <motion.li variants={item}>The company continually develop new drug formulations for both human
                            and veterinary
                            medicine;
                        </motion.li>
                        <motion.li variants={item}>The company invented a revolutionary drug formula for treatment of
                            animal distrophia;
                        </motion.li>
                        <motion.li variants={item}>The company supplies human medical drugs across Central Asia and
                            CIS;
                        </motion.li>
                        <motion.li variants={item}>The company established trustful relationships with distributors
                            across Central Asia and CIS
                            since 2018
                        </motion.li>
                    </motion.ul>
                </div>
                <h1>Technopharm Investments<br />core values</h1>
                <motion.div className={styles.blocks} ref={secondRef}
                            animate={secondControls}
                            variants={container}
                            initial="hidden"
                >
                    <motion.div variants={item} className={styles.block}>
                        <div className={styles.card}>
                            <h3>HONESTY AND INTEGRITY</h3>
                            <p>Each employee maintains the highest ethical standards and acts to protect and uphold the
                                regulations and procedures required to produce quality drug products.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <div className={styles.card}>
                            <h3>QUALITY AND SAFETY</h3>
                            <p>The company is committed to producing safe and effective products, along with providing
                                reliable information and service to our partners. We also have a strict guideline to all
                                our
                                stakeholders to be sure that CSR is maintained in accordance with the corporate
                                culture.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className={styles.block}>
                        <div className={styles.card}>
                            <h3>INNOVATION<br />AND CONTINUOUS IMPROVEMENT</h3>
                            <p>
                                Each employee has a “can do” attitude that manifests itself by creatively turning
                                problems
                                into solutions. This attitude is present at all levels in our company and is applied to
                                all
                                aspects of our operations. Each employee promotes and supports continuous efforts that
                                lead
                                to improvements in our processes, products, services and workplace.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                <div className={styles.content}>
                    <h1>
                        The main strategies<br />
                        of the company for this year
                    </h1>
                    <motion.ul ref={thirdRef}
                               animate={thirdControls}
                               variants={container}
                               initial="hidden"
                               className={styles.strategies}>
                        <motion.li variants={item}>Introduction of our products to new markets.</motion.li>
                        <motion.li variants={item}>Expansion of a number of distributors on the global market.
                        </motion.li>
                        <motion.li variants={item}>Enhancement of the company's footprint worldwide.</motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    )
}

export default Activities