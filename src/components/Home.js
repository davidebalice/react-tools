import React from 'react'
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
    
        <section className="categories-area section-padding3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-pen"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">UI/UX Design</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-speaker"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Digital Marketing</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-cat text-center mb-50">
                            <div className="cat-icon">
                                <span className="flaticon-portfolio"></span>
                            </div>
                            <div className="cat-cap">
                                <h5><a href="services.html">Website Design</a></h5>
                                <p>Free resource that will help nderstand thecv designc process and improve theroi  nderstand the design process andisei impro are of vquality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </motion.main>
  )
}

export default Home