import React from "react"
import LogoImage from "../../assets/images/logo.svg"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={LogoImage} alt="technopharm" />
                </div>
                <div className={styles.menu}>
                    <div className={styles.item}>Home</div>
                    <div className={styles.item}>About us</div>
                    <div className={styles.item}>Products</div>
                    <div className={styles.item}>Contacts</div>
                </div>
            </div>
        </div>
    )
}

export default Header