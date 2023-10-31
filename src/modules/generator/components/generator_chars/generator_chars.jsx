import React from 'react'
import CHARS from './data/chars.json'
import styles from './styles.module.scss'

export default function GeneratorChars({ localization, setPasswordSettings }) {
    const [chars, setChars] = React.useState({
        uppercase: true,
        lowercase: true,
        digits: true,
        symbols: false
    })

    const handleCharsButtonClick = e => {
        const value = e.target.value
        setChars(prev => ({ ...prev, [value]: !prev[value] }))
    }

    React.useEffect(() => {
        let result = ''
        if (chars.uppercase) result += CHARS.uppercase
        if (chars.lowercase) result += CHARS.lowercase
        if (chars.digits) result += CHARS.digits
        if (chars.symbols) result += CHARS.symbols
        setPasswordSettings(prev => ({ ...prev, chars: result }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chars])

    return (
        <div className={styles.generator_chars}>
            <button
                value='uppercase'
                className={chars.uppercase ? styles.active : null}
                onClick={handleCharsButtonClick}>
                {localization.uppercase}
            </button>
            <button
                value='lowercase'
                className={chars.lowercase ? styles.active : null}
                onClick={handleCharsButtonClick}>
                {localization.lowercase}
            </button>
            <button
                value='digits'
                className={chars.digits ? styles.active : null}
                onClick={handleCharsButtonClick}>
                {localization.digits}
            </button>
            <button
                value='symbols'
                className={chars.symbols ? styles.active : null}
                onClick={handleCharsButtonClick}>
                {localization.symbols}
            </button>
        </div>
    )
}
