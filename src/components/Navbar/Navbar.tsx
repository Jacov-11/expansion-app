import Image from "next/image";
import styles from "./Navbar.module.scss";
import ButtonLink from '@/components/ButtonLink/ButtonLink';

export default function Navbar() {
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
            <div className={styles.menuLeft}>
                <a href="#" className={styles.navLink}>Bienvenue</a>
                <a href="#" className={styles.navLink}>Nos métiers</a>
                <a href="#" className={styles.navLink}>Notre méthodologie</a>
                <a href="#" className={styles.navLink}>L'agence</a>
                <a href="#" className={styles.navLink}>Blog</a>
            </div>
            <div className={styles.menuRight}>
            <a href="#" className={styles.navLink}>Contact</a>
            <ButtonLink href="#" text="Prendre un rendez-vous" />
            </div>
        </div>        
    </header>
  );
}
