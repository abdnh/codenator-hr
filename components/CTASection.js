import styles from "../styles/CTASection.module.css"

import { SITE_NAME } from "../lib/common";

export default function CTASection(props) {

    return <div>
        <p className={styles.title}>
            Join us in <a href="#">{SITE_NAME}</a> to work on the world&apos;s most advanced AI-powered code editor.
        </p>

        <p className={styles.description}>
            We develop an editor tool loved by millions of professional software engineers: {SITE_NAME},
            which consists of a code editor, AI pair programmer, and a comprehensive ecosystem of language tooling.
        </p>

        {/* <p className={styles.description}>
            Get started by browsing our <a href="#">open positions</a>
        </p> */}
    </div>
}
