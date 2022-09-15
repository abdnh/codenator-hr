import Container from "react-bootstrap/Container";
import { Row, Col } from "antd";


import ProfileImage from "../ant/ProfileImage";
import styles from "./Banner.module.scss";
import classNames from "classnames";

export default function Banner({ id, user, profileData }) {
    let title = '';
    if(profileData.first_name) {
        title += profileData.first_name;
        if(profileData.last_name) {
            title += ` ${profileData.last_name}`;
        }
    }
    return (
        <div className={styles.banner} id={id}>
            <Container className={classNames("text-left fw-bold", styles.container)}>
                <div className={styles.RowWrapper}>
                    <Row className={styles.row}>
                        <Col >
                            <ProfileImage user={user} profileData={profileData} />
                        </Col>
                        <Col className="">{title}</Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
