import React, {useState} from "react"
import LogoImage from "../../assets/images/logo.svg"
import styles from "./Header.module.css"
import ReactDOM from "react-dom"
import {Link, useHistory} from "react-router-dom"
import {AnimatePresence, motion} from "framer-motion"
import {useTranslation} from "react-i18next"
import ArrowImage from "../../assets/images/arrow.svg"
import cn from "classnames"

const Header = () => {
    const {t, i18n} = useTranslation()
    const [dropdown, setDropdown] = useState(false)
    const [lang, setLang] = useState(false)
    const [visible, setVisible] = useState(false)
    const history = useHistory()

    const onCloseHandler = () => setVisible(false)
    const onClickHandler = () => setVisible(true)


    const onScrollHandler = async (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({block: "start", behavior: "smooth"})
        } else {
            await history.push("/")
            const elementS = document.getElementById(id)
            elementS && elementS.scrollIntoView({block: "start", behavior: "smooth"})
        }
    }

    const changeLanguageHandler = (lang: string) => {
        i18n.changeLanguage(lang).then()
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
                        <Link to="/" className={styles.item}>{t("header.home")}</Link>
                        <div className={styles.item} onClick={() => onScrollHandler("about-us")}>
                            {t("header.about_us")}
                        </div>
                        <div className={styles.dropdownWrapper}
                             onPointerEnter={() => setDropdown(true)}
                             onPointerLeave={() => setDropdown(false)}
                        >
                            <div className={styles.item}>{t("header.products")}</div>
                            <motion.div
                                initial={{opacity: 0, y: 100, display: "none"}}
                                animate={dropdown ?
                                    {opacity: 1, y: 0, display: "block"} : {
                                        opacity: 0,
                                        y: 100,
                                        display: "none"
                                    }}
                                className={styles.dropdown}>
                                {/*<Link to="/mioyes" className={styles.dropdownItem}>Mioyes Н</Link>*/}
                                <Link to="/miosta" className={styles.dropdownItem}>Miosta Н</Link>
                            </motion.div>
                        </div>

                        <div className={styles.item} onClick={() => onScrollHandler("contacts")}>
                            {t("header.contacts")}
                        </div>

                        <div className={styles.dropdownWrapper}
                             onPointerEnter={() => setLang(true)}
                             onPointerLeave={() => setLang(false)}
                        >
                            <div className={cn(styles.item, styles.itemLang)}>
                                {i18n.language?.includes("ru") ? "RU" : "EN"}
                                <span />
                                <img className={styles.arrow} src={ArrowImage} alt="arrow" /></div>
                            <motion.div
                                initial={{opacity: 0, y: 100, display: "none"}}
                                animate={lang ?
                                    {opacity: 1, y: 0, display: "block"} : {
                                        opacity: 0,
                                        y: 100,
                                        display: "none"
                                    }}
                                className={styles.dropdown}
                                style={{right: 0}}
                            >
                                <div className={styles.dropdownItem} onClick={() => changeLanguageHandler("en")}>
                                    EN
                                </div>
                                <div className={styles.dropdownItem} onClick={() => changeLanguageHandler("ru")}>
                                    RU
                                </div>
                            </motion.div>
                        </div>
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
    const {t, i18n} = useTranslation()
    const history = useHistory()

    const onScrollHandler = async (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({block: "start", behavior: "smooth"})
        } else {
            await history.push("/")
            const elementS = document.getElementById(id)
            elementS && elementS.scrollIntoView({block: "start", behavior: "smooth"})
        }
    }

    const changeLanguageHandler = (lang: string) => {
        i18n.changeLanguage(lang).then()
    }

    return ReactDOM.createPortal(
        <motion.div className={styles.drawer} initial={{x: 250}} exit={{x: 250}} animate={{x: 0}}>
            <>
                <div className={styles.close} onClick={onCloseHandler} />
                <div className={styles.menu}>
                    <Link className={styles.item} to="/">{t("header.home")}</Link>
                    <div className={styles.item}
                         onClick={() => onScrollHandler("about-us")}>{t("header.about_us")}</div>
                    <div className={styles.item}>{t("header.products")}</div>
                    {/*<Link to="mioyes" className={styles.subItem} style={{paddingTop: 0}}>Mioyes H</Link>*/}
                    <Link to="miosta" className={styles.subItem}>Miosta Н</Link>
                    <div className={styles.item}
                         onClick={() => onScrollHandler("contacts")}>{t("header.contacts")}</div>
                    <div className={styles.langs}>
                        <div className={styles.lang} onClick={() => changeLanguageHandler("en")}>EN</div>
                        <div className={styles.lang} onClick={() => changeLanguageHandler("ru")}>RU</div>
                    </div>
                </div>
            </>
        </motion.div>, document.body
    )
}

export default Header
