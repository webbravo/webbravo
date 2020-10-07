import React from "react";

const MainBanner = () => {
  return (
    <section className="main-banner text-center">
      <div className="slide bg-img-full">
        <span className="bg-overlay"></span>
        <div className="caption">
          <div className="holder">
            <h1 className="heading add">
              Go Digital
              <a
                href="https://www.youtube.com/embed/ANwf8AE3_d0?autoplay=1"
                className="play fa fa-play lightbox fancybox.iframe"
              >
                {""}
              </a>
              Today
            </h1>
            <p>
              We create digital means to help you serve your customers,
              <br />
              and connect your buisness to new customers online.
            </p>
          </div>
        </div>
      </div>
      <a
        href={"#/"}
        data-scroll-nav="1"
        className="btn-bottom pe-7s-angle-down"
      >
        {}
      </a>
    </section>
  );
};

export default MainBanner;
