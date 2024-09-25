import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaAngleDoubleUp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedin,
  FaChevronDown,
  FaCartPlus, // You can use an icon for the cart
  FaChevronRight, // For the arrow icon
} from "react-icons/fa";

import { GiEarthAmerica } from "react-icons/gi";
import "./HeaderComponent.css";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="it-header-2-lang" className="it-header-2-lang d-none d-sm-block">
      <ul>
        <li>
          <a href="#" onClick={toggleDropdown}>
            English
            <span>
              <GiEarthAmerica />
            </span>
            <FaChevronDown className={`arrow ${isOpen ? 'open' : ''}`} />
          </a>
          {isOpen && (
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
          )}
        </li>
      </ul>
    </div>
  );
};

function HeadComponent() {
  return (
    <nav className="it-header-2-top-height">
      <div className="it-header-2-top-height-left">
        <div className="container">
          <div className="row">
            <div className="nav-col">
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
            <div className="custom-col-4 ">
              <div className="it-header-2-top-right text-end">
              <LanguageDropdown />
              <ul>
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
    </nav>
  );
}

export default HeadComponent;
