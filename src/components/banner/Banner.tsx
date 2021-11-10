import React from "react"
import BannerImage from "../../assets/images/box_1.png"
import styles from "./Banner.module.css"

const Banner = () => {
    return (
        <div className={styles.banner} id="home">
            <div className={styles.bg}>
                <img src={BannerImage} alt=""/>
            </div>
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