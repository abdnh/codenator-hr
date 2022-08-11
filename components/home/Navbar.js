import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";


import { BracesAsterisk } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Searchbar from './Searchbar';

export default function Navbar({ dark = true }) {
    const [sticky, setSticky] = useState(false);
    const [searchBarShown, setSearchBarShown] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setSticky(document.scrollingElement.scrollTop > 45);
        });
    })

    function showSearchBar() {
        setSearchBarShown(true);
    }

    function hideSearchBar() {
        setSearchBarShown(false);
    }

    return (<>
        <Searchbar shown={searchBarShown} onHide={hideSearchBar} />
        <div id="homenavbar">
            <BootstrapNavbar expand="lg" className={classNames('navbar', 'px-5', 'py-3', 'py-lg-0', { 'sticky-top': sticky }, { 'shadow-sm': sticky }, { 'navbar-dark': dark })}>
                <BootstrapNavbar.Brand className="p-0" as={"a"}>
                    <h1 className="m-0"><i className="me-2"></i><BracesAsterisk size={64} /></h1>
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span><FontAwesomeIcon icon={faBars} /></span>
                </BootstrapNavbar.Toggle>
                <BootstrapNavbar.Collapse className="collapse" id="navbarCollapse">
                    <Nav className="ms-auto py-0">
                        <Nav.Link href="#" active>Home</Nav.Link>
                        <Nav.Link href="#apply">Apply</Nav.Link>
                        <Nav.Link href="#jobs">Jobs</Nav.Link>
                        <Nav.Link href="#internships">Internships</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <button className="btn text-primary ms-3" data-bs-toggle="modal" onClick={showSearchBar}><i><FontAwesomeIcon icon={faSearch} /></i></button>
                    <Button as="a" className="py-2 px-4 ms-3">Codenator</Button>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>
        </div >
    </>
    )
}
