import { SITE_NAME } from "../lib/common";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from "./NavLink";
import Button from "./Button";
import styles from "../styles/Navbar.module.scss";

export default function NavBar() {
    return (
        <Navbar className={styles.navbar} bg="light" expand="lg" fixed="top">
            <Container className={styles.container}>
                <Navbar.Brand className={styles.brand} href="#home">
                    <img src="/favicon.svg" width={48} height={48} alt="site logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={styles.collapse}>
                    <Nav className={styles.nav}>
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#jobs">Jobs</NavLink>
                        <NavLink href="#profile">Profile</NavLink>
                        <NavLink href="#about">About</NavLink>
                    </Nav>
                    <Nav className={styles.nav}>
                        <NavLink><Button>{SITE_NAME}</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
