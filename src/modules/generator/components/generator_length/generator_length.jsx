import React from 'react'
import styles from './styles.module.scss'

export default function GeneratorLength({ setPasswordSettings }) {
    const [length, setLength] = React.useState(18)

    const handleLengthButtonClick = e => {
        let sign = e.target.value
        let change = e.ctrlKey || e.shiftKey ? 10 : 1
        setLength(prev => prev + sign * change)
        animateClick(e.target)
    }

    const animateClick = element => {
        element.classList.add(styles.active)
        setTimeout(() => {
            element.classList.remove(styles.active)
        }, 150)
    }

    React.useEffect(() => {
        setPasswordSettings(prev => ({ ...prev, length: length }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length])

    return (
        <div className={styles.generator_length}>
            <button
                value={1}
                onClick={handleLengthButtonClick}>
                +
            </button>
            <strong>{length}</strong>
            <button
                value={-1}
                onClick={handleLengthButtonClick}>
                -
            </button>
        </div>
    )
}
