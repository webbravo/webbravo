import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="navbar-brand" to="/" rel="home">
      <span className="navbar-brand-inner">
        <img
          className="mobile-logo-default"
          id="logo"
          src="assets/img/logo/black-icon.png"
          alt="Webbravo Mobile Logo"
        />
        <img
          className="logo-default"
          id="logo"
          src="assets/img/logo/white-icon.png"
          alt="Webbravo Logo"
        />
      </span>
    </Link>
  );
}
