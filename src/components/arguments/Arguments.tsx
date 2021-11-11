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
                    visible: {opacity: 1, x: 0},
                    hidden: {opacity: 0, x: -100}
                }}
            >
                <h2>8 out of 10</h2>
                <p>
                    Livestrock breeders believe that the use of hormonal
                    drugs has a negative effect of meat, but without them
                    stimulating the growth of muscle mass in animals is
                    impossible
                </p>
            </motion.div>
            <motion.div
                className={styles.card}
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{duration: 1}}
                variants={{
                    visible: {opacity: 1, x: 0},
                    hidden: {opacity: 0, x: 100}
                }}
            >
                <h2>10 out of 10</h2>
                <p>
                    Breeders believe that for the growth of animal
                    muscle mass, it is necessary to increase the amount
                    of feed, which significantly increases the cost
                    of keeping animals
                </p>
            </motion.div>
        </div>
    )
}

export default Arguments