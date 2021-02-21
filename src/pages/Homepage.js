import React from "react";
import AppContainer from "../components/AppContainer";
import MainBanner from "../components/MainBanner";
import About from "../components/AboutUs";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <AppContainer>
      <MainBanner />
      <About />
      <Services />
    </AppContainer>
  );
};

export default Homepage;
