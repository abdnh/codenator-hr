import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BracesAsterisk } from 'react-bootstrap-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames';


export default function Navbar() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setSticky(document.scrollingElement.scrollTop > 45);
        });
    })

    return (
        <div id="homenavbar">
            <nav className={classNames("navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0", { 'sticky-top': sticky }, { 'shadow-sm': sticky })} >
                <a href="" className="navbar-brand p-0">
                    <h1 className="m-0"><i className="me-2"></i><BracesAsterisk size={64} /></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span><FontAwesomeIcon icon={faBars} /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href="" className="nav-item nav-link active">Home</a>
                        <a href="#apply" className="nav-item nav-link">Apply</a>
                        <a href="#jobs" className="nav-item nav-link">Jobs</a>
                        <a href="#internships" className="nav-item nav-link">Internships</a>
                        <a href="#blog" className="nav-item nav-link">Blog</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                    </div>
                    <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i><FontAwesomeIcon icon={faSearch} /></i></button>
                    <a href="#" className="btn btn-primary py-2 px-4 ms-3">Codenator</a>
                </div>
            </nav>
        </div >
    )
}
