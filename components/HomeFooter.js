import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styles from "../styles/HomeFooter.module.scss"


function FooterColumn({ header, items }) {
    return <Col className={styles.col}>
        <p className={styles.colheader}>{header}</p>
        <ul className={styles.itemlist}>
            {
                items.map(item => <li className={styles.colitem}><a href="">{item}</a></li>)
            }
        </ul>
    </Col>
}

export default function HomeFooter() {

    return <div className={styles.sitemap}>
        <p className={styles.title}>
            Got you interested?<br />
            Start by completing your <a href="/profile">profile</a>.
        </p>
        <Container fluid className={styles.container}>
            <Col className={`${styles.banner} ${styles.col}`}>Codenator</Col>
            <FooterColumn header="Support" items={['Docs', 'Contact us']} />
            <FooterColumn header="Company" items={['About', 'Blog']} />
        </Container>
        <Container fluid className={styles.footer}></Container>
    </div>
}
