import Container from 'react-bootstrap/Container';

import CTASection from "./CTASection";
import OpenPositionsPreview from "./OpenPositionsPreview";
import InternshipsPreview from "./InternshipsPreview";
import HomeFooter from "./HomeFooter";

import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.home}>
            <Container fluid="lg">
                <CTASection />
                <OpenPositionsPreview />
                <InternshipsPreview />
            </Container>
            {/* TODO: maybe faqs and contact sections */}
            <HomeFooter />
        </div>
    )
}
