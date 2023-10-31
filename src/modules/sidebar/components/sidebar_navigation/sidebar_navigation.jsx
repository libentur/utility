import React from 'react'
import { Link } from 'react-router-dom'
import { useSidebar } from '../../index'
import ICON_GENERATOR from './images/generator.png'
import ICON_GRADIENTS from './images/gradients.png'
import styles from './styles.module.scss'

export default function SidebarNavigation({ localization }) {
    const { closeSidebar } = useSidebar()
    return (
        <nav className={styles.sidebar_navigation}>
            <Link
                to='/generator'
                onClick={closeSidebar}>
                <div className={styles.icon}>
                    <img
                        src={ICON_GENERATOR}
                        alt='generator'
                    />
                </div>
                <div className={styles.info}>
                    <h6>{localization.generator.title}</h6>
                    <p>{localization.generator.description}</p>
                </div>
            </Link>
            <Link
                to='/gradients'
                onClick={closeSidebar}>
                <div className={styles.icon}>
                    <img
                        src={ICON_GRADIENTS}
                        alt='gradients'
                    />
                </div>
                <div className={styles.info}>
                    <h6>{localization.gradients.title}</h6>
                    <p>{localization.gradients.description}</p>
                </div>
            </Link>
        </nav>
    )
}
