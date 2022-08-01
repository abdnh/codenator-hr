import Head from 'next/head';
import styles from '../styles/MainLayout.module.scss';
import Navbar from "../components/Navbar";
import { SITE_NAME } from "../lib/common";


export default function MainLayout({ subtitle, children }) {
    let title = `${SITE_NAME} HR`;
    if (subtitle) {
        title += ` - ${subtitle}`;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
