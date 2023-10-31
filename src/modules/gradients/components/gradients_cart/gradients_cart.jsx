import React from 'react'
import styles from './styles.module.scss'

export default function GradientsCart({ isHiden, colors }) {
    const gradient = `linear-gradient(to right, ${colors.join(', ')})`

    const handleButtonClick = e => {
        navigator.clipboard.writeText(e.target.value)
        animateClick(e.target)
    }
    const handleMissedClick = e => {
        e.stopPropagation()
        e.currentTarget.parentNode.click()
    }

    const animateClick = element => {
        element.classList.add(styles.active)
        setTimeout(() => {
            element.classList.remove(styles.active)
        }, 600)
    }

    return (
        <div
            className={
                isHiden
                    ? `${styles.gradients_cart} ${styles.hiden}`
                    : styles.gradients_cart
            }>
            <button
                className={styles.gradient}
                style={{ background: gradient }}
                value={gradient}
                onClick={handleButtonClick}
            />
            <div className={styles.colors}>
                {colors.map((color, index) => {
                    return (
                        <button
                            key={index}
                            value={color}
                            onClick={handleButtonClick}>
                            <span
                                style={{
                                    backgroundColor: color
                                }}
                                onClick={handleMissedClick}></span>
                            {color.slice(1).toUpperCase()}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
