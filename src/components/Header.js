import React from "react";
import Logo from "./common/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header main-header-overlay">
      <div className="mainbar-wrap">
        <div className="megamenu-hover-bg"></div>
        <div className="container-fluid mainbar-container">
          <div className="mainbar">
            <div className="row mainbar-row align-items-lg-stretch px-4">
              <div className="col pr-5">
                <div className="navbar-header">
                  <Logo />
                  <button
                    type="button"
                    className="navbar-toggle collapsed nav-trigger style-mobile"
                    data-toggle="collapse"
                    data-target="#main-header-collapse"
                    aria-expanded="false"
                    data-changeclassnames='{ "html": "mobile-nav-activated overflow-hidden" }'
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="bars">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col">
                <div
                  className="collapse navbar-collapse"
                  id="main-header-collapse"
                >
                  <ul
                    id="primary-nav"
                    className="main-nav main-nav-hover-underline-1 nav align-items-lg-stretch justify-content-lg-center"
                    data-submenu-options='{ "toggleType":"fade", "handler":"mouse-in-out" }'
                    data-localscroll="true"
                  >
                    <li className="is-active">
                      <a href="#content">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">Home</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#about">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">About</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">Services</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#blog">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">Blog</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        <span className="link-icon"></span>
                        <span className="link-txt">
                          <span className="link-ext"></span>
                          <span className="txt">Contact</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col text-right">
                <div className="header-module">
                  <ul className="social-icon social-icon-sm scheme-white font-size-16">
                    <li>
                      <Link to="/" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
