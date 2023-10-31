import React from 'react'
import styles from './styles.module.scss'

function GeneratorNavigation({
    passwordResult,
    setPasswordResult,
    passwordSettings
}) {
    const validatePasswordSettings = () => {
        if (
            passwordSettings.chars.length === 0 ||
            passwordSettings.length <= 0
        ) {
            setPasswordResult('')
            return false
        } else {
            return true
        }
    }
    const generatePassword = () => {
        let result = ''
        for (let i = 0; i < passwordSettings.length; i++) {
            const random = Math.floor(
                Math.random() * passwordSettings.chars.length
            )
            result += passwordSettings.chars[random]
        }
        setPasswordResult(result)
    }

    const handleRefreshPassword = e => {
        if (validatePasswordSettings()) generatePassword()
        animateClick(e.target)
    }
    const handleCopyPassword = e => {
        navigator.clipboard.writeText(passwordResult)
        animateClick(e.target)
    }
    const animateClick = element => {
        element.classList.add(styles.active)
        setTimeout(() => {
            element.classList.remove(styles.active)
        }, 150)
    }

    React.useEffect(() => {
        if (validatePasswordSettings()) generatePassword()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passwordSettings])

    return (
        <div className={styles.generator_navigation}>
            <strong>{passwordResult}</strong>
            <div>
                <button onClick={handleRefreshPassword} />
                <button onClick={handleCopyPassword} />
            </div>
        </div>
    )
}

export default GeneratorNavigation
