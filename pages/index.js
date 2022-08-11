import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen, faBars, faCheck, faArrowsToEye, faBugSlash, faDatabase, faCoins, faHeadset, faAnglesRight, faUserTie, faSearch, faUsers, faBuilding, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUser, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { ArrowRight, ArrowUp, BracesAsterisk, Briefcase, EnvelopeOpen, GeoAlt, Search, Telephone } from 'react-bootstrap-icons';

import BannerImage from "../assets/img/carousel-1.gif";
import AboutImage from "../assets/img/about.gif";
import CelebrationImage from "../assets/icons//celebration.svg";
import CommunityForumImage from "../assets/icons//community-forum.svg";
import ArchiveImage from "../assets/icons//archive-program.svg";
import AdminMentoringImage from "../assets/icons/admin-mentoring.svg";
import GrowImage from "../assets/icons//grow.svg";
import PermissionsImage from "../assets/icons//permissions.svg";
import ScaleImage from "../assets/icons//scale.svg";
import SponsorsImage from "../assets/icons//sponsors.svg";



function Spinner() {
  const [shown, setShown] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShown(false);
    }, 1);
  }, [shown]);

  return <div id="spinner" className={classNames({ show: shown }, 'bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center')}>
    <div className="spinner"></div>
  </div>
}

function Topbar() {
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

function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
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
}

function CTA() {
  return <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src={BannerImage} layout="responsive" alt="Image" />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ 'max-width': '900px' }}>
            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Codenator HR</h5>
            <h1 className="display-5 text-white mb-md-4 animated zoomIn">Embark on the endgame of editor wars with Codenator</h1>
            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Join Us</a>
            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Searchbar() {
  return <div className="modal fade" id="searchModal" tabIndex="-1">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content" style={{ background: 'rgba(9, 30, 62, 0)' }}>
        <div className="modal-header border-0">
          <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ 'max-width': '600px' }}>
            <input type="text" className="form-control border-primary p-3" placeholder="Type search keyword" />
            <button className="btn btn-primary px-4"><Search /></button>
          </div>
        </div>
      </div>
    </div>
  </div>

}

function Stats() {
  return <div className="container-fluid facts py-5 pt-lg-0">
    <div className="container py-5 pt-lg-0">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <i className="text-primary"><FontAwesomeIcon icon={faUsers} /></i>
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Happy Users</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">4500000</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
            <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <Briefcase />
            </div>
            <div className="ps-4">
              <h5 className="text-primary mb-0">Employees</h5>
              <h1 className="mb-0" data-toggle="counter-up">2500</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <i><FontAwesomeIcon icon={faBuilding} /></i>
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Headquarters</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">16</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function About() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
            <h1 className="mb-0">We make the world&apos;s most advanced AI-powered code editor</h1>
          </div>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3"><i className="text-primary me-3"><FontAwesomeIcon icon={faCheck} /></i>Free</h5>
              <h5 className="mb-3"><i className="text-primary me-3"><FontAwesomeIcon icon={faCheck} /></i>Customizable</h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3"><i className="text-primary me-3"><FontAwesomeIcon icon={faCheck} /></i>Cross-platform</h5>
              <h5 className="mb-3"><i className="text-primary me-3"><FontAwesomeIcon icon={faCheck} /></i>Continuously improved</h5>
            </div>
          </div>
          <a href="#" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Download Codenator</a>
        </div>
        <div className="col-lg-5" style={{ 'min-height': '500px' }}>
          <div className="position-relative h-100">
            {/* TODO: better image */}
            <Image className="rounded wow zoomIn" data-wow-delay="0.9s" src={AboutImage} layout="responsive" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Benefits() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 className="fw-bold text-primary text-uppercase">Why work with us</h5>
      </div>
      <div className="d-sm-flex flex-wrap gutter-md-spacious mt-md-6 mb-5">
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <CommunityForumImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              A diverse and inclusive workplace
            </h3>
            <div className="color-fg-muted">
              <p>At Codenator, we think that a diverse company is a strong company, and we work hard to foster a supportive and welcoming workplace. <a href="/about/diversity">Learn more about our commitment to diversity</a>.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <CelebrationImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Work happier
            </h3>
            <div className="color-fg-muted">
              <p>Build amazing things with a balance of autonomy and collaborative teamwork. Set your own work schedule and make use of a flexible PTO plan when you need to recharge.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <ArchiveImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Lead from any location
            </h3>
            <div className="color-fg-muted">
              <p>Codenator is a remote-first company with offices located throughout the US, Europe, and Asia. Whether you live near an office or not, Codenator believes you can do your best work wherever you are. If you work remotely, you will receive a stipend to outfit your home office and receive reoccurring reimbursement refreshes.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <PermissionsImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Put your health and family first
            </h3>
            <div className="color-fg-muted">
              <p>Employees in the United States enjoy 100% coverage of health insurance premiums across our medical, dental, and vision plan offerings, including coverage for dependents. We also offer five months of paid family leave to all new parents with the option to use it all at once or throughout the baby’s first year.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <AdminMentoringImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Find your zen
            </h3>
            <div className="color-fg-muted">
              <p>Codenator provides a monthly wellness stipend designed to cover anything from gym memberships, massage, meditation apps, or any other wellness related expenses.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <ScaleImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Invest in your future
            </h3>
            <div className="color-fg-muted">
              <p>At Codenator, you’ll have a stake in the future success of our platform with equity grants. For full-time employees in the United States, we offer competitive 401k planning with a 50% company match up to the IRS 402(g) annual limit.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <GrowImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Keep growing
            </h3>
            <div className="color-fg-muted">
              <p>Learn how you learn best. From books to conferences, you’ll get a yearly budget for your individual learning and development goals.</p>
            </div>
          </div>
        </div>
        <div className="d-sm-inline-flex col-md-6 mb-5 ">
          <div className="me-3 mb-2 mb-md-0">
            <SponsorsImage width="48" />
          </div>
          <div>
            <h3 className="h6-mktg mb-2">
              Give back to your community
            </h3>
            <div className="color-fg-muted">
              <p>We believe in sharing our time, resources, and products to <a href="#">contribute to positive social impact</a>. Codenator matches charitable donations up to $15,000 per calendar year. And for each hour (up to 40 hours) of volunteering per year, you will receive $20 to donate to an organization of your choice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

function Jobs() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 className="fw-bold text-primary text-uppercase">Open Positions</h5>
        <h1 className="mb-0">Catch open opportunities to join our company</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="text-white"><FontAwesomeIcon icon={faArrowsToEye} /></i>
            </div>
            <h4 className="mb-3">Quality Control Engineer</h4>
            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a className="btn btn-lg btn-primary rounded" href="">
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="text-white"><FontAwesomeIcon icon={faBugSlash} /></i>
            </div>
            <h4 className="mb-3">Test engineer</h4>
            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a className="btn btn-lg btn-primary rounded" href="">
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="text-white"><FontAwesomeIcon icon={faDatabase} /></i>
            </div>
            <h4 className="mb-3">Database engineer</h4>
            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a className="btn btn-lg btn-primary rounded" href="">
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="text-white"><FontAwesomeIcon icon={faCoins} /></i>
            </div>
            <h4 className="mb-3">Senior Financial Analyst</h4>
            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a className="btn btn-lg btn-primary rounded" href="">
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="text-white"><FontAwesomeIcon icon={faHeadset} /></i>
            </div>
            <h4 className="mb-3">Technical Support Engineer</h4>
            <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a className="btn btn-lg btn-primary rounded" href="">
              <ArrowRight />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <a href="#">

            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">And more</h3>
              <div className="service-icon">
                <i className="text-white"><FontAwesomeIcon icon={faAnglesRight} /></i>
              </div>

            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

}

