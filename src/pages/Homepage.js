import React from "react";
import AppContainer from "../components/AppContainer";
import MainBanner from "../components/MainBanner";
import About from "../components/AboutUs";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const Homepage = () => {
  return (
    <AppContainer>
      <MainBanner />
      <About />
      <Services />
      <OurWork />
      <Blog />
      <Contact />
    </AppContainer>
  );
};

export default Homepage;
