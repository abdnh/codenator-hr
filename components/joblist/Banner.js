import { Row, Container, Col } from "react-bootstrap";
import styles from "./Banner.module.scss";

export default function Banner({ title, id }) {
    return (
        <div className={styles.banner} id={id}>
            <Container className="text-center fw-bold position-relative w-100 h-100">
                <Row>
                    <Col className="position-absolute top-50">{title}</Col>
                </Row>
            </Container>
        </div>
    )
}