function FAQs() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">Frequently Asked Questions</h5>
            <h1 className="mb-0">Get informed about all important details before applying</h1>
          </div>
          <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Question #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Question body
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Question #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Question body
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Question #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Question body
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-secondary text-uppercase">Ask Your Question</h5>
            <h1 className="mb-0">Have A Question? Feel Free to Contact Us</h1>
          </div>
          <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
            <form>
              <div className="row g-3">
                <div className="col-xl-12">
                  <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ 'height': '55px' }} />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ 'height': '55px' }} />
                </div>
                <div className="col-12">
                  <textarea className="form-control bg-light border-0" rows="3" placeholder="Question"></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit">Send Question</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Testimonials() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
        <h1 className="mb-0">How Our Employees Feel About Our Company, Honestly</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <Image className="img-fluid rounded" src="/img/testimonial-1.jpg" width={60} height={60} alt="" />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Employee Name</h4>
              <small className="text-uppercase">Position</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <Image className="img-fluid rounded" src="/img/testimonial-2.jpg" width={60} height={60} alt="" />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Employee Name</h4>
              <small className="text-uppercase">Position</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <Image className="img-fluid rounded" src="/img/testimonial-3.jpg" width={60} height={60} alt="" />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Employee Name</h4>
              <small className="text-uppercase">Position</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <Image className="img-fluid rounded" src="/img/testimonial-4.jpg" width={60} height={60} alt="" />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Employee Name</h4>
              <small className="text-uppercase">Position</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Employees() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 className="fw-bold text-primary text-uppercase">Our Employees</h5>
        <h1 className="mb-0">Get to know some of the people you will be working with</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <Image className="img-fluid rounded" src="/img/team-1.jpg" alt="" layout="responsive" width={100} height={100} />
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <Image className="img-fluid rounded" src="/img/team-2.jpg" alt="" layout="responsive" width={100} height={100} />
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <Image className="img-fluid rounded" src="/img/team-3.jpg" alt="" layout="responsive" width={100} height={100} />
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href=""><i className="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Blog() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
        <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <Image className="img-fluid" src="/img/blog-1.webp" alt="" layout="responsive" width={280} height={186} />
              <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Job Interview</a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3"><i className="text-primary me-2"><FontAwesomeIcon icon={faUser} /></i>John Doe</small>
                <small><i className="text-primary me-2"><FontAwesomeIcon icon={faCalendarAlt} /></i>01 Jan, 2045</small>
              </div>
              <h4 className="mb-3">Preparing for your interview in Codenator</h4>
              <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
              <a className="text-uppercase" href="">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <Image className="img-fluid" src="/img/blog-2.webp" alt="" layout="responsive" width={280} height={186} />
              <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Job Interview</a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3"><i className="text-primary me-2"><FontAwesomeIcon icon={faUser} /></i>John Doe</small>
                <small><i className="text-primary me-2"><FontAwesomeIcon icon={faCalendarAlt} /></i>01 Jan, 2045</small>
              </div>
              <h4 className="mb-3">Our candidate assessment criteria</h4>
              <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
              <a className="text-uppercase" href="">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <Image className="img-fluid" src="/img/blog-3.jpg" alt="" layout="responsive" width={280} height={186} />
              <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Marketing</a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3"><i className="text-primary me-2"><FontAwesomeIcon icon={faUser} /></i>John Doe</small>
                <small><i className="text-primary me-2"><FontAwesomeIcon icon={faCalendarAlt} /></i>01 Jan, 2045</small>
              </div>
              <h4 className="mb-3">Codenator rated as one of the best employers</h4>
              <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
              <a className="text-uppercase" href="">Read More <ArrowRight /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Clients() {
  return <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 mb-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 className="fw-bold text-primary text-uppercase">Our Clients</h5>
        <h1 className="mb-0">Some Of The Companies That Use Our Products</h1>
      </div>
      <div className="bg-white">
        <div className="owl-carousel vendor-carousel">
          <Image src="/img/vendor-1.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-2.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-3.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-4.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-5.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-6.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-7.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-8.jpg" alt="" layout="responsive" width={150} height={50} />
          <Image src="/img/vendor-9.jpg" alt="" layout="responsive" width={150} height={50} />
        </div>
      </div>
    </div>
  </div>
}

