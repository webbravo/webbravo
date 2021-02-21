import React from "react";
import { Link } from "react-router-dom";
import logo_default from "../../assets/img/logo/white-icon.png";
import logo_black from "../../assets/img/logo/black-icon.png";

export default function Logo() {
  return (
    <Link className="navbar-brand" to="/" rel="home">
      <span className="navbar-brand-inner">
        <img
          className="mobile-logo-default"
          id="logo"
          src={logo_black}
          alt="Webbravo Mobile Logo"
        />
        <img
          className="logo-default"
          id="logo"
          src={logo_default}
          alt="Webbravo Logo"
        />
      </span>
    </Link>
  );
}
