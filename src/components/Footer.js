import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="main-footer moveDown">
      <section className="bt-fade-white-015">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="lqd-column col-md-4 col-xs-6">
              <figure className="mb-60 mb-md-0">
                <img
                  id="footerLogo"
                  alt="Webbravo logo"
                  src="assets/img/logo/webbravo-logo.jpg"
                />
              </figure>
            </div>
            <div className="lqd-column col-md-4 col-xs-6 text-right text-md-center">
              <p className="font-size-14 mb-60 mb-md-0">
                © {new Date().getFullYear() + " "}
                <span className="font-weight-bold text-secondary">
                  Webbravo
                </span>
                . All Rights Reserved.
              </p>
            </div>
            <div className="lqd-column col-md-4 col-xs-12 text-center text-md-right">
              <ul className="social-icon branded-text social-icon-md">
                <li>
                  <a
                    href="https://facebook.com/webbravo.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/teamwebbravo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:4natcom@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGooglePlusG} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/webbravo.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
