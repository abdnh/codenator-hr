import classNames from "classnames";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

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
      <h1 className="m-0"><i className="me-2"></i>      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-braces-asterisk" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z" />
      </svg></h1>


    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <a href="" className="nav-item nav-link active">Home</a>
        <a href="#about" className="nav-item nav-link">About</a>
        <a href="#jobs" className="nav-item nav-link">Jobs</a>
        <a href="#internships" className="nav-item nav-link">Internships</a>
        <a href="#blog" className="nav-item nav-link">Blog</a>
        <a href="#contact" className="nav-item nav-link">Contact</a>
      </div>
      <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
      <a href="#" className="btn btn-primary py-2 px-4 ms-3">Codenator</a>
    </div>
  </nav>
}

function CTA() {
  return <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="w-100" src="img/carousel-1.gif" alt="Image" />
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
  return <div className="modal fade" id="searchModal" tabindex="-1">
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content" style={{ background: 'rgba(9, 30, 62, 0)' }}>
        <div className="modal-header border-0">
          <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ 'max-width': '600px' }}>
            <input type="text" className="form-control border-primary p-3" placeholder="Type search keyword" />
            <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>

}

function Stats() {
  return <div class="container-fluid facts py-5 pt-lg-0">
    <div class="container py-5 pt-lg-0">
      <div class="row gx-0">
        <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
            <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <i class="fa fa-users text-primary"></i>
            </div>
            <div class="ps-4">
              <h5 class="text-white mb-0">Happy Users</h5>
              <h1 class="text-white mb-0" data-toggle="counter-up">4500000</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div class="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
            <div class="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <i class="bi bi-briefcase"></i>
            </div>
            <div class="ps-4">
              <h5 class="text-primary mb-0">Employees</h5>
              <h1 class="mb-0" data-toggle="counter-up">2500</h1>
            </div>
          </div>
        </div>
        <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div class="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
            <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <i class="far fa-building"></i>
            </div>
            <div class="ps-4">
              <h5 class="text-white mb-0">Headquarters</h5>
              <h1 class="text-white mb-0" data-toggle="counter-up">16</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function About() {
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-7">
          <div class="section-title position-relative pb-3 mb-5">
            <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
            <h1 class="mb-0">We make the world&apos;s most advanced AI-powered code editor</h1>
          </div>
          <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
          <div class="row g-0 mb-3">
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Free</h5>
              <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Customizable</h5>
            </div>
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Cross-platform</h5>
              <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Continuously improved</h5>
            </div>
          </div>
          <a href="#" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Download Codenator</a>
        </div>
        <div class="col-lg-5" style={{ 'min-height': '500px' }}>
          <div class="position-relative h-100">
            {/* TODO: better image */}
            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="/img/about.gif" /*style={{'object-fit': 'cover'}}*/ />
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Benefits() {
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 class="fw-bold text-primary text-uppercase">Why work with us</h5>
      </div>
      <div class="d-sm-flex flex-wrap gutter-md-spacious mt-md-6 mb-5">
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/community-forum.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              A diverse and inclusive workplace
            </h3>
            <div class="color-fg-muted">
              <p>At Codenator, we think that a diverse company is a strong company, and we work hard to foster a supportive and welcoming workplace. <a href="/about/diversity">Learn more about our commitment to diversity</a>.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/celebration.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Work happier
            </h3>
            <div class="color-fg-muted">
              <p>Build amazing things with a balance of autonomy and collaborative teamwork. Set your own work schedule and make use of a flexible PTO plan when you need to recharge.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/archive-program.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Lead from any location
            </h3>
            <div class="color-fg-muted">
              <p>Codenator is a remote-first company with offices located throughout the US, Europe, and Asia. Whether you live near an office or not, Codenator believes you can do your best work wherever you are. If you work remotely, you will receive a stipend to outfit your home office and receive reoccurring reimbursement refreshes.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/permissions.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Put your health and family first
            </h3>
            <div class="color-fg-muted">
              <p>Employees in the United States enjoy 100% coverage of health insurance premiums across our medical, dental, and vision plan offerings, including coverage for dependents. We also offer five months of paid family leave to all new parents with the option to use it all at once or throughout the baby’s first year.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/admin-mentoring.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Find your zen
            </h3>
            <div class="color-fg-muted">
              <p>Codenator provides a monthly wellness stipend designed to cover anything from gym memberships, massage, meditation apps, or any other wellness related expenses.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/scale.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Invest in your future
            </h3>
            <div class="color-fg-muted">
              <p>At Codenator, you’ll have a stake in the future success of our platform with equity grants. For full-time employees in the United States, we offer competitive 401k planning with a 50% company match up to the IRS 402(g) annual limit.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/grow.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Keep growing
            </h3>
            <div class="color-fg-muted">
              <p>Learn how you learn best. From books to conferences, you’ll get a yearly budget for your individual learning and development goals.</p>
            </div>
          </div>
        </div>
        <div class="d-sm-inline-flex col-md-6 mb-5 ">
          <div class="me-3 mb-2 mb-md-0">
            <img alt="" style={{ 'width': '48px' }} src="/icons/gh/sponsors.svg" />
          </div>
          <div>
            <h3 class="h6-mktg mb-2">
              Give back to your community
            </h3>
            <div class="color-fg-muted">
              <p>We believe in sharing our time, resources, and products to <a href="#">contribute to positive social impact</a>. Codenator matches charitable donations up to $15,000 per calendar year. And for each hour (up to 40 hours) of volunteering per year, you will receive $20 to donate to an organization of your choice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

function Jobs() {
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 class="fw-bold text-primary text-uppercase">Open Positions</h5>
        <h1 class="mb-0">Catch open opportunities to join our company</h1>
      </div>
      <div class="row g-5">
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
              <i class="fa fa-shield-alt text-white"></i>
            </div>
            <h4 class="mb-3">Quality Control Engineer</h4>
            <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a class="btn btn-lg btn-primary rounded" href="">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
              <i class="fa fa-chart-pie text-white"></i>
            </div>
            <h4 class="mb-3">Test engineer</h4>
            <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a class="btn btn-lg btn-primary rounded" href="">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
              <i class="fa fa-code text-white"></i>
            </div>
            <h4 class="mb-3">Database engineer</h4>
            <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a class="btn btn-lg btn-primary rounded" href="">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
              <i class="fab fa-android text-white"></i>
            </div>
            <h4 class="mb-3">Senior Financial Analyst</h4>
            <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a class="btn btn-lg btn-primary rounded" href="">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div class="service-icon">
              <i class="fa fa-search text-white"></i>
            </div>
            <h4 class="mb-3">Technical Support Engineer</h4>
            <p class="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
            <a class="btn btn-lg btn-primary rounded" href="">
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <a href="#">
            <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 class="text-white mb-3">And more</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

}

function FAQs() {
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-7">
          <div class="section-title position-relative pb-3 mb-5">
            <h5 class="fw-bold text-primary text-uppercase">Frequently Asked Questions</h5>
            <h1 class="mb-0">Get informed about all important details before applying</h1>
          </div>
          <p class="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Question #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Question body
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Question #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Question body
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Question #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Question body
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="section-title position-relative pb-3 mb-5">
            <h5 class="fw-bold text-secondary text-uppercase">Ask Your Question</h5>
            <h1 class="mb-0">Have A Question? Feel Free to Contact Us</h1>
          </div>
          <div class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
            <form>
              <div class="row g-3">
                <div class="col-xl-12">
                  <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style={{ 'height': '55px' }} />
                </div>
                <div class="col-12">
                  <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{ 'height': '55px' }} />
                </div>
                <div class="col-12">
                  <textarea class="form-control bg-light border-0" rows="3" placeholder="Question"></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-dark w-100 py-3" type="submit">Send Question</button>
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
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 class="fw-bold text-primary text-uppercase">Testimonial</h5>
        <h1 class="mb-0">How Our Employees Feel About Our Company, Honestly</h1>
      </div>
      <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
        <div class="testimonial-item bg-light my-4">
          <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img class="img-fluid rounded" src="img/testimonial-1.jpg" style={{ 'width': '60px', 'height': '60px' }} />
            <div class="ps-4">
              <h4 class="text-primary mb-1">Employee Name</h4>
              <small class="text-uppercase">Position</small>
            </div>
          </div>
          <div class="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
        <div class="testimonial-item bg-light my-4">
          <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img class="img-fluid rounded" src="img/testimonial-2.jpg" style={{ 'width': '60px', 'height': '60px' }} />
            <div class="ps-4">
              <h4 class="text-primary mb-1">Employee Name</h4>
              <small class="text-uppercase">Position</small>
            </div>
          </div>
          <div class="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
        <div class="testimonial-item bg-light my-4">
          <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img class="img-fluid rounded" src="img/testimonial-3.jpg" style={{ 'width': '60px', 'height': '60px' }} />
            <div class="ps-4">
              <h4 class="text-primary mb-1">Employee Name</h4>
              <small class="text-uppercase">Position</small>
            </div>
          </div>
          <div class="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
        <div class="testimonial-item bg-light my-4">
          <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img class="img-fluid rounded" src="img/testimonial-4.jpg" style={{ 'width': '60px', 'height': '60px' }} />
            <div class="ps-4">
              <h4 class="text-primary mb-1">Employee Name</h4>
              <small class="text-uppercase">Position</small>
            </div>
          </div>
          <div class="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Employees() {
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 class="fw-bold text-primary text-uppercase">Our Employees</h5>
        <h1 class="mb-0">Get to know some of the people you will be working with</h1>
      </div>
      <div class="row g-5">
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div class="team-item bg-light rounded overflow-hidden">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="img/team-1.jpg" alt="" />
              <div class="team-social">
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              </div>
            </div>
            <div class="text-center py-4">
              <h4 class="text-primary">Full Name</h4>
              <p class="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div class="team-item bg-light rounded overflow-hidden">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="img/team-2.jpg" alt="" />
              <div class="team-social">
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              </div>
            </div>
            <div class="text-center py-4">
              <h4 class="text-primary">Full Name</h4>
              <p class="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div class="team-item bg-light rounded overflow-hidden">
            <div class="team-img position-relative overflow-hidden">
              <img class="img-fluid w-100" src="img/team-3.jpg" alt="" />
              <div class="team-social">
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
              </div>
            </div>
            <div class="text-center py-4">
              <h4 class="text-primary">Full Name</h4>
              <p class="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Blog() {
  return
  <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ 'max-width': '600px' }}>
        <h5 class="fw-bold text-primary text-uppercase">Latest Blog</h5>
        <h1 class="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div class="row g-5">
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div class="blog-item bg-light rounded overflow-hidden">
            <div class="blog-img position-relative overflow-hidden">
              <img class="img-fluid" src="img/blog-1.webp" alt="" />
              <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Job Interview</a>
            </div>
            <div class="p-4">
              <div class="d-flex mb-3">
                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
              </div>
              <h4 class="mb-3">Preparing for your interview in Codenator</h4>
              <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
              <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div class="blog-item bg-light rounded overflow-hidden">
            <div class="blog-img position-relative overflow-hidden">
              <img class="img-fluid" src="img/blog-2.webp" alt="" />
              <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Job Interview</a>
            </div>
            <div class="p-4">
              <div class="d-flex mb-3">
                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
              </div>
              <h4 class="mb-3">Our candidate assessment criteria</h4>
              <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
              <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div class="blog-item bg-light rounded overflow-hidden">
            <div class="blog-img position-relative overflow-hidden">
              <img class="img-fluid" src="img/blog-3.jpg" alt="" />
              <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">Marketing</a>
            </div>
            <div class="p-4">
              <div class="d-flex mb-3">
                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
              </div>
              <h4 class="mb-3">Codenator rated as one of the best employers</h4>
              <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
              <a class="text-uppercase" href="">Read More <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function Clients() {
  return <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5 mb-5">
      {/* TODO: add header */}
      <div class="bg-white">
        <div class="owl-carousel vendor-carousel">
          <img src="img/vendor-1.jpg" alt="" />
          <img src="img/vendor-2.jpg" alt="" />
          <img src="img/vendor-3.jpg" alt="" />
          <img src="img/vendor-4.jpg" alt="" />
          <img src="img/vendor-5.jpg" alt="" />
          <img src="img/vendor-6.jpg" alt="" />
          <img src="img/vendor-7.jpg" alt="" />
          <img src="img/vendor-8.jpg" alt="" />
          <img src="img/vendor-9.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
}

function Footer() {
  return <><div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-4 col-md-6 footer-about">
          <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
            <a href="index.html" class="navbar-brand">
              <h1 class="m-0 text-white"><i class="fa fa-user-tie me-2"></i>Codenator</h1>
            </a>
            <p class="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
            <form action="">
              <div class="input-group">
                <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                <button class="btn btn-dark">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-8 col-md-6">
          <div class="row gx-5">
            <div class="col-lg-4 col-md-12 pt-5 mb-5">
              <div class="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 class="text-light mb-0">Get In Touch</h3>
              </div>
              <div class="d-flex mb-2">
                <i class="bi bi-geo-alt text-primary me-2"></i>
                <p class="mb-0">123 Street, Istanbul, Turkey</p>
              </div>
              <div class="d-flex mb-2">
                <i class="bi bi-envelope-open text-primary me-2"></i>
                <p class="mb-0">info@codenator.com</p>
              </div>
              <div class="d-flex mb-2">
                <i class="bi bi-telephone text-primary me-2"></i>
                <p class="mb-0">+012 345 67890</p>
              </div>
              <div class="d-flex mt-4">
                <a class="btn btn-primary btn-square me-2" href="#"><i class="fw-normal"><FontAwesomeIcon icon={faTwitter} /></i></a>
                <a class="btn btn-primary btn-square me-2" href="#"><i class="fw-normal"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a class="btn btn-primary btn-square me-2" href="#"><i class="fw-normal"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                <a class="btn btn-primary btn-square" href="#"><i class="fw-normal"><FontAwesomeIcon icon={faInstagram} /></i></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div class="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 class="text-light mb-0">Links</h3>
              </div>
              <div class="link-animated d-flex flex-column justify-content-start">
                <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Jobs</a>
                <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="container-fluid text-white" style={{ 'background': '#061429' }}>
      <div class="container text-center">
        <div class="row justify-content-end">
          <div class="col-lg-8 col-md-6">
            <div class="d-flex align-items-center justify-content-center" style={{ 'height': '75px' }}>
              <p class="mb-0">&copy; <a class="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.

                {/* <!--This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. -->*/}
                Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
              <br />Distributed By: <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
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

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* <!-- Icon Font Stylesheet --> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

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

        {/* <!-- JavaScript Libraries --> */}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        {/* TODO: remove this once we convert the code full to react-bootstrap */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/counterup/counterup.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>

        {/* <!-- Template Javascript --> */}
        <Script src="js/main.js"></Script>


      </div>
    </>
  )
}
