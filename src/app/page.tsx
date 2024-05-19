"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import { useGsapAnimation } from '@/hooks/useGsapAnimation';

export default function Home() {
  const infoSectionRef = useGsapAnimation(
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 2, ease: 'power2.inOut' }
  );

  const imageSectionRef = useGsapAnimation(
    { opacity: 0 },
    { opacity: 1, duration: 3, ease: 'power2.inOut' }
  );

  return (
    <main className={styles.main}>
      <div className={styles.infoSection} ref={infoSectionRef}>
        <h1>Nous vous accompagnons dans votre <span>expansion digitale</span></h1>
        <p>Le programme Digital Booster d’Expansion est <span>l’atout digital des petites, moyennes et grandes entreprises</span> qui souhaitent développer ou confirmer leur présence en ligne.</p>
        <ButtonLink href="#" text="Faites le test sans plus tarder" iconUrl="/rocket-icon.svg" iconAlt="Icône de rocket" />
      </div>
      <div className={styles.imageSection} ref={imageSectionRef}>
      </div>
    </main>
  );
}
