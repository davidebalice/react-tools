import React from "react";
import classes from "./Header.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className={classes.footerCopyright}>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    Davide Balice
                    <br />
                    <a
                      href="https://www.davidebalice.dev"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.footerLink}
                    >
                      www.davidebalice.dev
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
