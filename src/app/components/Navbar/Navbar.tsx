import Image from "next/image";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header>
        <a href="/">
        <Image
          className={styles.logo}
          src="/brand-logo.svg"
          alt="Logo de la compagnie"
          width={180}
          height={37}
          priority
        />
        </a>        
        <a href="/contact" className={styles.test}>Contactez-nous</a>
        <a href="/contact" className={styles.test2}>Hey!</a>
    </header>
  );
}
