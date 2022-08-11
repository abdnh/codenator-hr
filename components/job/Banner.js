import { Row, Container, Col } from "react-bootstrap";
import styles from "./Banner.module.scss";

export default function Banner({ title }) {
    return (
        <div className={styles.banner}>
            <Container className="text-center fw-bold fs-1 position-relative w-100 h-100">
                <Row>
                    <Col className="position-absolute top-50">{title}</Col>
                </Row>
            </Container>
        </div>
    )
}
