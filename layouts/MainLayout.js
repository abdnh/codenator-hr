import Head from 'next/head';
import { SITE_NAME } from "../lib/common";


export default function MainLayout({ subtitle, children }) {
    let title = `${SITE_NAME} HR`;
    if (subtitle) {
        title += ` - ${subtitle}`;
    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <main>
                {children}
            </main>
        </>

    )
}
