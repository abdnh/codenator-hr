import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "../styles/HomeFooter.module.scss"


export default function HomeFooter() {

    return <div className={styles.sitemap}>
        <p className={styles.title}>
            Got you interested?<br />
            Start by completing your <a href="/profile">profile</a>.
        </p>
        <Container fluid className={styles.container}>
            <Row>
                <Col className={styles.banner}>Codenator</Col>
                <Col className={styles.header}>Support</Col>
                <Col className={styles.header}>Company</Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>Docs</Col>
                <Col>About</Col>
            </Row>
            <Row>
                <Col>Contact us</Col>
                <Col>Blog</Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col>Careers</Col>
            </Row>
            <Container fluid className={styles.footer}></Container>
        </Container>
        <style global jsx>{`
        .col {
            color: #202224a7;
        }
        `}</style>
    </div>
}
