import React from "react";
import { motion } from "framer-motion";
import classes from "./Tools.module.css";
import cart from "../../assets/img/cart.jpg";
import gradient from "../../assets/img/gradient.jpg";
import calculator from "../../assets/img/calculator.jpg";
import calendar from "../../assets/img/calendar.jpg";
import dark from "../../assets/img/dark.jpg";

const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="categories-area pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" target="_blank">
                <div className="single-cat text-center mb-50">
                  <img src={cart} className={classes.toolsImg} alt="cart" />
                  <div className="cat-cap">
                    <h5>Cart</h5>
                    <p>Example of cart implementation using context hook.</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" target="_blank">
                <div className="single-cat text-center mb-50">
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
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" target="_blank">
                <div className="single-cat text-center mb-50">
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
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" target="_blank">
                <div className="single-cat text-center mb-50">
                  <img src={calendar} className={classes.toolsImg} alt="cart" />
                  <div className="cat-cap">
                    <h5>Events calendar</h5>
                    <p>Add events to Calendar</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" target="_blank">
                <div className="single-cat text-center mb-50">
                  <img src={dark} className={classes.toolsImg} alt="gradient" />
                  <div className="cat-cap">
                    <h5>Dark mode</h5>
                    <p>Activate/deactivate dark mode with a switch</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <a href="#" target="_blank">
                <div className="single-cat text-center mb-50">
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
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Tools;
