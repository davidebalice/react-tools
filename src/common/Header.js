import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <BrowserRouter>
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img
                  src={window.location.origin + "/assets/img/logo/loder.jpg"}
                  alt="preloader img"
                />
              </div>
            </div>
          </div>
        </div>

        <header>
          <div className="header-area">
            <div className="main-header header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-1">
                    <div className={classes.logoContainer}>
                      <Link exact to="/">
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
                      <div className="main-menu f-right d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <Link exact to="/">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link to="/calculator">Calculator</Link>
                            </li>
                            <li>
                              <Link to="/calendar">Calendar</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
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
