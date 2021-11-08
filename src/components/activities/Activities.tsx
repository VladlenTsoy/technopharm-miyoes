import React from "react"
import styles from "./Activities.module.css"

const Activities = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1>Technopharm Investments<br />activities</h1>
                    <ul>
                        <li>The company continually develop new drug formulations for both human and veterinary
                            medicine;
                        </li>
                        <li>The company invented a revolutionary drug formula for treatment of animal distrophia;</li>
                        <li>The company supplies human medical drugs across Central Asia and CIS;</li>
                        <li>The company established trustful relationships with distributors across Central Asia and CIS
                            since 2018
                        </li>
                    </ul>
                </div>
                <h1>Technopharm Investments<br />core values</h1>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div className={styles.card}>
                            <h3>HONESTY AND INTEGRITY</h3>
                            <p>Each employee maintains the highest ethical standards and acts to protect and uphold the
                                regulations and procedures required to produce quality drug products.</p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.card}>
                            <h3>QUALITY AND SAFETY</h3>
                            <p>The company is committed to producing safe and effective products, along with providing
                                reliable information and service to our partners. We also have a strict guideline to all
                                our
                                stakeholders to be sure that CSR is maintained in accordance with the corporate
                                culture.</p>
                        </div>
                    </div>
                    <div className={styles.block}>
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
                    </div>
                </div>
                <div className={styles.content}>
                    <h1>
                        The main strategies<br />
                        of the company for this year
                    </h1>
                    <ul className={styles.strategies}>
                        <li>Introduction of our products to new markets.</li>
                        <li>Expansion of a number of distributors on the global market.</li>
                        <li>Enhancement of the company's footprint worldwide.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Activities