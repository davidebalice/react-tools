import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <div className="header-area">
            <div className="main-header header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-1">
                    <div className={classes.logoContainer}>
                      <Link to="/">
                        <img
                          src={
                            window.location.origin + "/assets/img/logo/logo.png"
                          }
                          alt="db logo"
                          className={classes.logo}
                        />
                      </Link>
                      <img
                        src={
                          window.location.origin +
                          "/assets/img/logo/logoReact.png"
                        }
                        alt="react logo"
                        className={classes.logoReact}
                      />
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="menu-main d-flex align-items-center justify-content-end">
                      <div className="main-menu f-right d-none d-lg-block"></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </BrowserRouter>
    </>
  );
};

export default Header;
