import React, {useState} from "react"
import LogoImage from "../../assets/images/logo.svg"
import styles from "./Header.module.css"
import ReactDOM from "react-dom"
import {AnimatePresence, motion} from "framer-motion"

const Header = () => {
    const [visible, setVisible] = useState(false)

    const onCloseHandler = () => {
        setVisible(false)
    }

    const onClickHandler = () => {
        setVisible(true)
    }

    const onScrollHandler = (id: string) => {
        const element = document.getElementById(id)
        element && element.scrollIntoView({block: "start", behavior: "smooth"})
    }

    return (
        <>
            <div className={styles.mobileMenu} onClick={onClickHandler}>
                <span />
                <span />
                <span />
            </div>
            <AnimatePresence>
                {visible && <Drawer onCloseHandler={onCloseHandler} />}
            </AnimatePresence>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={LogoImage} alt="technopharm" />
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.item} onClick={() => onScrollHandler("home")}>Home</div>
                        <div className={styles.item} onClick={() => onScrollHandler("about-us")}>About us</div>
                        <div className={styles.item} onClick={() => onScrollHandler("products")}>Products</div>
                        <div className={styles.item} onClick={() => onScrollHandler("contacts")}>Contacts</div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface DrawerProps {
    onCloseHandler: any
}

const Drawer: React.FC<DrawerProps> = ({onCloseHandler}) => {

    const onScrollHandler = (id: string) => {
        const element = document.getElementById(id)
        element && element.scrollIntoView({block: "start", behavior: "smooth"})
    }

    return ReactDOM.createPortal(
        <motion.div className={styles.drawer} initial={{x: 250}} exit={{x: 250}} animate={{x: 0}}>
            <>
                <div className={styles.close} onClick={onCloseHandler} />
                <div className={styles.menu}>
                    <div className={styles.item} onClick={() => onScrollHandler("home")}>Home</div>
                    <div className={styles.item} onClick={() => onScrollHandler("about-us")}>About us</div>
                    <div className={styles.item} onClick={() => onScrollHandler("products")}>Products</div>
                    <div className={styles.item} onClick={() => onScrollHandler("contacts")}>Contacts</div>
                </div>
            </>
        </motion.div>, document.body
    )
}

export default Header