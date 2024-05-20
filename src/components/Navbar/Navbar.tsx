"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <a href="/" className={styles.brandLogo}>
                    <Image
                    src="/brand-logo.svg"
                    alt="Logo de la compagnie"
                    width={185}
                    height={82}
                    priority
                    />
                </a>
                <div className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
                    <div className={styles.menuLeft}>
                        <a href="/" role="navigation" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Bienvenue</a>
                        <a href="/metiers" role="navigation" className={`${styles.navLink} ${pathname.startsWith('/metiers') ? styles.active : ''}`}>Nos métiers</a>
                        <a href="/methodologie" role="navigation" className={`${styles.navLink} ${pathname.startsWith('/methodologie') ? styles.active : ''}`}>Notre méthodologie</a>
                        <a href="/agence" role="navigation" className={`${styles.navLink} ${pathname.startsWith('/agence') ? styles.active : ''}`}>L'agence</a>
                        <a href="/blog" role="navigation" className={`${styles.navLink} ${pathname.startsWith('/blog') ? styles.active : ''}`}>Blog</a>
                    </div>
                    <div className={styles.menuRight}>
                        <a href="/contact" role="navigation" className={`${styles.navLink} ${pathname.startsWith('/contact') ? styles.active : ''}`}>Contact</a>
                        <ButtonLink href="#" text="Prendre un rendez-vous" />
                    </div>
                </div>                
                <button role="navigation" className={`${styles.collapseMenuButton} ${menuOpen ? styles.show : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>        
        </header>
    );
}
