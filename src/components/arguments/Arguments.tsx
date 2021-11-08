import React from "react"
import styles from "./Arguments.module.css"

const Arguments = () => {
    return (
        <div className={styles.arguments}>
            <div className={styles.card}>
                <h2>8 out of 10</h2>
                <p>
                    Livestrock breeders believe that the use of hormonal
                    drugs has a negative effect of meat, but without them
                    stimulating the growth of muscle mass in animals is
                    impossible
                </p>
            </div>
            <div className={styles.card}>
                <h2>10 out of 10</h2>
                <p>
                    Breeders believe that for the growth of animal
                    muscle mass, it is necessary to increase the amount
                    of feed, which significantly increases the cost
                    of keeping animals
                </p>
            </div>
        </div>
    )
}

export default Arguments