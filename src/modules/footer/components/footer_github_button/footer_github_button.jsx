import React from 'react'
import { useSidebar } from '../../../sidebar/index'
import styles from './styles.module.scss'

export default function FooterGithubButton() {
    const { statusSidebar } = useSidebar()

    const linkClassName = statusSidebar
        ? `${styles.footer_github_button} ${styles.active}`
        : styles.footer_github_button

    const SVG_GITHUB = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 44.21 48'>
            <path d='m27.11,48c2.51,0,4.53-2.02,4.55-4.52v-4.32.03c.03-.2.03-.39.03-.61,0-2.09-.84-4.01-2.2-5.39,7.18-.79,14.72-3.51,14.72-15.9v-.2c0-3.27-1.26-6.26-3.32-8.48l-.03.08c.43-1.23.67-2.56.67-3.94,0-1.69-.36-3.32-.97-4.68,0,0-2.69-.85-8.84,3.32l.21.05c-2.64-.74-5.4-1.15-8.28-1.15s-5.65.39-8.06,1.08C9.42-.78,6.73.07,6.73.07c-.62,1.41-.97,2.97-.97,4.62,0,1.41.26,2.76.69,3.91-2.07,2.22-3.32,5.21-3.32,8.48v.18c0,12.35,7.52,15.14,14.7,15.95-1.13,1.12-1.87,2.63-2.04,4.3h.03c-1,.57-2.17.9-3.4.9-2.6,0-4.85-1.43-6.04-3.56v-.03c-1.02-1.74-2.79-2.99-4.91-3.3,0,0-3.15-.05-.23,1.97h.03c1.66,1.07,2.94,2.71,3.55,4.7,0,0,1.89,6.27,10.87,4.34v.94c0,2.51,2.05,4.53,4.57,4.53h6.87l-.02.02Z' />
        </svg>
    )
    return (
        <a
            className={linkClassName}
            href='https://github.com/libentur/utility'
            target='_blank'
            rel='noreferrer'>
            {SVG_GITHUB}
        </a>
    )
}
