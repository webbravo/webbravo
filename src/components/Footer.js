import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="bg-dark3 f-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <span className="pull-left">© Be 2020, All Rights Reserved.</span>
              <span className="pull-right">
                <a href="/">Policy Privacy</a> &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <a href="/">Terms &amp; Conditions</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
