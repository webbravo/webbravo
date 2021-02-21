import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      class="vc_row pt-110 pb-120 "
      style={{ backgroundImage: "url(assets/demo/bg/bg-6.jpg)" }}
      data-parallax="true"
      data-parallax-options='{ "parallaxBG": true }'
    >
      <div class="container">
        <div class="row">
          <div
            class="lqd-column col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center"
            data-custom-animations="true"
            data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"160","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":52,"translateZ":-142,"rotateX":-64,"opacity":0},"animations":{"translateY":0,"translateZ":0,"rotateX":0,"opacity":1}}'
          >
            <header class="fancy-title">
              <h2
                class="mt-0 mb-4 text-white"
                data-fittext="true"
                data-fittext-options='{ "compressor": 0.65,"maxFontSize": 72,"minFontSize": 30 }'
                data-split-text="true"
                data-split-options='{"type":"lines"}'
              >
                Start building your business today!
              </h2>
              <p
                class="mb-60 font-size-24 text-white px-4"
                data-split-text="true"
                data-split-options='{"type":"lines"}'
              >
                We work closely with you to understand your business needs and
                create the relevant products and services you want for your
                business.
              </p>
            </header>
            <a
              href="https://api.whatsapp.com/send?phone=23408062416692&text=Hi+I+would+like+to+design+a+website"
              class="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2"
            >
              <span>
                <span class="btn-txt">Contact Us Now</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
