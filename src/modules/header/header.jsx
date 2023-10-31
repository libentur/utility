import React from 'react'
import { SidebarButton } from '../sidebar/index'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <SidebarButton />
        </header>
    )
}
