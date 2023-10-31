import React from 'react'
import styles from './styles.module.scss'
import FooterLocalization from './components/footer_localization/footer_localization'
import FooterGithubButton from './components/footer_github_button/footer_github_button'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterLocalization />
            <FooterGithubButton />
        </footer>
    )
}
