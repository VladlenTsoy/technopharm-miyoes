import React, {useEffect} from "react"
import styles from "./Arguments.module.css"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"

const Arguments = () => {
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
                    <h2>
                        Сhallenges faced <br/>
                        by livestock <br/>
                        breeders:
                    </h2>
                </div>
                <div className={styles.item}>
                    <ul>
                        <li>violation of absorption and assimilation
                            of the protein component of feed by the animal's body,
                        </li>
                        <li>chronic digestive disorders of animals</li>
                    </ul>
                    <b>leading to alimentary dystrophy of cattle.</b>
                </div>
            </motion.div>
        </div>
    )
}

export default Arguments