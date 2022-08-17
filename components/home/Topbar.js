import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";



export default function Topbar() {
    return <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{ 'height': '45px' }}>
                    <small className="me-3 text-light"><i className="me-2"><FontAwesomeIcon icon={faLocationDot} /></i>123 Street, Istanbul, Turkey</small>
                    <small className="me-3 text-light"><i className="me-2"><FontAwesomeIcon icon={faPhone} /></i>+012 345 6789</small>
                    <small className="text-light"><i className="me-2"><FontAwesomeIcon icon={faEnvelopeOpen} /></i>info@codenator.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{ 'height': '45px' }}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i><FontAwesomeIcon icon={faYoutube} /></i></a>
                </div>
            </div>
        </div>
    </div>
}
