import { SITE_NAME } from "../lib/common";

import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><Image src="/favicon.svg" width={48} height={48}></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#jobs">Jobs</Nav.Link>
                        <Nav.Link href="#apply">Apply</Nav.Link>
                    </Nav>
                    <Nav className="ms-md-auto">
                        <Nav.Link>{SITE_NAME}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
