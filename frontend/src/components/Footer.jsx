import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer footer-transparent d-print-none"
      style={footerStyle}
    >
      <div className="container-xl">
        <div className="row text-center align-items-center flex-row-reverse">
          <div className="col-lg-auto ms-lg-auto"></div>
          <div className="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul className="list-inline list-inline-dots mb-0">
              <li className="list-inline-item">
                Copyright &copy; {new Date().getFullYear()}{" "}
                <Link to="#" className="link-secondary">
                  Easy Lending Buddy
                </Link>
                . All rights reserved.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 150,
  width: "100%",
  height: "5vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1b293a",
  zIndex: 1000,
};

export default Footer;
