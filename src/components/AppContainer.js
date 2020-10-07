import React from "react";
import Footer from "./Footer";
import Header from "./Header";
// import Preloader from "./common/Preloader";

const AppContainer = ({ children }) => {
  return (
    <div id="wrapper">
      <div className="w1">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AppContainer;
