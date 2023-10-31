import React from 'react'
import { Helmet } from 'react-helmet'
import GRADIENTS from './data/gradients.json'
import Loader from '../../components/Loader'
import GradientsCart from './components/gradients_cart/gradients_cart'
import styles from './styles.module.scss'

export default function GradientsModule({ localization }) {
    const [isLoading, setIsLoading] = React.useState(true)
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [isHiden, setIsHiden] = React.useState(false)

    const handlePrevGradientClick = e => {
        if (currentIndex === 0) {
            changeGradientsCart(GRADIENTS.length - 1)
        } else {
            changeGradientsCart(currentIndex - 1)
        }
        animateButtons(e.target)
    }
    const handleNextGradientClick = e => {
        if (currentIndex === GRADIENTS.length - 1) {
            changeGradientsCart(0)
        } else {
            changeGradientsCart(currentIndex + 1)
        }
        animateButtons(e.target)
    }
    const changeGradientsCart = index => {
        setIsHiden(true)
        setTimeout(() => {
            setCurrentIndex(index)
            setIsHiden(false)
        }, 300)
    }
    const animateButtons = element => {
        element.classList.add(styles.active)
        setTimeout(() => {
            element.classList.remove(styles.active)
        }, 150)
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Helmet>
                <title>{localization.module_title}</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.gradients}>
                    <GradientsCart
                        isHiden={isHiden}
                        colors={GRADIENTS[currentIndex].colors}
                    />
                    <div className={styles.gradients_navigation}>
                        <button onClick={handlePrevGradientClick}>
                            {localization.previous_button}
                        </button>
                        <button onClick={handleNextGradientClick}>
                            {localization.next_button}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
