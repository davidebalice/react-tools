import React from "react";
import { motion } from "framer-motion";
import classes from "./Tools.module.css";
import cart from "../../assets/img/cart.jpg";
import gradient from "../../assets/img/gradient.jpg";
import calculator from "../../assets/img/calculator.jpg";
import calendar from "../../assets/img/calendar.jpg";
import dark from "../../assets/img/dark.jpg";
import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="toolArea pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img src={cart} className={classes.toolsImg} alt="cart" />
                    <div className="cat-cap">
                      <h5>Cart</h5>
                      <p>Example of cart implementation using context hook.</p>
                    </div>
                  </div>

                  <div className={classes.bottomCard}>
                    <div className={classes.bottomCardRow}>
                      <a href="#" target="_blank">
                        <div className={classes.bottomCardIconContainer}>
                          <BiLinkAlt className={classes.bottomCardIcon} />
                        </div>
                      </a>
                      <a href="#" target="_blank">
                        <div className={classes.bottomCardUrl}>
                          <span className={classes.bottomCardUrlText}>222 fghtreger</span>
                        </div>
                      </a>
                    </div>
                    <div className={classes.bottomCardRow}>
                      <a href="#" target="_blank">
                        <div className={classes.bottomCardIconContainer}>
                          <FaGithub className={classes.bottomCardIcon} />
                        </div>
                      </a>
                      <a href="#" target="_blank">
                        <span className={classes.bottomCardUrlText}>222</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <img
                  src={gradient}
                  className={classes.toolsImg}
                  alt="gradient"
                />
                <div className="cat-cap">
                  <h5>Color gradients</h5>
                  <p>Generates variations of a color, ideal for web design</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <img
                  src={calculator}
                  className={classes.toolsImg}
                  alt="gradient"
                />
                <div className="cat-cap">
                  <h5>Calculator</h5>
                  <p>Calculator with basic functions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <img src={calendar} className={classes.toolsImg} alt="cart" />
                <div className="cat-cap">
                  <h5>Events calendar</h5>
                  <p>Add events to Calendar</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <img src={dark} className={classes.toolsImg} alt="gradient" />
                <div className="cat-cap">
                  <h5>Dark mode</h5>
                  <p>Activate/deactivate dark mode with a switch</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <img
                  src={calculator}
                  className={classes.toolsImg}
                  alt="gradient"
                />
                <div className="cat-cap">
                  <h5>Calculator</h5>
                  <p>Calculator with basic functions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Tools;
