import React from 'react'
import { useSidebar } from '../../index'
import styles from './styles.module.scss'

export default function SidebarButton() {
    const { statusSidebar, closeSidebar, openSidebar } = useSidebar()

    const btnClassName = statusSidebar
        ? `${styles.sidebar_button} ${styles.active}`
        : styles.sidebar_button

    const SVG_HAMBURGER = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'>
            <path d='m12.8,0h22.4c2.65,0,4.8,2.15,4.8,4.8h0c0,2.65-2.15,4.8-4.8,4.8H12.8c-2.65,0-4.8-2.15-4.8-4.8h0c0-2.65,2.15-4.8,4.8-4.8Z' />
            <path d='m4.8,19.2h38.4c2.65,0,4.8,2.15,4.8,4.8h0c0,2.65-2.15,4.8-4.8,4.8H4.8c-2.65,0-4.8-2.15-4.8-4.8h0c0-2.65,2.15-4.8,4.8-4.8Z' />
            <path d='m12.8,38.4h22.4c2.65,0,4.8,2.15,4.8,4.8h0c0,2.65-2.15,4.8-4.8,4.8H12.8c-2.65,0-4.8-2.15-4.8-4.8h0c0-2.65,2.15-4.8,4.8-4.8Z' />
        </svg>
    )

    const handleClick = () => {
        statusSidebar ? closeSidebar() : openSidebar()
    }

    return (
        <button
            className={btnClassName}
            onClick={handleClick}>
            {SVG_HAMBURGER}
        </button>
    )
}
