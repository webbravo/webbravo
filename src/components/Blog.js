import React from "react";

const Blog = () => {
  return (
    <section id="blog" class="bg-light vc_row pt-50 pb-75">
      <div class="container">
        <div class="row">
          <div class="lqd-column col-md-8 col-md-offset-2">
            <header class="fancy-title text-center mb-7">
              <h6 class="font-size-14 font-weight-bold text-uppercase text-secondary">
                News & Events
              </h6>
            </header>
          </div>
          <div class="lqd-column col-md-12">
            <div class="row">
              <div
                class="lqd-column col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center"
                data-custom-animations="true"
                data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"160","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":52,"translateZ":-142,"rotateX":-64,"opacity":0},"animations":{"translateY":0,"translateZ":0,"rotateX":0,"opacity":1}}'
              >
                <header class="fancy-title">
                  <h2
                    class="mt-0 mb-4 text-black"
                    data-fittext="true"
                    data-fittext-options='{ "compressor": 0.65,"maxFontSize": 72,"minFontSize": 30 }'
                    data-split-text="true"
                    data-split-options='{"type":"lines"}'
                  >
                    We want to share our knowledge with you.
                  </h2>
                  <p
                    class="mb-60 font-size-24 text-black px-4"
                    data-split-text="true"
                    data-split-options='{"type":"lines"}'
                  >
                    We have created alot of articles on business and technology
                    on Medium.
                  </p>
                </header>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@webbravo"
                  class="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-16 font-weight-bold ltr-sp-05 px-2"
                >
                  <span>
                    <span class="btn-txt">Read more articles</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
