import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem, ipsum dolor sit amet consectetur adipisicing elit. Nuquam facilis cum, voluptatibus</p>
      <p className={styles.text}>lorem, ipsum dolor sit amet consectetur adipisicing elit. Nuquam facilis cum, voluptatibus</p>
      <p className={styles.text}>lorem, ipsum dolor sit amet consectetur adipisicing elit. Nuquam facilis cum, voluptatibus</p>

      <Link href="/apps">
        <a className={styles.btn}>See my apps list</a>
      </Link>
    </div>
  )
}
