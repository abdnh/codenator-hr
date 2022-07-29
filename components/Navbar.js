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
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#jobs">Jobs</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Nav className="ms-md-auto">
                        <Nav.Link id="site-button" style={{ border: "outset 2px #fff" }}>{SITE_NAME}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style global jsx>
                {`
                    #site-button {
                        background-color: #5094f7;
                    }
                    #site-button:hover {
                        background-color: #319eff;
                    }
                `}
            </style>
        </Navbar>
    );
}
