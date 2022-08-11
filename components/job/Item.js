import { Button } from "react-bootstrap";
import classNames from "classnames";

import styles from "./Item.module.scss";
import Icon from "./Icon";

export default function Item({ title, text, iconSrc }) {
    return (
        <div className={styles.item}>
            <Icon src={iconSrc} />
            <h2 className="h2">{title}</h2>
            <div className={styles.itemBody} dangerouslySetInnerHTML={{ __html: text }}>
            </div>
            <Button className={classNames("mt-5 w-75", styles.applyButton)}>Apply</Button>
        </div>

    )
}
