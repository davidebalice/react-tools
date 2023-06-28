import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-area">
                <div className="container">
              
                    <div className="footer-bottom">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-xl-9 col-lg-8">
                                <div className="footer-copy-right">
                                    <p>
                                        Copyright &copy;
                                        <script>document.write(new Date().getFullYear());</script> 
                                        All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="footer-social f-right">
                                    <a>Stay Connected</a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fas fa-globe"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer