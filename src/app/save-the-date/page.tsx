import Image from 'next/image';
import { Metadata } from 'next';
import styles from './styles.module.css';
import { HeaderText } from '@/app/save-the-date/components/HeaderText';
import { Background } from '@/app/save-the-date/components/Background';

const metadataTitle = 'Jake & Louise Wedding | Save the Date';
const metadataDesc = 'Sunday 23rd August 2026 at The Old Mill, Aldermaston';

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDesc,
  openGraph: {
    title: metadataTitle,
    description: metadataDesc,
    images: '/og-image-preview.png',
  },
};

export default function SaveTheDatePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <HeaderText className={styles.headerText} />
        </header>
        <div className={styles.content}>
          <p className={styles.intro}>For the wedding of</p>
          <h1 className={styles.names}>JAKE & LOUISE</h1>
          <p className={styles.info}>Sunday 23rd August 2026</p>
          <a
            className={`${styles.info} ${styles.address}`}
            href="https://www.theoldmillaldermaston.co.uk/"
            target="_blank"
            rel="noopener"
          >
            The Old Mill, Aldermaston
          </a>
          <p className={styles.invitationToFollow}>
            Formal invitation to follow
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <img className={styles.sox} src="/sox.png" alt="SOX THE CAT <3" />
        <img src="/wildflower-border.png" alt="wildflowers" />
      </footer>
      <Image
        priority
        className={styles.background}
        src="/paper-texture.jpg"
        alt=""
        fill
      />
      <Background />
    </main>
  );
}
