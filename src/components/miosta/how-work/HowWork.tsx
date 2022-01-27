import React, {useEffect} from "react"
import styles from "./HowWork.module.css"
import image3 from "../../../assets/images/miosta/how-work-01.svg"
import TitleColorAnimation from "../../title/TitleColorAnimation"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"

const HowWork = () => {
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
                <TitleColorAnimation>Miosta Н</TitleColorAnimation>
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
                        is a recombinant protein in which a fragment of an activin receptor (ActRIIb)
                        is attached to a carrier protein. The introduction of this drug to animals causes
                        the formation of auto-antibodies to the receptor in the body.
                        Auto-antibodies, specifically binding to the activin receptor (ActRIIb), block it from
                        interacting with myostatin, which leads to accelerated muscle growth.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default HowWork
