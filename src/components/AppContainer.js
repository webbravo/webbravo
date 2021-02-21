import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const AppContainer = ({ children }) => {
  return (
    <>
      <Header />
      <main id="content" className="content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppContainer;
