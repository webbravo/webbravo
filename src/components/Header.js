import React from "react";
import Logo from "./common/Logo";

const Header = () => {
  return (
    <header id="header" className="nospace">
      <div className="header-holder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
