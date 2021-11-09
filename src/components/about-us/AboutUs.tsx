import React from "react"
import styles from "./AboutUs.module.css"
import Logo2Image from "../../assets/images/logo-2.svg"
import AboutImage from "../../assets/images/about.svg"

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>When the efficiency will be seen?</h1>
                <div className={styles.subTitle}>
                    How
                    <img className={styles.logo} src={Logo2Image} alt="" />
                    works
                </div>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <h3>First injection</h3>
                        <p>
                            21 days after the first injection,
                            the weight of the experimental group
                            of pigs inclinical trials increased by an average of 11.3% compared to the control group.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <h3>Second injection</h3>
                        <p>
                            21 days after the second injection,
                            the weight of the experimental group
                            of pigs inclinical trials increased by an average of 5% compared to the control group.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <h3>Final weight</h3>
                        <p>
                            By the time of the final weighing
                            (64 days after the first injection),
                            the weight of theexperimental group of pigs increased by 12% compared to the control group.
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <h1>About<br />Technopharm Investment</h1>
                    <img src={AboutImage} alt="" />
                    <div className={styles.items}>
                        <div className={styles.item}>
                            Company was established
                            in 2018 in Scotland
                        </div>
                        <div className={styles.item}>
                            The sales office was opened
                            in Moscow in 2018
                        </div>
                        <div className={styles.item}>
                            The representative office was
                            opened in Tashkent in 2019
                        </div>
                        <div className={styles.item}>
                            The penetration to South East
                            Asian market in 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs