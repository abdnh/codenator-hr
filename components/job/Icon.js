import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./Icon.module.scss";
import { uploadHandleToObjectUrl } from "../../lib/upload";

export default function Icon({ handle }) {
    const [imageSrc, setImageSrc] = useState();

    useEffect(() => {
        if (!handle) return;
        (async () => {
            setImageSrc(await uploadHandleToObjectUrl(handle));
        })();
    }, [handle]);

    return (
        <div className={styles.icon}>
            {imageSrc && <Image src={imageSrc} width={128} height={128} alt="job icon" />}
        </div>
    )
}

