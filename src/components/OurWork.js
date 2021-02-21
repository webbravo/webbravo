import React from "react";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <section class="vc_row pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="lqd-column col-md-12">
            <div
              class="carousel-container carousel-nav-circle carousel-nav-bordered carousel-nav-sm"
              data-filterable-carousel="true"
            >
              <div class="row">
                <div class="lqd-column col-xs-12">
                  <div
                    class="liquid-filter-items align-items-end align-items-end justify-content-between mb-7"
                    id="portfolio-carousel-1"
                  >
                    <div class="liquid-filter-items-inner">
                      <span class="liquid-filter-items-label size-xxl font-weight-bold my-0">
                        Our Work
                      </span>
                      <ul class="filter-list text-uppercase ltr-sp-1 filter-list-inline size-sm font-weight-bold">
                        <li class="active" data-filter="*">
                          <span>All Categories</span>
                        </li>
                        <li data-filter=".school">
                          <span>School Website</span>
                        </li>
                        <li data-filter=".business">
                          <span>Business</span>
                        </li>
                        <li data-filter=".branding">
                          <span>Branding Strategy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="lqd-column col-xs-12">
                  <div
                    class="carousel-items row pf-carousel-equal-height"
                    data-lqd-flickity='{ "equalHeightCells": true, "filters": "#portfolio-carousel-1", "prevNextButtons": true, "navArrow": 6, "fullwidthSide": true, "buttonsAppendTo": "#portfolio-carousel-1" }'
                    data-custom-animations="true"
                    data-ca-options='{"triggerHandler":"inview","animationTarget":".ld-pf-item","animateTargetsWhenVisible":"true","duration":"1000","delay":100,"easing":"easeOutQuint","initValues":{"translateX":36,"opacity":0},"animations":{"translateX":0,"opacity":1}}'
                  >
                    <div class="carousel-item col-lg-8 col-md-6 col-xs-12 school">
                      <div class="ld-pf-item ld-pf-light ld-pf-light-alt pf-details-inside pf-details-visible pf-details-full pf-details-h-str pf-details-v-end title-size-48 pf-hover-shadow">
                        <div class="ld-pf-inner">
                          <div class="ld-pf-image">
                            <figure
                              style={{
                                backgroundImage:
                                  "url('assets/demo/portfolio/TreasureCrestSchool.png')",
                              }}
                            >
                              <img
                                src="assets/demo/portfolio/TreasureCrestSchool.png"
                                alt="Portfolio"
                              />
                            </figure>
                          </div>
                          <div class="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div class="ld-pf-details">
                            <div class="ld-pf-details-inner">
                              <h3 class="ld-pf-title h4 font-weight-semibold">
                                Treasure Crest School
                              </h3>
                              <p class="ld-pf-category ld-pf-category-lined">
                                <span
                                  class="ld-pf-category-item font-style-italic"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 170, "delay": 20, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 0, "opacity": 1 }, "animations": { "translateY": -10, "opacity": 0 } }'
                                >
                                  Brand strategy
                                </span>
                                <span
                                  class="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 150, "delay": 20, "startDelay": 100, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 10, "opacity": 0 }, "animations": { "translateY": 0, "opacity": 1 } }'
                                >
                                  Discover More
                                </span>
                              </p>
                            </div>
                          </div>
                          <Link href="#" class="liquid-overlay-link"></Link>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item col-lg-6 col-md-6 col-xs-12 business">
                      <div class="ld-pf-item ld-pf-light ld-pf-light-alt pf-details-inside pf-details-visible pf-details-full pf-details-h-str pf-details-v-end title-size-48 pf-hover-shadow">
                        <div class="ld-pf-inner">
                          <div class="ld-pf-image">
                            <figure
                              style={{
                                backgroundImage:
                                  "url('assets/demo/portfolio/SertifiedConsult.png')",
                              }}
                            >
                              <img
                                src="assets/demo/portfolio/SertifiedConsult.png"
                                alt="Portfolio"
                              />
                            </figure>
                          </div>
                          <div class="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div class="ld-pf-details">
                            <div class="ld-pf-details-inner">
                              <h3 class="ld-pf-title h4 font-weight-semibold">
                                Sertified Consult
                              </h3>
                              <p class="ld-pf-category ld-pf-category-lined">
                                <span
                                  class="ld-pf-category-item font-style-italic"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 170, "delay": 20, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 0, "opacity": 1 }, "animations": { "translateY": -10, "opacity": 0 } }'
                                >
                                  Website strategy
                                </span>
                                <span
                                  class="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 150, "delay": 20, "startDelay": 100, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 10, "opacity": 0 }, "animations": { "translateY": 0, "opacity": 1 } }'
                                >
                                  Discover More
                                </span>
                              </p>
                            </div>
                          </div>
                          <Link href="#" class="liquid-overlay-link"></Link>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item col-lg-8 col-md-6 col-xs-12 school">
                      <div class="ld-pf-item ld-pf-light ld-pf-light-alt pf-details-inside pf-details-visible pf-details-full pf-details-h-str pf-details-v-end title-size-48 pf-hover-shadow">
                        <div class="ld-pf-inner">
                          <div class="ld-pf-image">
                            <figure
                              style={{
                                backgroundImage:
                                  "url('assets/demo/portfolio/MerdanSchoolWebsite.png')",
                              }}
                            >
                              <img
                                src="assets/demo/portfolio/MerdanSchoolWebsite.png"
                                alt="Portfolio "
                              />
                            </figure>
                          </div>
                          <div class="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div class="ld-pf-details">
                            <div class="ld-pf-details-inner">
                              <h3 class="ld-pf-title h4 font-weight-semibold">
                                Merdan School Website
                              </h3>
                              <p class="ld-pf-category ld-pf-category-lined">
                                <span
                                  class="ld-pf-category-item font-style-italic"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 170, "delay": 20, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 0, "opacity": 1 }, "animations": { "translateY": -10, "opacity": 0 } }'
                                >
                                  Website design and School management syste
                                </span>
                                <span
                                  class="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 150, "delay": 20, "startDelay": 100, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 10, "opacity": 0 }, "animations": { "translateY": 0, "opacity": 1 } }'
                                >
                                  Discover More
                                </span>
                              </p>
                            </div>
                          </div>
                          <Link href="#" class="liquid-overlay-link"></Link>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item col-lg-5 col-md-6 col-xs-12 branding">
                      <div class="ld-pf-item ld-pf-light ld-pf-light-alt pf-details-inside pf-details-visible pf-details-full pf-details-h-str pf-details-v-end title-size-48 pf-hover-shadow">
                        <div class="ld-pf-inner">
                          <div class="ld-pf-image">
                            <figure
                              style={{
                                backgroundImage:
                                  "url('assets/demo/portfolio/branding.png')",
                              }}
                            >
                              <img
                                src="assets/demo/portfolio/branding.png"
                                alt="Portfolio 2 "
                              />
                            </figure>
                          </div>
                          <div class="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div class="ld-pf-details">
                            <div class="ld-pf-details-inner">
                              <h3 class="ld-pf-title h4 font-weight-semibold">
                                Personal brand
                              </h3>
                              <p class="ld-pf-category ld-pf-category-lined">
                                <span
                                  class="ld-pf-category-item font-style-italic"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 170, "delay": 20, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 0, "opacity": 1 }, "animations": { "translateY": -10, "opacity": 0 } }'
                                >
                                  Brand strategy
                                </span>
                                <span
                                  class="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 150, "delay": 20, "startDelay": 100, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 10, "opacity": 0 }, "animations": { "translateY": 0, "opacity": 1 } }'
                                >
                                  Discover More
                                </span>
                              </p>
                            </div>
                          </div>
                          <Link href="#" class="liquid-overlay-link"></Link>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item col-lg-7 col-md-6 col-xs-12 branding">
                      <div class="ld-pf-item ld-pf-light ld-pf-light-alt pf-details-inside pf-details-visible pf-details-full pf-details-h-str pf-details-v-end title-size-48 pf-hover-shadow">
                        <div class="ld-pf-inner">
                          <div class="ld-pf-image">
                            <figure
                              style={{
                                backgroundImage:
                                  "url('assets/demo/portfolio/TheAcademicMentor_website.png')",
                              }}
                            >
                              <img
                                src="assets/demo/portfolio/TheAcademicMentor_website.png"
                                alt="Merdan School Website "
                              />
                            </figure>
                          </div>
                          <div class="ld-pf-bg bg-gradient-black-transparent-bt"></div>
                          <div class="ld-pf-details">
                            <div class="ld-pf-details-inner">
                              <h3 class="ld-pf-title h4 font-weight-semibold">
                                The Academic Mentor - Website
                              </h3>
                              <p class="ld-pf-category ld-pf-category-lined">
                                <span
                                  class="ld-pf-category-item font-style-italic"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 170, "delay": 20, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 0, "opacity": 1 }, "animations": { "translateY": -10, "opacity": 0 } }'
                                >
                                  Brand strategy
                                </span>
                                <span
                                  class="read-more color-primary text-uppercase font-weight-bold ltr-sp-05 text-primary font-size-14 ml-2"
                                  data-split-text="true"
                                  data-split-options='{ "type": "chars" }'
                                  data-custom-animations="true"
                                  data-ca-options='{ "triggerHandler": "mouseenter", "triggerTarget": ".ld-pf-item", "triggerRelation": "closest", "offTriggerHandler": "mouseleave", "animationTarget": "all-childs", "duration": 150, "delay": 20, "startDelay": 100, "offDuration": 100, "easing": "easeOutCirc", "initValues": { "translateY": 10, "opacity": 0 }, "animations": { "translateY": 0, "opacity": 1 } }'
                                >
                                  Discover More
                                </span>
                              </p>
                            </div>
                          </div>
                          <Link href="#" class="liquid-overlay-link"></Link>
                        </div>
                      </div>
                    </div>
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

export default OurWork;
