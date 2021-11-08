import React from "react"
import styles from "./Benefits.module.css"
import LogoImage from "../../assets/images/logo-2.svg"
import Icon3Image from "../../assets/images/icon-3.svg"
import Icon4Image from "../../assets/images/icon-4.svg"
import Icon5Image from "../../assets/images/icon-5.svg"
import Icon6Image from "../../assets/images/icon-6.svg"

const Benefits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img src={LogoImage} alt="logo" />
                    </div>
                    <div className={styles.title}>Perfect metabolite to stimulate musclegrowth in animals</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <img src={Icon3Image} alt="" />
                        <div className={styles.desc}>Additional profit to the farmer up to 15%</div>
                    </div>
                    <div className={styles.item}>
                        <img src={Icon5Image} alt="" />
                        <div className={styles.desc}>Safe final processed food</div>
                    </div>
                    <div className={styles.item}>
                        <img src={Icon4Image} alt="" />
                        <div className={styles.desc}>Cost-saving for livestock keeping</div>
                    </div>
                    <div className={styles.item}>
                        <img src={Icon6Image} alt="" />
                        <div className={styles.desc}>Enhanced meat quality</div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <h1>Biological effects of injecting Mioyes</h1>
                        <ul>
                            <li>Increase in muscle mass</li>
                            <li>Improving the taste of meat by increasing the protein quality indicator</li>
                            <li>Improving the physical condition of the animal</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits