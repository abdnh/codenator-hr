import { useRouter } from 'next/router';
import Image from "next/image";

import { Row, Col, Button } from "antd";
import { ArrowRight } from "react-bootstrap-icons";
import classNames from "classnames";

import styles from "./JobRow.module.scss";

import { uploadHandleToObjectUrl } from "../../lib/upload";
import { useEffect, useState } from 'react';

function IconCol({ handle }) {
    const [imageSrc, setImageSrc] = useState();

    useEffect(() => {
        if (!handle) return;
        (async () => {
            setImageSrc(await uploadHandleToObjectUrl(handle));
        })();
    }, [handle]);

    return (
        <Col className={classNames("text-uppercase fw-bold", styles.iconCol)}>
            {imageSrc && <Image src={imageSrc} alt="" layout={"fill"} />}
        </Col>
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

export default function JobRow({ job }) {
    return (
        <Row className={styles.jobRow}>
            <IconCol handle={job.image} />
            <TitleCol>{job.title}</TitleCol>
            <ApplyButtonCol job={job} />
        </Row>
    )
}
