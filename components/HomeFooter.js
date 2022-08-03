import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from "../styles/HomeFooter.module.scss"


function FooterColumn({ header, items }) {
    return <Col className={styles.col} xs={6} lg={3}>
        <p className={styles.colheader}>{header}</p>
        <ul className={styles.itemlist}>
            {
                items.map(item => <li className={styles.colitem}><a href="">{item}</a></li>)
            }
        </ul>
    </Col>
}

export default function HomeFooter() {

    return <div className={styles.footer}>
        <p className={styles.title}>
            Got you interested?<br />
            Start by completing your <a href="/profile">profile</a>.
        </p>
        <Row className={styles.linkscontainer}>
            <Col xs={12} lg={6} className={`${styles.banner} ${styles.col} mb-5`}><a href="#">Codenator</a></Col>
            <FooterColumn header="Support" items={['Docs', 'Contact us']} />
            <FooterColumn header="Company" items={['About', 'Blog']} />
        </Row>
        <Container fluid className={styles.copyrightBar}></Container>
    </div>
}
