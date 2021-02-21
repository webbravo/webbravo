import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="vc_row pt-70 pb-70">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div
            className="lqd-column col-md-6"
            data-custom-animations="true"
            data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":31,"translateZ":-108,"opacity":0},"animations":{"translateY":0,"translateZ":0,"opacity":1}}'
          >
            <figure>
              <img
                src="assets/img/logo/black-icon.png"
                id="logo"
                alt="Webbravo"
              />
            </figure>
            <h2
              className="mt-2 mb-3 font-weight-normal lh-1"
              data-fittext="true"
              data-fittext-options='{ "compressor": 0.65, "maxFontSize": 72, "minFontSize": 46 }'
              data-split-text="true"
              data-split-options='{"type":"lines"}'
            >
              <strong>good</strong> design <br />
              <strong>good</strong> business
            </h2>
            <p className="h3 font-weight-normal pr-md-7 mr-md-7 mb-40">
              <i>We know that good design means good business.</i>
            </p>
            <p className="pr-md-7 mr-md-7 mb-60">
              We help our clients succeed by creating brand identities, digital
              experiences, and print materials that communicate clearly, achieve
              marketing goals, and look fantastic.
            </p>
            <Link
              to="#"
              className="btn btn-solid text-uppercase btn-md circle btn-bordered border-thin font-size-14 font-weight-bold ltr-sp-025 px-2"
              data-localscroll="true"
              data-localscroll-options='{"scrollBelowSection":true}'
            >
              <span>
                <span className="btn-txt">More about us</span>
              </span>
            </Link>
          </div>
          <div className="lqd-column col-md-5 col-md-offset-1">
            <div className="lqd-parallax-images">
              <div
                className="liquid-img-group-single"
                data-shadow-style="4"
                data-inview="true"
                data-animate-shadow="true"
              >
                <div className="liquid-img-group-img-container">
                  <div
                    className="liquid-img-container-inner"
                    data-parallax="true"
                    data-parallax-from='{"translateY":78}'
                    data-parallax-to='{"translateY":-78}'
                    data-parallax-options='{"overflowHidden":false,"easing":"linear"}'
                  >
                    <figure>
                      <img
                        src="assets/demo/misc/parallax-img-1.jpg"
                        alt="Good Design"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div
                className="liquid-img-group-single w-75"
                data-shadow-style="4"
                data-inview="true"
                data-animate-shadow="true"
              >
                <div className="liquid-img-group-img-container">
                  <div
                    className="liquid-img-container-inner"
                    data-parallax="true"
                    data-parallax-from='{"translateY":107}'
                    data-parallax-to='{"translateY":-134}'
                    data-parallax-options='{"overflowHidden":false,"easing":"linear"}'
                  >
                    <figure>
                      <img
                        src="assets/demo/misc/parallax-img-2.jpg"
                        alt="Good Design"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
