import Image from "next/image";
import styles from "./page.module.scss";
import ButtonLink from '@/components/ButtonLink/ButtonLink';

export default function Home() {
  return (
    <main className={styles.main}>
          <ButtonLink href="#" text="Faites le test sans plus tarder" iconUrl="/rocket-icon.svg" iconAlt="Icône de rocket" />
    </main>
  );
}
