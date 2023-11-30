import React from "react";
import { motion } from "framer-motion";
import classes from "./Tools.module.css";
import cart from "../../assets/img/cart.jpg";
import gradient from "../../assets/img/gradient.jpg";
import calculator from "../../assets/img/calculator.jpg";
import calendar from "../../assets/img/calendar.jpg";
import dark from "../../assets/img/dark.jpg";
import form from "../../assets/img/form.jpg";
import maps from "../../assets/img/maps.jpg";
import meteo from "../../assets/img/meteo.jpg";
import lorem from "../../assets/img/lorem.jpg";
import loading from "../../assets/img/loading.jpg";
import snapshot from "../../assets/img/snapshot.jpg";
import food from "../../assets/img/food.jpg";
import autocomplete from "../../assets/img/autocomplete.jpg";
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
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={loading}
                      className={classes.toolsImg}
                      alt="loading"
                    />
                    <div className="cat-cap">
                      <h5>Loading optimization</h5>
                      <p>Examples of content loading optimization</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={calendar}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Events calendar</h5>
                      <p>Add events to Calendar</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={dark}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Dark mode</h5>
                      <p>Activate/deactivate dark mode with a switch</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={food}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Food cart</h5>
                      <p>Example of food card implementation</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={form}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Form validation</h5>
                      <p>Simple form validation developed in React</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={maps}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Google Maps</h5>
                      <p>Implementation of Google Maps in React</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={meteo}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Meteo</h5>
                      <p>This app use open-meteo.com api </p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://meteo-react.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/meteo-app-react"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={lorem}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Lorem ipsum generator</h5>
                      <p>Dummy text generator </p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://lorem-ipsum-generator.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/react-lorem-ipsum-generator"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={snapshot}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Snapshot</h5>
                      <p>Take a snapshot of a web page with html2canvas </p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
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
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={autocomplete}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Autocomplete</h5>
                      <p>Search bar with autocomplete function</p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://autocomplete.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/react-autocomplete"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="toolCard text-center mb-50">
                <div className={classes.cardColumn}>
                  <div>
                    <img
                      src={gradient}
                      className={classes.toolsImg}
                      alt="gradient"
                    />
                    <div className="cat-cap">
                      <h5>Color gradients</h5>
                      <p>
                        Generates variations of a color, ideal for web design
                      </p>
                    </div>
                  </div>
                  <div className={classes.bottomCard}>
                    <a
                      href="https://aaaaaaaaaaaaaaaaaaaaaaaa.davidebalice.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <BiLinkAlt className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>Link</span>
                    </a>
                    <a
                      href="https://github.com/davidebalice/aaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.cardButton}
                    >
                      <FaGithub className={classes.bottomCardIcon} />
                      <span className={classes.bottomCardUrlText}>GitHub</span>
                    </a>
                  </div>
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
