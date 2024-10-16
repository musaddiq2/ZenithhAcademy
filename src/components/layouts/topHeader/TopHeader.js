import React, { useState } from "react";
import "./TopHeader.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMap } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
//import { MdKeyboardArrowDown } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

function TopHeader() {
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // Media queries
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className="nav-container">
      <div className="top-list-one">
        <ul style={{ display: isMobile ? "none" : "flex" }}>
          <li>
            <a href="tel:8304889629">
              <span>
                <FiPhone />
              </span>
              (+91) 8304889629
            </a>
          </li>
          <li>
            <a href="mailto:zenithhacademy@gmail.com">
              <span>
                <FiMail />
              </span>
              zenithhacademy@gmail.com
            </a>
          </li>
          <li>
            <a>
            <span>
              <TfiLocationPin />
            </span>
            Y.N Tower,Aurangabad(Chh. Sambhaji Nagar),Maharashtra.
            </a>
          </li>
        </ul>
      </div>

      {/* Right Section with language dropdown and social media icons */}
      <div className="top-right">
        {/* <div className="language-dropdown" onClick={toggleDropdown}>
          <ul>
            <li>
              English
              <span>
                <MdKeyboardArrowDown size={16} />
              </span>
              {isDropdownOpen && (
                <ul className="language-dropdown-menu">
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
        </div> */}
        <div className="social-icons">
          <a href="#facebook">
            <FaFacebookF />
          </a>
          <a href="#twitter">
            <FaTwitter />
          </a>
          <a href="#linkedin">
            <FaLinkedin />
          </a>
          <a href="#instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default TopHeader;
