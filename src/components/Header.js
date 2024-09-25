import React from "react";
import {
  FaPhoneAlt,
  FaAngleDoubleUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedin,
  FaCartPlus, // You can use an icon for the cart
  FaChevronRight, // For the arrow icon
} from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/custom-animation.css';
import '../assets/css/slick.css';
import '../assets/css/nice-select.css';
import '../assets/css/flaticon_xoft.css';
import '../assets/css/swiper-bundle.css';
import '../assets/css/meanmenu.css';
import '../assets/css/font-awesome-pro.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/spacing.css';
import '../assets/css/main.css';

const Header = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Educate - University, Online Courses, School & Education Template</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png" />
      {/* CSS here */}
      

      {/* preloader */}
      <div id="preloader">
        <div className="preloader">
          <span />
          <span />
        </div>
      </div>
      {/* preloader end */}

      {/* back-to-top-start */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <FaAngleDoubleUp />
      </button>
      {/* back-to-top-end */}

      <header>
        <div className="it-header-transparent">
          <div className="it-header-2-top-area it-header-2-top-height">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-5 col-sm-4">
                  <div className="it-header-2-top-left">
                    <ul className="text-center text-sm-start">
                      <li className="d-none d-lg-inline-block">
                        <a href="tel:568367-987-237">
                          <span>
                            <FaPhoneAlt />
                          </span>
                          (568) 367-987-237
                        </a>
                      </li>
                      <li>
                        <a href="mailto:govillage@gmail.com">
                          <span>
                            <FaEnvelope />
                          </span>
                          govillage@gmail.com
                        </a>
                      </li>
                      <li className="d-none d-xl-inline-block">
                        <a href="#">
                          <span>
                            <FaMapMarkerAlt />
                          </span>
                          Hudson, Wisconsin(WI), 54016
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8 d-none d-sm-block">
                  <div className="it-header-2-top-right text-end">
                    <ul>
                      <li>
                        <div id="it-header-2-lang" className="it-header-2-lang d-none d-sm-block">
                          <ul>
                            <li>
                              <a href="javascript:void(0)">
                                English
                                <span>
                                  <GiEarthAmerica />
                                </span>
                              </a>
                              <ul className="it-header-2-lang-submenu">
                                <li>
                                  <a href="#">Arabic</a>
                                </li>
                                <li>
                                  <a href="#">Spanish</a>
                                </li>
                                <li>
                                  <a href="#">Mandarin</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="it-header-2-top-social">
                          <a href="#">
                            <FaFacebookF />
                          </a>
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaSkype />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-top-area-end */}
          {/* header-area-start */}
          <div id="header-sticky" className="it-header-2-area">
            <div className="container container-1380">
              <div className="it-header-2-plr">
                <div className="it-header-wrap p-relative">
                  <div className="row align-items-center">
                    <div className="col-xl-2 col-6">
                      <div className="it-header-2-logo">
                        <a href="index.html">
                          <img src="images/logo-black.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-7 d-none d-xl-block">
                      <div className="it-header-2-main-menu">
                        <nav className="it-menu-content">
                          <ul>
                            <li className="has-dropdown p-static">
                              <a href="index.html">home</a>
                              <div className="it-submenu submenu has-home-img">
                                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-6">
                                  <div className="col home-img">
                                    <div className="home-img-thumb mb-15">
                                      <img src="images/home-1.jpg" alt="" />
                                      <div className="home-img-btn">
                                        <a className="it-btn-white-sm" href="index.html">
                                          Multi Page
                                        </a>
                                        <a className="it-btn-white-sm" href="index-one-page.html">
                                          One Page
                                        </a>
                                      </div>
                                    </div>
                                    <div className="home-img-content text-center">
                                      <h4 className="home-img-title">
                                        <a href="index.html">Home 01</a>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <a href="about-us.html">about us</a>
                            </li>
                            <li className="has-dropdown">
                              <a href="services-1.html">services</a>
                              <ul className="it-submenu submenu">
                                <li>
                                  <a href="services-1.html">services 01</a>
                                </li>
                                <li>
                                  <a href="services-2.html">services 02</a>
                                </li>
                                <li>
                                  <a href="services-3.html">services 03</a>
                                </li>
                                <li>
                                  <a href="service-details.html">services details</a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="#">pages</a>
                              <ul className="it-submenu submenu has-megamenu">
                                <li>
                                  <a href="course-1.html">Course 01</a>
                                </li>
                                <li>
                                  <a href="course-2.html">Course 02</a>
                                </li>
                                <li>
                                  <a href="course-details.html">Course Details</a>
                                </li>
                                <li>
                                  <a href="teacher.html">Teacher</a>
                                </li>
                                <li>
                                  <a href="teacher-details.html">Teacher Details</a>
                                </li>
                                <li>
                                  <a href="price.html">Price</a>
                                </li>
                                <li>
                                  <a href="event.html">Event</a>
                                </li>
                                <li>
                                  <a href="event-details.html">Event Details</a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="testimonial.html">Testimonial</a>
                                </li>
                                <li>
                                  <a href="Instructor-registration.html">Instructor Registration</a>
                                </li>
                                <li>
                                  <a href="student-registration-1.html">Student Registration 01</a>
                                </li>
                                <li>
                                  <a href="student-registration-2.html">Student Registration 02</a>
                                </li>
                                <li>
                                  <a href="faq.html">Faq</a>
                                </li>
                                <li>
                                  <a href="signin.html">Sign IN</a>
                                </li>
                                <li>
                                  <a href="signup.html">Sign UP</a>
                                </li>
                                <li>
                                  <a href="404.html">Error</a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-xl-3 col-6">
                      <div className="it-header-2-right d-flex align-items-center justify-content-end">
                        <div className="it-header-2-icon">
                          <a href="#">
                            <FaCartPlus />
                          </a>
                        </div>
                        <div className="it-header-2-button d-none d-md-block">
                          <a className="it-btn" href="contact.html">
                            <span>
                              Contact Us
                              <FaChevronRight />
                            </span>
                          </a>
                        </div>
                        <div className="it-header-2-bar d-xl-none">
                          <button className="it-menu-bar">
                            <i className="fa-solid fa-bars" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-area-end */}
        </div>
      </header>
    </>
  );
};

export default Header;
