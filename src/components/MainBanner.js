import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";
const MainBanner = () => {
  return (
    <section
      className="vc_row fullheight d-flex flex-wrap align-items-end mb-80"
      data-parallax="true"
      data-parallax-options='{"parallaxBG":true}'
      data-slideshow-bg="true"
      data-slideshow-options='{"delay":3500,"effect":"scale","imageArray":["../assets/demo/sliders/webbravo-img.jpg","../assets/demo/sliders/webbravo.jpg"]}'
    >
      <span className="row-bg-loader">
        <span className="row-bg-loader-inner"></span>
      </span>
      <div className="container">
        <div className="row">
          <div
            className="lqd-column col-md-10 col-md-offset-1 text-center py-7"
            data-custom-animations="true"
            data-ca-options={{
              triggerHandler: "inview",
              animationTarget: "all-childs",
              duration: "1200",
              delay: "150",
              easing: "easeOutQuint",
              direction: "forward",
              initValues: { translateY: 31, translateZ: -108, opacity: 0 },
              animations: { translateY: 0, translateZ: 0, opacity: 1 },
            }}
          >
            <header className="fancy-title">
              <h6 className="text-uppercase font-weight-normal ltr-sp-2 text-white mb-5">
                WE LOVE CREATING
              </h6>
              <h2 className="text-white lh-15 mb-4">
                <span className="font-size-3-3x lh-1">Digital Ideas</span>
              </h2>
              <div className="row">
                <div className="lqd-column col-md-8 col-md-offset-2">
                  <p className="text-white font-size-24 mb-1">
                    We create digital means to help you serve your customers,
                    <br />
                    and connect your buisness to new customers online.
                  </p>
                </div>
              </div>
            </header>
            <Link
              to="https://api.whatsapp.com/send?phone=2348062416692&text=Hi+Webbravo+I+would+like+to+have+a+consultation+time+with+you"
              className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-black mb-2"
              data-localscroll="true"
              data-localscroll-options={{ scrollBelowSection: true }}
            >
              <span>
                <span className="btn-txt">free Consultation</span>
              </span>
            </Link>
            <a
              href="https://forms.gle/U3ybc5dSqjujyPFh7"
              className="btn btn-default text-uppercase circle btn-bordered border-thick fresco btn-icon-left btn-icon-circle btn-icon-bordered font-size-16 font-weight-bold ltr-sp-05 px-2 color-secondary mb-2"
            >
              <span>
                <span className="btn-txt" id="redBtn">
                  Get a website
                </span>
                <span className="btn-icon">
                  <FontAwesomeIcon size={70} icon={faSmileBeam} />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
