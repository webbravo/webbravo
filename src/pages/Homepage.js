import React from "react";
import AppContainer from "../components/AppContainer";
import MainBanner from "../components/MainBanner";
import { FactOne } from "../components/Fact";
import CallToAction from "../components/common/CallToAction";

const Homepage = () => {
  return (
    <AppContainer>
      <MainBanner />
      <FactOne />
      <CallToAction />
    </AppContainer>
  );
};

export default Homepage;