function Footer() {
  return <><div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-white"><i className="me-2"><FontAwesomeIcon icon={faUserTie} /></i>Codenator</h1>
            </a>
            <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                <button className="btn btn-dark">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-12 pt-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Get In Touch</h3>
              </div>
              <div className="d-flex mb-2">
                <GeoAlt className="text-primary me-2" />
                <p className="mb-0">123 Street, Istanbul, Turkey</p>
              </div>
              <div className="d-flex mb-2">
                <EnvelopeOpen className="text-primary me-2" />
                <p className="mb-0">info@codenator.com</p>
              </div>
              <div className="d-flex mb-2">
                <Telephone className="text-primary me-2" />
                <p className="mb-0">+012 345 67890</p>
              </div>
              <div className="d-flex mt-4">
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                <a className="btn btn-primary btn-square" href="#"><i className="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#"><ArrowRight className="text-primary me-2" />Home</a>
                <a className="text-light mb-2" href="#"><ArrowRight className="text-primary me-2" />About Us</a>
                <a className="text-light mb-2" href="#"><ArrowRight className="text-primary me-2" />Jobs</a>
                <a className="text-light mb-2" href="#"><ArrowRight className="text-primary me-2" />Meet The Team</a>
                <a className="text-light mb-2" href="#"><ArrowRight className="text-primary me-2" />Latest Blog</a>
                <a className="text-light mb-2" href="#"><ArrowRight className="text-primary me-2" />Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div className="container-fluid text-white" style={{ 'background': '#061429' }}>
      <div className="container text-center">
        <div className="row justify-content-end">
          <div className="col-lg-8 col-md-6">
            <div className="d-flex align-items-center justify-content-center" style={{ 'height': '75px' }}>
              <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Codenator</a>. All Rights Reserved.{` `}

                {/* <!--This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. -->*/}
                Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a>.</p>
              <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank" rel="noreferrer">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><ArrowUp /></a>
  </>
}


export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        <title>Codenator HR - Embark on the endgame of editor wars with Codenator</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* TODO: move fonts to _document.js */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />

      </Head>

      <div id="homepage">
        <Spinner />
        <Topbar />
        <div className="container-fluid position-relative p-0">
          <Navbar />
          <CTA />
        </div>
        <Searchbar />
        <Stats />
        <About />
        <Benefits />
        <Jobs />
        <FAQs />
        <Testimonials />
        <Employees />
        <Blog />
        <Clients />
        <Footer />

        <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer></script>
        {/* TODO: remove this once we convert the code full to react-bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" defer></script>
        {/* TODO: use <Script> components once we solve jQuery issues */}
        <script src="lib/wow/wow.min.js" defer></script>
        <script src="lib/easing/easing.min.js" defer></script>
        <script src="lib/waypoints/waypoints.min.js" defer></script>
        <script src="lib/counterup/counterup.min.js" defer></script>
        <script src="lib/owlcarousel/owl.carousel.min.js" defer></script>

        <Script src="js/main.js" defer></Script>

      </div>
    </>
  )
}
