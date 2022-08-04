import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from "../styles/CTASection.module.scss";
import homeStyles from "../styles/Home.module.scss"

import { SITE_NAME } from "../lib/common";

function RowImage(props) {
    return <img width="48" height="48" {...props}></img>
}

function BenefitCard({ src }) {
    return <Col className={styles.col}>
        <RowImage className={styles.colChild} src={src}></RowImage>
        <div className={styles.colChild}>
            <h4 className={styles.cardHeader}>Foo</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis at erat. Sodales ut etiam sit amet nisl. Vitae justo eget magna fermentum iaculis eu. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Cras semper auctor neque vitae tempus quam pellentesque nec. Aliquet risus feugiat in ante metus. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Dignissim diam quis enim lobortis scelerisque fermentum. Nunc pulvinar sapien et ligula ullamcorper. Quis viverra nibh cras pulvinar. Orci phasellus egestas tellus rutrum.</p>
        </div>
    </Col>
}

export default function CTASection(props) {

    return <div>
        <p className={homeStyles.title}>
            Join us in <a href="#">{SITE_NAME}</a> to work on the world&apos;s most advanced AI-powered code editor.
        </p>

        <p className={homeStyles.description}>
            We develop an editor tool loved by millions of professional software engineers: {SITE_NAME},
            which consists of a code editor, AI pair programmer, and a comprehensive ecosystem of language tooling.
        </p>

        <Container fluid>
            <Row>
                <BenefitCard src="/icons/gh/community-forum.svg" />
                <BenefitCard src="/icons/gh/celebration.svg" />
            </Row>
            <Row>
                <BenefitCard src="/icons/gh/archive-program.svg" />
                <BenefitCard src="/icons/gh/permissions.svg" />
            </Row>
        </Container>

        {/* <p className={homeStyles.description}>
            Get started by browsing our <a href="#">open positions</a>
        </p> */}
    </div>
}
