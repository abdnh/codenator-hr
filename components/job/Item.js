import { Button } from "react-bootstrap";
import classNames from "classnames";

import styles from "./Item.module.scss";
import Icon from "./Icon";
import Link from "next/link";

export default function Item({ job, iconSrc }) {
    return (
        <div className={styles.item}>
            <Icon src={iconSrc} />
            <h2 className="h2">{job.title}</h2>
            <div className={styles.itemBody} dangerouslySetInnerHTML={{ __html: job.text }}>
            </div>
            <Button className={classNames("mt-5 w-75", styles.applyButton)}><Link href={`/jobs/apply/${job.id}`}>Apply</Link></Button>
        </div>

    )
}
