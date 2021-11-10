import React from "react"
import styles from "./HowWork.module.css"
import image1 from "../../assets/images/how-work-01.svg"
import image2 from "../../assets/images/how-work-02.svg"
import image3 from "../../assets/images/how-work-03.svg"

const HowWork = () => {
    return (
        <div className={styles.howWork} id="products">
            <h1>How does<br />Mioyes work?</h1>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
                <div className={styles.text}>
                    <p>
                        The mechanism of action of the drug
                        is based on the production in the body
                        of animals of <b>auto-antibodies to the active
                        receptor (ActRIIb),</b> blocking its binding
                        to myostatin and, as a consequence,
                        accelerating the growth of animal muscles.
                    </p>
                </div>
            </div>
            <div className={styles.second}>
                <div className={styles.image}>
                    <img src={image3} alt=""/>
                </div>
                <div className={styles.content}>
                    <h1>How does<br />Mioyes work?</h1>
                    <div className={styles.text}>
                        <p>
                            Mioyes is a recombinant protein in which a fragment of an activin receptor (ActRIIb) is attached to a carrier protein. The introduction of this drug to animals causes
                            the formation of auto-antibodies to the receptor in the body.<br/>
                            Auto-antibodies, specifically binding to the activin receptor (ActRIIb), block it from binding to myostatin, which leads to accelerated muscle growth.<br/>
                            Mioyes does not block myostatin, but its interaction with the activin receptor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWork