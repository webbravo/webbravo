import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="holder pull-right">
      <a
        href={"#/"}
        className="pe-7s-menu menu-opener opener pull-right visible-xs"
      >
        {}
      </a>

      <Link to="#" className="pe-7s-search search-opener pull-right opener">
        {" "}
        {}
      </Link>
      <nav id="nav" className="text-uppercase">
        <ul className="list-inline">
          <li>
            <Link className="drop-link" to="#">
              Home
            </Link>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <Link to="home1.html">HomePage 1</Link>
                </li>
                <li>
                  <Link to="home2.html">HomePage 2</Link>
                </li>
                <li>
                  <Link to="home3.html">HomePage 3</Link>
                </li>
                <li>
                  <Link to="home4.html">HomePage 4</Link>
                </li>
                <li>
                  <Link to="home5.html">HomePage 5</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="drop-link" to="#">
              Pages
            </Link>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <Link to="about.html">About Us</Link>
                </li>
                <li>
                  <Link to="team.html">Team</Link>
                </li>
                <li>
                  <Link to="services.html">Services</Link>
                </li>
                <li>
                  <Link to="contact.html">Contact</Link>
                </li>
                <li>
                  <Link to="coming-soon.html">Coming Soon</Link>
                </li>
                <li>
                  <Link to="404.html">Error 404</Link>
                </li>
                <li>
                  <Link to="500.html">Error 500</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="drop-link" to="#">
              Portfolio
            </Link>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <Link to="portfolio.html">Portfolio Standard</Link>
                </li>
                <li>
                  <Link to="portfolio2.html">Portfolio Masonry</Link>
                </li>
                <li>
                  <Link to="portfolio-detail.html">Portfolio Details</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="drop-link" to="#">
              Shop
            </Link>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <Link to="shop.html">Shop 3 Columns</Link>
                </li>
                <li>
                  <Link to="shop2.html">Shop 4 Columns</Link>
                </li>
                <li>
                  <Link to="shop-sidebar.html">Shop Left Sidebar</Link>
                </li>
                <li>
                  <Link to="shop-sidebar2.html">Shop Right Sidebar</Link>
                </li>
                <li>
                  <Link to="shop-detail.html">Product Details</Link>
                </li>
                <li>
                  <Link to="cart.html">Cart Page</Link>
                </li>
                <li>
                  <Link to="checkout.html">Checkout Page</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="drop-link" to="#">
              Blog
            </Link>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <Link to="blog.html">Blog Standard</Link>
                </li>
                <li>
                  <Link to="blog-sidebar.html">Blog Left Sidebar</Link>
                </li>
                <li>
                  <Link to="blog-sidebar2.html">Blog Right Sidebar</Link>
                </li>
                <li>
                  <Link to="blog-detail-fullwidth.html">Blog Single</Link>
                </li>
                <li>
                  <Link to="blog-detail-leftsidebar.html">
                    Blog Single Leftside
                  </Link>
                </li>
                <li>
                  <Link to="blog-detail.html">Blog Single Rightside</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link className="drop-link" to="#">
              Elements
            </Link>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <Link to="icontext.html">Icon with text</Link>
                </li>
                <li>
                  <Link to="testimonial.html">Testimonials</Link>
                </li>
                <li>
                  <Link to="price-table.html">Pricing Table</Link>
                </li>
                <li>
                  <Link to="progressbar.html">Progress Bar</Link>
                </li>
                <li>
                  <Link to="calltoaction.html">Call To Action</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
