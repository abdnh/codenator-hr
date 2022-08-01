import Nav from 'react-bootstrap/Nav';
import styles from "../styles/NavLink.module.scss";

export default function NavLink({ href, children }) {
    return <Nav.Link className={styles.navlink} href={href}>{children}</Nav.Link>
}
