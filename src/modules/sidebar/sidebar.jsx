import React from 'react'
import { useSidebar } from './index'
import SidebarNavigation from './components/sidebar_navigation/sidebar_navigation'
import styles from './styles.module.scss'

export default function SidebarModule({ localization }) {
    const { statusSidebar, closeSidebar } = useSidebar()

    const overlayClassName = statusSidebar
        ? styles.overlay
        : `${styles.overlay} ${styles.closed}`
    const sidebarClassName = statusSidebar
        ? styles.sidebar
        : `${styles.sidebar} ${styles.closed}`

    return (
        <>
            <div
                className={overlayClassName}
                onClick={closeSidebar}
            />
            <div className={sidebarClassName}>
                <SidebarNavigation localization={localization.navigation} />
            </div>
        </>
    )
}
