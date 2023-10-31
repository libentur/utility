import React from 'react'
import useLanguage from '../../../../hooks/use_language'
import styles from './styles.module.scss'

export default function FooterLocalization() {
    const { currentLanguage, setCurrentLanguage } = useLanguage()
    const handleChangeLanguage = e => {
        setCurrentLanguage(e.target.value)
    }
    return (
        <>
            <button
                id={styles.en}
                value='en'
                onClick={handleChangeLanguage}
                className={currentLanguage === 'en' ? styles.active : null}
            />
            <button
                id={styles.ru}
                value='ru'
                onClick={handleChangeLanguage}
                className={currentLanguage === 'ru' ? styles.active : null}
            />
        </>
    )
}
