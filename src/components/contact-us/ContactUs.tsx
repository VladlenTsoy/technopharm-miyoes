import React from "react"
import styles from "./ContactUs.module.css"
import UkImage from "../../assets/images/uk.svg"
import RuImage from "../../assets/images/ru.svg"
import UzImage from "../../assets/images/uz.svg"

const ContactUs = () => {
    return (
        <div className={styles.wrapper} id="contacts">
            <h1>Contact us</h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.titleBlock}>
                        <img src={UkImage} className={styles.flag} alt="" />
                        <div className={styles.title}>UK office</div>
                    </div>
                    <p>64a Cumberland Street, Edinburgh, Scotland, EH3 6RE</p>
                    <p>Ph.No.: +44 7518 735822</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.titleBlock}>
                        <img src={RuImage} className={styles.flag} alt="" />
                        <div className={styles.title}>Representative office in Russian Federation</div>
                    </div>
                    <p>125367, Gabrichevskii st., 5, office 209, Moscow, Russia</p>
                    <p>Ph.No.: +7 915 443 1111</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.titleBlock}>
                        <img src={UzImage} className={styles.flag} alt="" />
                        <div className={styles.title}>Representative office in Uzbekistan</div>
                    </div>
                    <p>100070, Bogidil st., 2A, Tashkent, Uzbekistan</p>
                    <p>Ph.No.: +998 90 902 20 01</p>
                </div>
            </div>
            <div className={styles.email}>
                Email: <b>info@technopharm.co.uk</b>
            </div>
        </div>
    )
}

export default ContactUs