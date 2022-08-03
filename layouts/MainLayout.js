import Container from 'react-bootstrap/Container';
import Head from 'next/head';
import styles from '../styles/MainLayout.module.scss';
import Navbar from "../components/Navbar";
import { SITE_NAME } from "../lib/common";


export default function MainLayout({ subtitle, children, navbar }) {
    let title = `${SITE_NAME} HR`;
    if (subtitle) {
        title += ` - ${subtitle}`;
    }
    if (navbar === undefined) {
        navbar = true;
    }

    return (
        <Container className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            {navbar && <Navbar />}
            <main className={styles.main}>
                {children}
            </main>
            <style global jsx>{
            `
            `
            }</style>
        </Container>
    )
}
