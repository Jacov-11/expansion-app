import Image from "next/image";
import styles from "./page.module.scss";
import ButtonLink from '@/components/ButtonLink/ButtonLink';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.infoSection}>
        <h1>Nous vous accompagnons dans votre <span>expansion digitale</span></h1>
        <p>Le programme Digital Booster d’Expansion est <span>l’atout digital des petites, moyennes et grandes entreprises</span> qui souhaitent développer ou confirmer leur présence en ligne.</p>
        <ButtonLink href="#" text="Faites le test sans plus tarder" iconUrl="/rocket-icon.svg" iconAlt="Icône de rocket" />
      </div>
      <div className={styles.imageSection}>

      </div>
    </main>
  );
}
