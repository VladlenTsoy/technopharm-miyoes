import React, {useEffect} from "react"
import styles from "./HowWork.module.css"
import image1 from "../../assets/images/how-work-01.svg"
import image2 from "../../assets/images/how-work-02.svg"
import image3 from "../../assets/images/how-work-03.svg"
import TitleColorAnimation from "../title/TitleColorAnimation"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"

const HowWork = () => {
    const [ref, inView] = useInView()
    const controls = useAnimation()
    const [secondRef, secondInView] = useInView()
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
        <div className={styles.howWork} id="products">
            <TitleColorAnimation>How does<br />Mioyes work?</TitleColorAnimation>
            <div className={styles.container} ref={ref}>
                <div className={styles.icons}>
                    <motion.img src={image1} alt=""
                                animate={controls}
                                initial="hidden"
                                transition={{duration: 1}}
                                variants={{
                                    visible: {opacity: 1, y: 0},
                                    hidden: {opacity: 0, y: -100}
                                }}
                    />
                    <motion.img src={image2} alt=""
                                animate={controls}
                                initial="hidden"
                                transition={{duration: 1}}
                                variants={{
                                    visible: {opacity: 1, y: 0},
                                    hidden: {opacity: 0, y: 100}
                                }}
                    />
                </div>
                <div className={styles.text}>
                    <motion.p
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1, delay: 1}}
                        variants={{
                            visible: {opacity: 1, x: 0},
                            hidden: {opacity: 0, x: 100}
                        }}
                    >
                        The mechanism of action of the drug
                        is based on the production in the body
                        of animals of <b>auto-antibodies to the active
                        receptor (ActRIIb),</b> blocking its binding
                        to myostatin and, as a consequence,
                        accelerating the growth of animal muscles.
                    </motion.p>
                </div>
            </div>
            <div className={styles.second} ref={secondRef}>
                <div className={styles.image}>
                    <motion.img
                        src={image3} alt=""
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1}}
                        variants={{
                            visible: {opacity: 1, x: 0},
                            hidden: {opacity: 0, x: -100}
                        }}
                    />
                </div>
                <div className={styles.content}>
                    <TitleColorAnimation>How does<br />Mioyes work?</TitleColorAnimation>
                    <motion.div
                        className={styles.text}
                        animate={controls}
                        initial="hidden"
                        transition={{duration: 1, delay: 1}}
                        variants={{
                            visible: {opacity: 1, x: 0},
                            hidden: {opacity: 0, x: 100}
                        }}
                    >
                        <p>
                            Mioyes is a recombinant protein in which a fragment of an activin receptor (ActRIIb) is
                            attached to a carrier protein. The introduction of this drug to animals causes
                            the formation of auto-antibodies to the receptor in the body.<br />
                            Auto-antibodies, specifically binding to the activin receptor (ActRIIb), block it from
                            binding to myostatin, which leads to accelerated muscle growth.<br />
                            Mioyes does not block myostatin, but its interaction with the activin receptor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HowWork