import React from "react"
import styles from "./ClinicalTrialResults.module.css"
import Bg1Image from "../../assets/images/01/bg.svg"
import Content1Image from "../../assets/images/01/content-1.svg"
import Content2Image from "../../assets/images/02/content-1.svg"
import TitleColorAnimation from "../title/TitleColorAnimation"

const ClinicalTrialResults = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <TitleColorAnimation>Clinical trial results</TitleColorAnimation>
                    <b>Increase in the weight gain of pigs during clinical trials, in kg</b>
                    <div className={styles.wrapperImages}>
                        <img src={Bg1Image} alt="" />
                        <img className={styles.imageContent} src={Content1Image} alt="" />
                    </div>
                </div>
                <div className={styles.content}>
                    <b>Increase in the daily weight gain of pigs during clinical trials, in gramm</b>
                    <div className={styles.wrapperImages}>
                        <img src={Content2Image} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <h1>Clinical trials of Mioyes showed</h1>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <b>high efficiency of action,</b> since the drug blocks
                        <b> the activin receptor (ActRIIb)</b> and <b>does not require
                        constant administration to the body</b> in high doses,
                        like myostatin blockers;
                    </div>
                    <div className={styles.block}>
                        the drug is <b>not hormonal in nature,</b> since only a fragment
                        of the ActRIIb receptor is present in its composition;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicalTrialResults