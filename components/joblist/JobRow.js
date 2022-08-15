import { useRouter } from 'next/router';

import { Row, Col, Button } from "antd";
import { ArrowRight } from "react-bootstrap-icons";
import classNames from "classnames";

import styles from "./JobRow.module.scss";

function IconCol({ children }) {
    return (
        <Col className={classNames("text-uppercase fw-bold", styles.iconCol)}>{children}</Col>
    )
}

function TitleCol({ children }) {
    return (
        <Col className="fs-4">{children}</Col>
    )
}

function ApplyButtonCol({ job }) {
    const router = useRouter();

    function handleClick() {
        router.push(`/jobs/${job.id}`);
    }
    return (
        <Col className=""><Button className={styles.applyButton} onClick={handleClick}><ArrowRight /></Button></Col>
    )
}

export default function JobRow({ job, icon }) {
    return (
        <Row className={styles.jobRow}>
            <IconCol>{icon}</IconCol>
            <TitleCol>{job.title}</TitleCol>
            <ApplyButtonCol job={job} />
        </Row>
    )
}