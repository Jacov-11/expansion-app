"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const brandLogoRef = useGsapAnimation(
        { opacity: 0, x: -300 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.inOut' }
      );


    return (
        <header className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <a href="/" className={styles.brandLogo} ref={brandLogoRef}>
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
                        <a href="#" role="navigation" className={styles.navLink}>Bienvenue</a>
                        <a href="#" role="navigation" className={styles.navLink}>Nos métiers</a>
                        <a href="#" role="navigation" className={styles.navLink}>Notre méthodologie</a>
                        <a href="#" role="navigation" className={styles.navLink}>L'agence</a>
                        <a href="#" role="navigation" className={styles.navLink}>Blog</a>
                    </div>
                    <div className={styles.menuRight}>
                        <a href="#" role="navigation" className={styles.navLink}>Contact</a>
                        <ButtonLink href="#" text="Prendre un rendez-vous" />
                    </div>
                </div>
                <button className={`${styles.collapseMenuButton} ${menuOpen ? styles.show : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>        
        </header>
    );
}
