import React from "react";

const Fact = () => {
  return (
    <div className="container pad-top-lg" data-scroll-index="1">
      {/* <!-- start of main-heading --> */}
      <header className="main-heading text-center row mar-bottom-sm">
        <div className="col-xs-12">
          <h2 className="heading">We Build Your Idea</h2>
          <p>
            When you start your business the only way to beat the competition
            <br />
            is to race ahead not to stop and fight.
          </p>
        </div>
      </header>
      {/* <!-- end of main-heading --> */}
    </div>
  );
};

const FactOne = () => {
  return (
    <div className="container pad-top-lg" data-scroll-index="1">
      {/* <!-- start of main-heading --> */}
      <header className="main-heading text-center row mar-bottom-sm">
        <div className="col-xs-12">
          <h2 className="heading">We develop ideas with you</h2>
          <p className="lead">
            We work closely with you to understand your business needs
            <br />
            and create the relevant products and services you want for your
            business.
          </p>
          <br />
        </div>
      </header>
      {/* <!-- end of main-heading --> */}
    </div>
  );
};

export { Fact, FactOne };
