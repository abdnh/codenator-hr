import { SITE_NAME } from "../lib/common";

import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Navbar bg="light" expand="md" fixed="top">
            <Container>
                <Navbar.Brand href="#home"><Image src="/favicon.svg" width={48} height={48} alt="site logo"></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#jobs">Jobs</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Nav className="ms-md-auto">
                        <Nav.Link id="site-button">{SITE_NAME}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <style global jsx>
                {`
                    #site-button {
                        background-color: #398AFF;
                        border: outset 2px #fff;
                        border-radius: 0.5rem;
                        outline: none;
                        width: 8rem;
                        text-align: center;
                        box-shadow: 1px 1px 3px black;
                        color: white;
                    }
                    #site-button:hover {
                        color: black;
                        box-shadow: 1px 1px 3px white;
                    }
                `}
            </style>
        </Navbar>
    );
}
