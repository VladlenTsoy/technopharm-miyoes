import React, {useEffect} from "react"
import {useInView} from "react-intersection-observer"
import {useAnimation, motion} from "framer-motion"

interface TitleColorAnimationProps {
    className?: any
}

const TitleColorAnimation: React.FC<TitleColorAnimationProps> = ({className, children}) => {
    const [ref, inView] = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.h1
            className={className}
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{duration: 1}}
            variants={{
                visible: {color: "var(--primary-color)", opacity: 1},
                hidden: {color: "var(--text-color)", opacity: 0}
            }}
        >
            {children}
        </motion.h1>
    )
}

export default TitleColorAnimation