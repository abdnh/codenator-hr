import styles from "../styles/Button.module.scss";

export default function Button({ children, buttonStyle }) {
    return <button className={`${styles.button} ${styles[buttonStyle]}`}>{children}</button>
}
