import Image from "next/image";
import styles from "./Icon.module.scss";

export default function Icon({ src }) {
    return (
        <div className={styles.icon}>
            {src && <Image src={src} width={128} height={128} alt="job icon"/>}
        </div>
    )
}

