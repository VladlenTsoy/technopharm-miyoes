import React from "react"
import BannerImage from "../../assets/images/banner.svg"
import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={styles.banner} style={{backgroundImage: BannerImage}}>
            <div className={styles.container}>
               <div className={styles.content}>
                   <h1>What is Miyoes</h1>
                   <div>And why this drug is neseccary<br />in animal husbandry?</div>
               </div>
            </div>
        </div>
    )
}

export default Banner